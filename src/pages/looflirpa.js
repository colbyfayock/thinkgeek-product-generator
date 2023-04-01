import Head from 'next/head'
import Link from 'next/link'

import Layout from '@/components/Layout';

const defaultImage = { url: 'https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680278578/thinkgeek-product-generator/img-ikkJma7JlWA6dn1Ih88mdjYB_pmhgxr.png' }
const defaultProductTitle = 'ThinkGeek Replicator 2320';
const defaultMetaDescription = 'Equipped with advanced replicator technology and a range of user-friendly features, this cutting-edge 3D printer that can bring your wildest imaginations to life. With a maximum print volume of 300 mm x 300 mm x 300 mm and compatibility with a variety of printing materials, this printer is perfect for hobbyists, engineers, and anyone who wants to step into the future of printing technology. Get your hands on the Replicator 2320 and start creating today!';
const defaultOgDescription = 'Revolutionize the way you create with the ThinkGeek Replicator 2320! This cutting-edge 3D printer is equipped with advanced replicator technology, user-friendly features, and a sturdy construction built to last. Whether you\'re a hobbyist, engineer, or mad scientist, the Replicator 2320 is the perfect tool for bringing your wildest imaginations to life. Get yours today and step into the future of printing technology!';

const productPrice = `$149.99`;

export default function Home() {

  const attributes = {};

  const {
    productTitle = defaultProductTitle, 
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
      

      <div style={{ fontSize: '1.2em' }}>
        {/* #END #product-details */}
        {/* Right Side Container */}
        <h1 style={{marginTop: 0}}>Gotcha!</h1>
        
        <p style={{fontSize: '1.6em'}}>I know you were looking forward to printing the Portable Hug Machine, or didn't you get that one?</p>

        <p style={{fontSize: '1.2em'}}>Anyways, go generate a new one or trick your friends!</p>

        <p  style={{ marginBottom: '2em'}}>
          <Link href="/" style={{ fontSize: '1.2em', fontWeight: 'bold'}}>Generate a New One</Link>
        </p>

        <h4 className="prodheader" style={{ marginTop: '2.5em'}}>
          What&apos;s all this fuss about?
        </h4>

        <p>
          Behold!  <a href="https://www.engadget.com/2014-04-01-thinkgeek-april-fools.html">The tale of ThinkGeek Looflirpa.</a>
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
          The assets are uploaded to and delivered from <a href="https://cloudinary.com/?utm_campaign=devx_aprilfools&utm_medium=referral">Cloudinary</a>.
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
            <a className="twitter-share-button"
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
