import { useState } from 'react';
import Head from 'next/head'

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
      </Head>
      
      
      <div className="header">
        <p className="breadcrumb">
          <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">Home</a>
          &nbsp;&nbsp;&gt;&nbsp;
          <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
            Interests
          </a>
          &nbsp;&nbsp;&gt;&nbsp;
          <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/looflirpa/">
            Amazing Goodies
          </a>
          &nbsp;&nbsp;&gt;&nbsp;
        </p>
        <h1 className="interests title title-page">
          Gotcha!
        </h1>
      </div>
      <div className="clear" />
      <div>
        {/* #END #product-details */}
        {/* Right Side Container */}
        {/* MAIN PRODUCT PAGE */}
        <div className="social-sharing">
          <span className="social-button-pinterest">
            SHARE
          </span>
          <span className="social-button-gplus">
            SHARE
          </span>
          <span className="social-button-wanelo">
            SHARE
          </span>
        </div>
        <ul id="tabs">
          <li>
            <a
              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
              className="selected"
            >
              {" "}
              Main Description{" "}
            </a>
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
              id="additional-images"
            >
              Additional Images{" "}
            </a>
          </li>
        </ul>
        <div className="contentblob">
          {/* Main description */}
          <div id="proddescription">

            <h4 className="prodheader">
              Info
            </h4>
            
            asdf
          </div>

          <div id="bullets"></div>
          
          <div className="page-actions actions">
            <ul className="nav">
              <li className="nav-01">
                <a
                  className="butt0n butt0n-blue control scroll-top"
                  href="#mainwrapper"
                >
                  Back to Product Details!
                  <i className="icon-chevron-up" />
                </a>
              </li>
            </ul>
          </div>
          <div id="upsells">
            <h3>Timmy and the TG Staff think you&apos;ll like...</h3>
            <ul className="clearfix">
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                  <img
                    src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/1a1d_bag_of_holding_con-survival_ed_updated.jpg"
                    width={128}
                    height={128}
                    alt="Bag of Holding - Con-Survival Edition"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                    Bag of Holding - Con-Survival Edition
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                  <img
                    src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/1d89_d20_bowl_set.jpg"
                    width={128}
                    height={128}
                    alt="D20 Bowl Set"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                    D20 Bowl Set
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                  <img
                    src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/1cd7_d20_cupcake_mold.jpg"
                    width={128}
                    height={128}
                    alt="D20 Critical Hit Mini Cake Pan"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                    D20 Critical Hit Mini Cake Pan
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                  <img
                    src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/deaa_critical_hit_d20.gif"
                    width={128}
                    height={128}
                    alt="Critical Hit LED D20 Die"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/">
                    Critical Hit LED D20 Die
                  </a>
                </p>
              </li>
              <li className="last">
                <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/">
                  <img
                    src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/gift-icon-120x120.jpg"
                    alt="Gift Certificates"
                    width={128}
                    height={128}
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/">
                    Gift Certificates
                  </a>
                </p>
              </li>
            </ul>
            <div className="clear" />
          </div>{" "}
          {/* #END #upsells */}
        </div>{" "}
        {/* #END #contentblob */}
      </div>{" "}
      {/* #END #product-main */}
      <div id="gutter-right">
        {/* Alternate Styles */}
        {/* Customer Action Shots */}
        <div className="gutter-right-section">
          <h4>Customer Action Shots</h4>
          <a
            href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/action-shots"
            className="actionshot"
          >
            <img
              src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/suyas-icon.gif"
              alt="Send us your action shots!"
              width={108}
              height={58}
            />
          </a>
        </div>

        <div id="gutter-right-also" className="gutter-right-section">
          <h4>Your Fellow Smart Masses Also Bought</h4>
          <ul>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
              >
                <img
                  src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/iljn_steam-powered_steam_machine.gif"
                  alt="Steam-Powered Gaming Cabinet"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
                  title=" Steam-Powered Gaming Cabinet"
                >
                  Steam-Powered Gaming Cabinet
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
              >
                <img
                  src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/iljr_voltron_cat_condo.jpg "
                  alt="Voltron Cat Condo"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
                  title=" Voltron Cat Condo"
                >
                  Voltron Cat Condo
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
              >
                <img
                  src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/iljo_selfie_rig.jpg"
                  alt="bullet time selfie rig"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
                  title="bullet time selfie rig"
                >
                  &quot;Bullet Time&quot; Selfie Rig
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljl/"
              >
                <img
                  src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/iljl_gotg_bottled_drinks.jpg"
                  alt="GotG Collector's Edition Groot Beer and Rocket Fuel Two-Pack"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljl/"
                  title=" GotG Collector's Edition Groot Beer and Rocket Fuel Two-Pack"
                >
                  GotG Collector&apos;s Edition Groot Beer and Rocket Fuel
                  Two-Pack
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljp/"
              >
                <img
                  src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_auto,q_auto/v1680276139/thinkgeek-product-generator/iljp_mad_max_power_wheels.jpg"
                  alt="Power Wheels Desert Drifters"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljp/"
                  title=" Power Wheels Desert Drifters"
                >
                  Power Wheels Desert Drifters
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="clear" />
      
    </Layout>
  )
}