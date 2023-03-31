import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Layout from '@/components/Layout';

const defaultAttributes = {};
const defaultImage = { url: 'https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680278578/thinkgeek-product-generator/img-ikkJma7JlWA6dn1Ih88mdjYB_pmhgxr.png' }
const defaultProductTitle = 'ThinkGeek Replicator 2320';
const defaultProductTagline = 'The product is produced... for lack of a better word... perfect!';
const defaultProductDescriptionLong = `Introducing the ThinkGeek Replicator 2320, a cutting-edge 3D printer that is light years ahead of its time. With this machine at your fingertips, you can bring your wildest imaginations to life with the touch of a button. From intricate circuitry to exotic life forms, the Replicator 2320 can print it all.

Equipped with advanced replicator technology, this machine is the perfect tool for any sci-fi enthusiast. Whether you're a Star Wars fan looking to create your own lightsaber hilt or a Trekkie hoping to bring your favorite starship to life, the Replicator 2320 has you covered.

With its powerful computer brain and top-of-the-line printing materials, the Replicator 2320 is capable of printing anything you can dream up. Want to recreate the iconic alien weaponry from Independence Day? No problem. How about a working replica of the time-traveling DeLorean from Back to the Future? Easy as pie.

But the Replicator 2320 isn't just a tool for recreating sci-fi props and gadgets. It's also a powerful instrument for innovation and creativity. With the ability to print complex mechanical parts, medical implants, and even human organs, this machine is revolutionizing the world of science and technology.

So, whether you're a hobbyist, a professional engineer, or a mad scientist bent on world domination, the ThinkGeek Replicator 2320 is the ultimate tool for turning your dreams into reality. Don't miss your chance to own this revolutionary 3D printer and join the ranks of the greatest sci-fi creators of all time.`;
const defaultProductDescriptionBullets = [
  'Revolutionary 3D printer capable of printing anything',
  'Advanced replicator technology for recreating sci-fi props and gadgets',
  'Can print complex mechanical parts, medical implants, and even human organs',
  'Perfect for hobbyists, engineers, and mad scientists alike',
  'Step into the future with the ThinkGeek Replicator 2320'
];
const defaultProductSpecifications = [
  'State-of-the-art 3D printing technology',
  'Printing resolution up to 0.1 mm',
  'Maximum print volume of 300 mm x 300 mm x 300 mm',
  'Supports a wide range of printing materials, including ABS, PLA, and nylon',
  'Compatible with most 3D modeling software',
  'User-friendly interface with touch screen controls',
  'Easy maintenance with automatic calibration and self-cleaning features',
  'Sturdy and durable construction for long-lasting use',
];
const defaultMetaDescription = 'Equipped with advanced replicator technology and a range of user-friendly features, this cutting-edge 3D printer that can bring your wildest imaginations to life. With a maximum print volume of 300 mm x 300 mm x 300 mm and compatibility with a variety of printing materials, this printer is perfect for hobbyists, engineers, and anyone who wants to step into the future of printing technology. Get your hands on the Replicator 2320 and start creating today!';
const defaultOgDescription = 'Revolutionize the way you create with the ThinkGeek Replicator 2320! This cutting-edge 3D printer is equipped with advanced replicator technology, user-friendly features, and a sturdy construction built to last. Whether you\'re a hobbyist, engineer, or mad scientist, the Replicator 2320 is the perfect tool for bringing your wildest imaginations to life. Get yours today and step into the future of printing technology!';

const productPrice = `$149.99`;

export default function Home() {

  const attributes = {};

  const {
    productTitle = defaultProductTitle, 
    productTagline = defaultProductTagline, 
    productDescriptionLong = defaultProductDescriptionLong, 
    productDescriptionBullets= defaultProductDescriptionBullets,
    productSpecifications = defaultProductSpecifications,
    metaDescription = defaultMetaDescription, 
    ogDescription = defaultOgDescription, 
  } = attributes;

  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="" />
        <meta
          property="og:url"
          content={defaultImage.url}
        />
        <meta
          property="og:image"
          content={defaultImage.url}
        />
        <meta property="og:site_name" content="ThinkGeek" />
        <meta
          property="og:description"
          content={ogDescription}
        />

        <meta itemProp="name" content={productTitle} />
        <meta
          itemProp="description"
          content={ogDescription}
        />
        <meta
          itemProp="image"
          content={defaultImage.url}
        />
        <meta
          name="twitter:url"
          content="https://web.archive.org/web/20150404213211im_/http://thinkgeek.com/product/iljk"
        />
        <meta name="twitter:title" content={productTitle} />
        <meta
          name="twitter:description"
          content={ogDescription}
        />
        <meta
          name="twitter:image"
          content={defaultImage.url}
        />
        <meta name="twitter:image:width" content={300} />
        <meta name="twitter:image:height" content={300} />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content={productPrice} />
        <meta name="twitter:label2" content="Category" />
        <meta name="twitter:data2" content="Interests :: Amazing Goodies" />
        <link rel="canonical" href="https://www.thinkgeek.app/  " />
      </Head>
      
      
      <div className="header">
        <p className="breadcrumb">
          <a href="https://web.archive.org/web/20150401044600/http://www.thinkgeek.com/">Home</a>
          &nbsp;&nbsp;&gt;&nbsp;
          <a href="https://web.archive.org/web/20150401044600/http://www.thinkgeek.com/interests/">
            Interests
          </a>
          &nbsp;&nbsp;&gt;&nbsp;
          <a href="https://web.archive.org/web/20150401044600/http://www.thinkgeek.com/interests/looflirpa/">
            Amazing Goodies
          </a>
          &nbsp;&nbsp;&gt;&nbsp;
        </p>
        <h1 className="interests title title-page">
          Gotcha!
        </h1>
      </div>
      <div className="clear" />
      <div style={{ fontSize: '1.2em' }}>
        {/* #END #product-details */}
        {/* Right Side Container */}
        <h2>April Fools!</h2>
        <p style={{fontSize: '1.6em'}}>We got you sooooo bad... right?</p>
        <p style={{fontSize: '1.2em'}}>Anyways, go generate a new one or trick your friends 👀</p>
        <p  style={{ marginBottom: '2em'}}>
          <Link href="/" style={{ fontSize: '1.2em', fontWeight: 'bold'}}>Generate a New One</Link>
        </p>

        <h4 className="prodheader" style={{ marginTop: '2.5em'}}>
          How does this work?
        </h4>
        
        <p>
          This project uses OpenAI to first generate a product with ChatGPT.
        </p>

        <p>
          That description is fed into DALL-E to generate an image.
        </p>

        <p>
          The assets are delivered with <a href="https://cloudinary.com/">Cloudinary</a> from a Next.js app.
        </p>

        <h4 className="prodheader" style={{ marginTop: '2.5em'}}>
          Learn how to use the ChatGPT and DALL-E APIs
        </h4>

        <p>
          <a href="https://www.youtube.com/watch?v=BQPqqQLGweM">Pokémon Generator with ChatGPT & DALL-E API in Next.js</a>
        </p>

        <h4 className="prodheader" style={{ marginTop: '2.5em'}}>
          Learn how to optimize images in Next.js
        </h4>

        <p>
          <a href="https://www.youtube.com/watch?v=7lhUsK-FxYI">Optimize Images, Responsive Sizing, & AI Cropping in Next.js with Next Cloudinary</a>
        </p>

        <h4 className="prodheader" style={{ marginTop: '2.5em'}}>
          Learn how to upload images in Next.js
        </h4>

        <p>
          <a href="https://www.youtube.com/watch?v=82gACPNBkaM">Upload Images to Cloudinary in React & Next.js</a>
        </p>

        {/* MAIN PRODUCT PAGE */}
        <div className="social-sharing">
          <span className="social-button-pinterest">
            <a class="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=ThinkGeek%20Replicator%202320%20on%20ThinkGeek">
              Tweet
            </a>
          </span>
        </div>
        {/* #END #contentblob */}
      </div>{" "}
      {/* #END #product-main */}

      <div className="clear" />
      
    </Layout>
  )
}
