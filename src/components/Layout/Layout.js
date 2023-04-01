import Head from 'next/head';
import Link from 'next/link';

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
                  <Link href="/looflirpa">
                    T-Shirts &amp; Apparel
                  </Link>
                </li>
                <li>
                  <Link href="/looflirpa">
                    Geek Toys
                  </Link>
                </li>
                <li>
                  <Link href="/looflirpa">
                    Electronics &amp; Gadgets
                  </Link>
                </li>
                <li>
                  <Link href="/looflirpa">
                    Home &amp; Office
                  </Link>
                </li>
                <li>
                  <Link href="/looflirpa">
                    Tools, Outdoor &amp; Survival
                  </Link>
                </li>
                <li>
                  <Link href="/looflirpa">
                    Geek Kids
                  </Link>
                </li>
                <li className="hr" />
                <li className="nav-extras nav-sale">
                  <a
                    className="color-sale"
                    href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/clearance/on-sale/?icpg=leftnav_onsale"
                  >
                    Clearance
                  </a>
                </li>
                <li className="nav-extras">
                  <Link href="/looflirpa">
                    Gift Certificates
                  </Link>
                </li>
              </ul>
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
