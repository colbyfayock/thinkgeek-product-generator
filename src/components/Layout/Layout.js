import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className="tg-desktop tg-product">
      <Head>
        <title>ThinkGeek - Join In. Geek Out.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@thinkgeek" />
        <meta name="twitter:creator" content="@thinkgeek" />
        <meta name="twitter:domain" content="thinkgeek.com" />

        
        <link
          rel="apple-touch-icon-precomposed"
          href="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/mobile/timmy-icon-57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/mobile/timmy-icon-72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/mobile/timmy-icon-114.png"
        />
        <link
          rel="icon"
          href="https://web.archive.org/web/20150404213211im_/http://www.thinkgeek.com/images/favicon.png"
        />
        <meta name="msapplication-TileColor" content="#0066af" />
        <meta name="msapplication-TileImage" content="/images/win8icon.png" />

        
      </Head>
      <div id="wrapper">
        <Header />
        <div id="mainwrapper">
          <div className="content-container">
            <div id="leftnav" className="leftnav">
              <ul className="nav">
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/">
                    T-Shirts &amp; Apparel
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/">
                    Geek Toys
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/">
                    Electronics &amp; Gadgets
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/">
                    Home &amp; Office
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/">
                    Tools, Outdoor &amp; Survival
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/">
                    Geek Kids
                  </a>
                </li>
                <li className="hr" /> {/* <li class="hr"></li> */}
                <li className="nav-extras nav-sale">
                  <a
                    className="color-sale"
                    href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/clearance/on-sale/?icpg=leftnav_onsale"
                  >
                    Clearance
                    {/* <span class="leftnav_clearance_tag tg_global_sprite"></span> */}
                  </a>
                </li>
                <li className="nav-extras">
                  <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/order/certificate.cgi">
                    Gift Certificates
                  </a>
                </li>
              </ul>
              {/* LOWERLEFTNAV */}
              <div className="signup leftnav-section">
                <h5>Sign up for geek-mail</h5>
                <form
                  className="newsletter-form clearfix"
                  method="post"
                >
                  <input type="text" placeholder="timmy@email.com" name="signup" />
                  <input
                    className="butt0n butt0n-blue butt0n-full"
                    type="submit"
                    defaultValue="Go"
                  />
                </form>
              </div>
              {/* END LOWERLEFTNAV */}
            </div>
            <div id="content" className="content-main narrow">
              {children}
              <div className="clear" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
