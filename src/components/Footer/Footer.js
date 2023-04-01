import Link from 'next/link';
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
                <Link href="/looflirpa">
                  Returns &amp; Exchanges
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Accounts
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Ordering
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Size Charts
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Gift Options
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Gift Certificates
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  International Orders
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Privacy &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Terms of Use
                </Link>
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
                <Link href="/looflirpa">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Volume Purchases
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-link-column last">
            <h4>Come to the &quot;not-so-dark&quot; side</h4>
            <ul className="list-clean">
              <li>
                <Link href="/looflirpa">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Order Management
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  GeekPoints
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Wish Lists
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Return Requests
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Address Book
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Submit Action Shot
                </Link>
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
                <Link href="/looflirpa" title="ThinkGeek on Facebook">
                  <i className="icon-facebook" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on Twitter">
                  <i className="icon-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on Google+">
                  <i className="icon-google-plus" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on Pinterest">
                  <i className="icon-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on Instagram">
                  <i className="icon-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on Vine">
                  <i className="icon-vine" />
                </Link>
              </li>
              <li>
                <Link href="/looflirpa" title="ThinkGeek on YouTube">
                  <i className="icon-youtube" />
                </Link>
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
                <Link href="/looflirpa" target="_blank">
                  <img
                    src="https://web.archive.org/web/20150404213211im_/https://medals.bizrate.com/medals/dynamic/134956_medal.gif"
                    alt="BizRate Customer Certified (GOLD) Site"
                    width={75}
                    height={44}
                  />
                </Link>
              </li>
              {/* End Bizrate */}
              {/* BBB */}
              <li>
                <span className="seals-column">
                  <Link href="/looflirpa">
                    <img
                      src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/sitewide/seals/bbb-sm.png"
                      style={{ height: 44, border: 0, borderRadius: 3 }}
                      alt="Better Business Bureau"
                    />
                  </Link>
                </span>
              </li>
              {/* End BBB */}
            </ul>
            <p>
              © Copyright 1999-2015{" "}
              <Link href="/looflirpa" title="ThinkGeek">
                ThinkGeek, Inc.
              </Link>{" "}
              All Rights Reserved
            </p>
            <p id="footer-copyright">
              ThinkGeek is a GeekNet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
