import Container from '@/components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <div id="footer-wrapper" className="clear">
      <div id="footer-help">
        <div className="content-container row">
          <div className="footer-link-column">
            <h4>Customer Service</h4>
            <ul className="list-clean">
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/returns.shtml">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/account/history.cgi">
                  Order Status
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/shipping.shtml">
                  Shipping
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/accounts.shtml">
                  Accounts
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/ordering.shtml">
                  Ordering
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/sizing-info.shtml">
                  Size Charts
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/gifts.shtml">
                  Gift Options
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/order/certificate.cgi">
                  Gift Certificates
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/shipping.shtml/#international-shipping">
                  International Orders
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/privacy.shtml">
                  Privacy &amp; Security
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/terms-of-use.shtml">
                  Terms of Use
                </a>
              </li>
              <li id="footer-livechat-container">
                <a id="rn_sccl_footer_Link" href="#">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h4>About ThinkGeek</h4>
            <ul className="list-clean">
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/about-us/">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/jobs/">
                  Jobs
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/blog/">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/news-press.shtml">
                  Press
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help/">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/newsletter.shtml">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/volume/">
                  Volume Purchases
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/affiliates/">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/site-index/">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-column last">
            <h4>Come to the "not-so-dark" side</h4>
            <ul className="list-clean">
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/account/index.cgi">
                  Account
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/account/history.cgi">
                  Order Management
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geekpoints/">
                  GeekPoints
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/account/passwd.cgi">
                  Forgot Password
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/wishes.cgi">
                  Wish Lists
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/rma/">
                  Return Requests
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/account/places.cgi">
                  Address Book
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/action-shots/">
                  Submit Action Shot
                </a>
              </li>
            </ul>
          </div>
          <span id="timmy-meh" />
          <span id="timmy-skywalker" />
        </div>
      </div>
      <div id="footer-main">
        <div className="content-container row">
          <div id="footer-social" className="sixcol">
            <p>
              So <span>ThinkGeek</span>, Much <span>Social</span>.
            </p>
            <ul>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.facebook.com/thinkgeek"
                  title="ThinkGeek on Facebook"
                >
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.twitter.com/thinkgeek"
                  title="ThinkGeek on Twitter"
                >
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/https://plus.google.com/111086949937726998175"
                  title="ThinkGeek on Google+"
                >
                  <i className="icon-google-plus" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.pinterest.com/thinkgeek/"
                  title="ThinkGeek on Pinterest"
                >
                  <i className="icon-pinterest" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.instagram.com/thinkgeek"
                  title="ThinkGeek on Instagram"
                >
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.vine.co/thinkgeek"
                  title="ThinkGeek on Vine"
                >
                  <i className="icon-vine" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://youtube.com/thinkgeek"
                  title="ThinkGeek on YouTube"
                >
                  <i className="icon-youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div id="footer-legal" className="sixcol last">
            <ul className="list-clean list-inlineblock">
              {/* Trustwave */}
              <li className="trustwave">
                <a
                  id="trustwaveSealImage"
                  href="#"
                  title="This site protected by Trustwave's Trusted Commerce program"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/https://sealserver.trustwave.com/seal_image.php?customerId=&size=105x54&style=normal"
                    border={0}
                    style={{ cursor: "pointer" }}
                    alt="This site protected by Trustwave's Trusted Commerce program"
                  />
                </a>
              </li>
              {/* End Trustwave */}
              <li>
                <a
                  href="//web.archive.org/web/20150404213211/http://privacy.truste.com/privacy-seal/Geeknet,-Inc-/validation?rid=9e577dc3-29bd-4f5a-9858-8253630c4f79"
                  title="TRUSTe European Safe Harbor certification"
                  target="_blank"
                >
                  <img
                    src="//web.archive.org/web/20150404213211im_/http://privacy-policy.truste.com/privacy-seal/Geeknet,-Inc-/seal?rid=2dfb628f-8f2e-4f29-8042-6484bf0d3a00"
                    alt="TRUSTe European Safe Harbor certification"
                  />
                </a>
              </li>
              {/* Bizrate */}
              <li>
                <a
                  href="https://web.archive.org/web/20150404213211/http://www.bizrate.com/ratings_guide/cust_reviews__mid--134956.html"
                  target="_blank"
                >
                  <img
                    src="https://web.archive.org/web/20150404213211im_/https://medals.bizrate.com/medals/dynamic/134956_medal.gif"
                    alt="BizRate Customer Certified (GOLD) Site"
                    width={75}
                    height={44}
                  />
                </a>
              </li>
              {/* End Bizrate */}
              {/* BBB */}
              <li>
                <span className="seals-column">
                  <a
                    href="https://web.archive.org/web/20150404213211/http://www.bbb.org/washington-dc-eastern-pa/business-reviews/internet-shopping/think-geek-inc-in-fairfax-va-23008816/"
                    target="_blank"
                  >
                    <img
                      src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/sitewide/seals/bbb-sm.png"
                      style={{ height: 44, border: 0, borderRadius: 3 }}
                      alt="Better Business Bureau"
                    />
                  </a>
                </span>
              </li>
              {/* End BBB */}
            </ul>
            <p>
              © Copyright 1999-2015{" "}
              <a
                href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
                title="ThinkGeek"
              >
                ThinkGeek, Inc.
              </a>{" "}
              All Rights Reserved
            </p>
            <p id="footer-copyright">
              ThinkGeek is a{" "}
              <a
                className="ir"
                href="https://web.archive.org/web/20150404213211/http://www.geek.net/"
                title="GeekNet"
              />{" "}
              Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
