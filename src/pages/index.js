import { useState } from 'react';
import Head from 'next/head'

import Layout from '@/components/Layout';

const defaultAttributes = {};
const defaultImage = { url: 'https://res.cloudinary.com/colbycloud-apps/image/upload/v1680271201/img-N6DKsrjvRAljmv3STWfyXw2L_qiwohw.png' }
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

export default function Home() {

  const [attributes, setAttributes] = useState(defaultAttributes);
  const [image, setImage] = useState(defaultImage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    productTitle = defaultProductTitle, 
    productTagline = defaultProductTagline, 
    productDescriptionLong = defaultProductDescriptionLong, 
    productDescriptionBullets= defaultProductDescriptionBullets,
    productSpecifications = defaultProductSpecifications,
    metaDescription = defaultMetaDescription, 
    ogDescription = defaultOgDescription, 
  } = attributes;

  async function handleOnGenerate(e) {
    e.preventDefault();

    setIsLoading(true);
    setAttributes(defaultAttributes);
    setImage(defaultImage);
    setError(undefined);

    try {
      const data = await fetch('/api/product/create').then(res => res.json());

      setAttributes(data.attributes);

      const { image } = await fetch('/api/product/image', {
        method: 'POST',
        body: JSON.stringify({
          description: data.attributes.productAppearance
        })
      }).then(res => res.json());
      
      setImage(image);
    } catch(e) {
      setError(e.message);
    }

    setIsLoading(false);
  }


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
          content="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/?cpg=fbl_iljk"
        />
        <meta
          property="og:image"
          content="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/frontsquare/iljk_encounter_wearable_quest.jpg"
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
          content="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljk_encounter_wearable_quest.jpg"
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
          content="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/frontsquare/iljk_encounter_wearable_quest.jpg"
        />
        <meta name="twitter:image:width" content={300} />
        <meta name="twitter:image:height" content={300} />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content="$79.99" />
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
          { productTitle }
        </h1>
      </div>
      <div className="clear" />
      <div id="product-main">
        <div id="productimage">
          <img
            className="badge-invented"
            src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/other/badges/badge_custom.png"
            alt="Invented at ThinkGeek"
          />
          <div className="prod_gallery">
            <div id="image">
              {/* begin: main image */}
              <a
                id="carousel_front"
                href="https://web.archive.org/web/20150404213211/http://a.tgcdn.net/images/products/zoom/iljk_encounter_wearable_quest.jpg"
                title=""
                rel="group1"
              >
                <img
                  width={300}
                  height={300}
                  src={image.url}
                  alt=""
                  border={0}
                  style={{ display: "block" }}
                />
                <div className="caption">
                  <p
                    rel="http://a.tgcdn.net/images/products/frontsquare/iljk_encounter_wearable_quest.jpg"
                    style={{ display: "block" }}
                  >
                    Click to zoom
                  </p>
                </div>
              </a>
              {/* end: main image */}
              {/* begin: additional images */}
              <a
                id="carousel_32456"
                href="https://web.archive.org/web/20150404213211/http://a.tgcdn.net/images/products/additional/large/iljk_encounter_wearable_quest_hall.gif"
                rel="group1"
                title=""
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_hall.gif"
                  alt=""
                  border={0}
                />
                <div className="caption">
                  <p rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_hall.gif">
                    Click to zoom
                  </p>
                </div>
              </a>
              <a
                id="carousel_32458"
                href="https://web.archive.org/web/20150404213211/http://a.tgcdn.net/images/products/additional/large/iljk_encounter_wearable_quest_scrns.jpg"
                rel="group1"
                title=""
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_scrns.jpg"
                  alt=""
                  border={0}
                />
                <div className="caption">
                  <p rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_scrns.jpg">
                    Click to zoom
                  </p>
                </div>
              </a>
              <a
                id="carousel_32460"
                href="https://web.archive.org/web/20150404213211/http://a.tgcdn.net/images/products/additional/large/iljk_encounter_wearable_quest_ear.jpg"
                rel="group1"
                title=""
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_ear.jpg"
                  alt=""
                  border={0}
                />
                <div className="caption">
                  <p rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_ear.jpg">
                    Click to zoom
                  </p>
                </div>
              </a>
              <span
                id="youtube"
                href="http://img.youtube.com/vi/ZBc_DlkLtN0/default.jpg"
                rel="group1"
                title="Video"
              >
                <iframe
                  width={300}
                  height={300}
                  src="//web.archive.org/web/20150404213211if_/http://www.youtube.com/embed/ZBc_DlkLtN0"
                  frameBorder={0}
                  allowFullScreen=""
                />
                <div className="caption">
                  <p rel="http://img.youtube.com/vi/ZBc_DlkLtN0/default.jpg">
                    Video
                  </p>
                </div>
              </span>
              {/* end: additional images */}
              <div
                id="caption_main"
                className="carousel_caption_wrap"
                style={{ visibility: "hidden" }}
              >
                <div className="carousel_caption" />
              </div>
              <div
                id="caption_32456"
                className="carousel_caption_wrap"
                style={{ visibility: "hidden" }}
              >
                <div className="carousel_caption" />
              </div>
              <div
                id="caption_32458"
                className="carousel_caption_wrap"
                style={{ visibility: "hidden" }}
              >
                <div className="carousel_caption" />
              </div>
              <div
                id="caption_32460"
                className="carousel_caption_wrap"
                style={{ visibility: "hidden" }}
              >
                <div className="carousel_caption" />
              </div>
            </div>
            <ul id="image_slider" className="jcarousel-skin-tango">
              <li>
                {/* begin: thumbnail for the main image */}
                <a
                  id="a_main"
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/zoom"
                  rel="http://a.tgcdn.net/images/products/frontsquare/iljk_encounter_wearable_quest.jpg"
                  className="image"
                  title={`${productTitle} Main Image`}
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/thumb/carousel/front/iljk_encounter_wearable_quest.jpg"
                    className="thumb thumb_selected"
                    alt={`${productTitle} Main Image`}
                    border={0}
                  />
                </a>
                {/* end: thumbnail for the main image */}
              </li>
              {/* begin: additional images */}
              <li>
                <a
                  id="a_32456"
                  href="#"
                  rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_hall.gif"
                  title=""
                  className="image"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carouselthumb/iljk_encounter_wearable_quest_hall.gif"
                    alt=""
                    className="thumb"
                    border={0}
                  />
                </a>
              </li>
              <li>
                <a
                  id="a_32458"
                  href="#"
                  rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_scrns.jpg"
                  title=""
                  className="image"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carouselthumb/iljk_encounter_wearable_quest_scrns.jpg"
                    alt=""
                    className="thumb"
                    border={0}
                  />
                </a>
              </li>
              <li>
                <a
                  id="a_32460"
                  href="#"
                  rel="http://a.tgcdn.net/images/products/additional/carousel/iljk_encounter_wearable_quest_ear.jpg"
                  title=""
                  className="image"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/additional/carouselthumb/iljk_encounter_wearable_quest_ear.jpg"
                    alt=""
                    className="thumb"
                    border={0}
                  />
                </a>
              </li>
              {/* end: additional images */}
              <li>
                <a
                  id="a_yt_ZBc_DlkLtN0"
                  href="#"
                  rel="//www.youtube.com/embed/ZBc_DlkLtN0"
                  className="image"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/other/youtube_carousel_play.png"
                    alt=""
                    className="thumb"
                    border={0}
                    style={{
                      background:
                        "url(https://web.archive.org/web/20150404213211im_/http://img.youtube.com/vi/ZBc_DlkLtN0/default.jpg) no-repeat"
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* END CAROUSEL */}
        </div>
        <div id="product-details">
          <div id="top_bullets">
            <h4 className="prodheader">
              { productTagline }
            </h4>
            <ul>
              {productDescriptionBullets.map(bullet => {
                return (
                  <li key="bullet">{ bullet }</li>
                );
              })}
            </ul>
            <a id="bullets-read-more" href="#tabs">
              <i className="icon-arrow-circle-down" />
              Read more...
            </a>
            <hr />
          </div>
          <div className="actions clearfix" id="product-actions">
            <form id="buy" className="clearfix">
              <h3>$79.99</h3>
              <p className="availability color-green">
                <i className="icon-ok" />
                Gygaxian Exercise
              </p>
              <p />
              <div className="quantity-box1">
                <strong>Quantity:</strong>
                <input
                  type="text"
                  name="qty"
                  id="quantity"
                  defaultValue={1}
                  size={3}
                  maxLength={3}
                />
              </div>
              <p className="buy_button extra-sku-ui">
                <a
                  className="butt0n butt0n-orange"
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/42.shtml?apc=encounter"
                  onClick={handleOnGenerate}
                >
                  Generate
                </a>
              </p>
              <p className="extra-sku-ui">
                <span className="fluff">or</span>
              </p>
              <div className="extra-sku-ui">
                <div
                  id="add-to-wish-list"
                  className="action action-email-me"
                >
                  <a
                    href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/42.shtml?apc=encounter"
                    className="button butt0n"
                    id="wish-list-add-looflirpa"
                  >
                    Add to Wish List
                  </a>
                </div>
              </div>
            </form>
          </div>{" "}
          {/* #END product-actions */}
        </div>{" "}
        {/* #END #product-details */}
        {/* Right Side Container */}
        {/* MAIN PRODUCT PAGE */}
        <div className="social-sharing">
          <span className="social-button-facebook">
            {/* <div
              id="facebook_like"
              className="fb-like"
              data-href="http://www.thinkgeek.com/product/iljk/"
              ref="fbl_iljk"
              data-colorscheme="light"
              data-layout="button_count"
              data-send="true"
              data-show-faces="false"
            /> */}
          </span>
          <span className="social-button-twitter">
            <a
              href="https://web.archive.org/web/20150404213211/https://twitter.com/share"
              className="twitter-share-button"
              data-lang="en"
              data-url="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/"
              data-count="horizontal"
            >
              &nbsp;
            </a>
          </span>
          <span className="social-button-pinterest">
            <a
              style={{ height: 59, verticalAlign: "bottom" }}
              href="https://web.archive.org/web/20150404213211/http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.thinkgeek.com%2Fproduct%2Filjk%2F&media=http%3A%2F%2Fwww.thinkgeek.com/images/products/frontsquare/iljk_encounter_wearable_quest.jpg&description="
              className="pin-it-button"
              count-layout="horizontal"
            >
              <img
                border={0}
                src="//web.archive.org/web/20150404213211im_/http://assets.pinterest.com/images/PinExt.png"
                title="Pin It"
              />
            </a>
          </span>
          <span className="social-button-gplus">
            {/* <g:plusone
              href="http://www.thinkgeek.com/product/iljk/"
              size="medium"
              recommendations="false"
            ></g:plusone> */}
          </span>
          <span className="social-button-wanelo">
            <a
              className="wanelo-save-button"
              href="//web.archive.org/web/20150404213211/http://wanelo.com/"
              data-url="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/"
              data-image="http://www.thinkgeek.com/images/products/frontsquare/iljk_encounter_wearable_quest.jpg"
              data-price="$79.99"
            ></a>
          </span>
        </div>
        <ul id="tabs">
          <li>
            <a
              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/"
              className="selected"
            >
              {" "}
              Main Description{" "}
            </a>
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/iljk/images/"
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
              { productTagline }
            </h4>
            { productDescriptionLong }
            <p>
              <b>Product Specifications &nbsp;</b>
            </p>
            <p />
            <ul>
              {productSpecifications.map(spec => {
                return (
                  <li key="spec">{ spec }</li>
                )
              })}
            </ul>
            <p />
          </div>
          {/* Bulleted portion of the description, if needed */}
          <div id="bullets"></div>
          <div
            id="description_video"
            className="description_video undercover push-bottom"
          >
            <a name="videos" />
            <h4 className="prodheader">
              { productTitle }
            </h4>
            <div
              className="undercover-trigger preview-thumb preview-thumb-youtube"
              style={{
                backgroundImage:
                  'url("https://web.archive.org/web/20150404213211im_/http://i3.ytimg.com/vi/ZBc_DlkLtN0/sddefault.jpg")'
              }}
            >
              <i className="icon-play" />
            </div>
            <div id="video" className="undercover-content">
              <iframe
                width={753}
                height={454}
                src="//web.archive.org/web/20150404213211if_/http://www.youtube.com/embed/ZBc_DlkLtN0?autoplay=1"
                frameBorder={0}
                allowFullScreen=""
              />
            </div>
          </div>
          <div
            id="facebook-comments"
            className="clear waypoint-lazy invisible"
          >
            <h3 className="prodheader">Wanna chat about it?</h3>
            <p className="note">
              Have questions about EnCounter - Wearable Interactive Quest or
              your order? We monitor these comments daily, but it may be
              faster to{" "}
              <a
                id="email-us-directly"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/get-help/"
              >
                email us directly
              </a>{" "}
              or call us at <strong>1-888-GEEKSTUFF</strong>.
            </p>
            <div
              className="waypoint-lazy-content hide fb-comments"
              data-callback="facebook"
              data-class="fb-comments"
              data-attr="data-href"
              data-attr-value="http://www.thinkgeek.com/product/iljk/"
              data-num-posts={3}
              data-width={702}
              data-colorscheme="light"
            />
          </div>
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
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1a1d/">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/thumb/largesquare/1a1d_bag_of_holding_con-survival_ed_updated.jpg"
                    width={128}
                    height={128}
                    alt="Bag of Holding - Con-Survival Edition"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1a1d/">
                    Bag of Holding - Con-Survival Edition
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1d89/">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/thumb/largesquare/1d89_d20_bowl_set.jpg"
                    width={128}
                    height={128}
                    alt="D20 Bowl Set"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1d89/">
                    D20 Bowl Set
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1cd7/">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/thumb/largesquare/1cd7_d20_cupcake_mold.jpg"
                    width={128}
                    height={128}
                    alt="D20 Critical Hit Mini Cake Pan"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/1cd7/">
                    D20 Critical Hit Mini Cake Pan
                  </a>
                </p>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/deaa/">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/products/thumb/largesquare/deaa_critical_hit_d20.gif"
                    width={128}
                    height={128}
                    alt="Critical Hit LED D20 Die"
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/product/deaa/">
                    Critical Hit LED D20 Die
                  </a>
                </p>
              </li>
              <li className="last">
                <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/order/certificate.cgi">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/other/misc/gift-icon-120x120.jpg"
                    alt="Gift Certificates"
                    width={128}
                    height={128}
                  />
                </a>
                <p>
                  <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/order/certificate.cgi">
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
              src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/other/suyas-icon.gif"
              alt="Send us your action shots!"
              width={108}
              height={58}
            />
          </a>
        </div>
        {/* END Customer Action Shots */}
        <div id="sidebar_video" className="gutter-right-section">
          <h4>Watch the Video</h4>
          <div
            style={{
              background:
                "url(https://web.archive.org/web/20150404213211im_/http://img.youtube.com/vi/ZBc_DlkLtN0/default.jpg) no-repeat"
            }}
          >
            <a href="#videos">
              <img
                width={114}
                height={85}
                src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/other/youtube_play.png"
              />
            </a>
          </div>
        </div>
        {/* Also Bought Upsells */}
        <div id="gutter-right-also" className="gutter-right-section">
          <h4>Your Fellow Smart Masses Also Bought</h4>
          <ul>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljn/"
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljn_steam-powered_steam_machine.gif"
                  alt="Steam-Powered Gaming Cabinet"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljn/"
                  title=" Steam-Powered Gaming Cabinet"
                >
                  Steam-Powered Gaming Cabinet
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljr/"
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljr_voltron_cat_condo.jpg "
                  alt="Voltron Cat Condo"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljr/"
                  title=" Voltron Cat Condo"
                >
                  Voltron Cat Condo
                </a>
              </p>
            </li>
            <li>
              <a
                className="also-bought-image"
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljo/"
              >
                <img
                  src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljo_selfie_rig.jpg"
                  alt="bullet time selfie rig"
                />
              </a>
              <p>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/iljo/"
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
                  src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljl_gotg_bottled_drinks.jpg"
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
                  src="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/products/thumb/largesquare/iljp_mad_max_power_wheels.jpg"
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
