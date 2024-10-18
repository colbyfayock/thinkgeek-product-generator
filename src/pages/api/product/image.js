const cloudinary = require('cloudinary').v2;
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const config = {
  maxDuration: 20,
};

export default async function handler(req, res) {
  try {
    const body = req.body && JSON.parse(req.body);
    const { description } = body || {};

    const { data } = await openai.createImage({
      prompt: `Create an image of a new ThinkGeek product with a plain colored background that has no text or objects from the description with empty space around the product: ${description}`,
      size: '1024x1024',
    });

    const image = data?.data[0];

    const upload = await cloudinary.uploader.upload(image.url, {
      folder: 'thinkgeek-product-generator-uploads'
    });

    res.status(200).json({
      image: {
        url: upload.secure_url
      }
    });
  } catch(e) {
    console.log(`Failed to create Product image: ${e.message}`);
    res.status(500).json({
      error: e.message
    });
  }
}
