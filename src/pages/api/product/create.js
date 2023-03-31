const { PRODUCT_ATTRIBUTES } = require('@/data/products');

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  try {
    // The OpenAI SDK isn't supported on the Edge runtime, so we need to hit the API directly

    const results = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `
          Create new ThinkGeek product.
          The fake product is a large, futuristic 3d printer that is a reference to a sci-fi movie.
          Create the following unique attributes:
          - Product Title
          - Product Tagline
          - Long product description
          - Clever product bullet points
          - Product specifications including technical details
          - The product's appearance and what it looks like visually in less than 600 characters
          - An SEO meta description for the product
          - A social media Open Graph description for the product
          Format the response in the following JSON object ${JSON.stringify(PRODUCT_ATTRIBUTES)}.`
        }]
      }),
      //   messages: [{
      //     role: 'user',
      //     content: `Create a new ThinkGeek April Fools product with the following unique attributes:
      //     - Product Title
      //     - Product Tagline
      //     - Long product description
      //     - Clever product bullet points
      //     - Product specifications including technical details
      //     - The product's appearance and what it looks like visually in less than 600 characters
      //     - An SEO meta description for the product
      //     - A social media Open Graph description for the product
      //     Format the response in the following JSON object ${JSON.stringify(PRODUCT_ATTRIBUTES)}.`
      //   }]
      // }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
    }).then(r => r.json());

    console.log(`Results: ${JSON.stringify(results)}}`);
    
    const attributes = JSON.parse(results.choices[0].message.content);

    return new Response(
      JSON.stringify({
        attributes
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  } catch(e) {
    console.log(`Failed to create product: ${e.message}`);
    return new Response(
      JSON.stringify({
        error: e.message
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
}