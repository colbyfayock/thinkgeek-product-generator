import Link from 'next/link';

import Container from '@/components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div id="sitewide-ribbon">
        <div className="content-container"></div>
      </div>
      <div id="header-wrapper" className="header-wrapper">
        <div id="header-main">
          <div className="content-container">
            <a
              id="header-logo"
              className="ir"
              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/"
            >
              ThinkGeek - Join In. Geek Out.
            </a>
            <div id="header-right">
              <div id="header-service">
                <ul>
                  <li>24/7 Customer Service:</li>
                  <li>
                    <a id="rn_sccl_header_Link">
                      <i className="icon-comments" />
                      Live Chat
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/help">
                      <i className="icon-question-circle" />
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div id="header-shipping">
                <span className="timmy-shipping " />
                <div>
                  <h3>
                    <strong>FREE SHIPPING</strong> ON ORDERS $75+
                  </h3>
                  <span>
                    US ECONOMY ONLY • NO CODE • DOESN&apos;T COMBINE WITH OTHER OFFERS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-top-primary">
          <div className="content-container">
            <span className="topnav_sprite_preloader" />
            <ul className="topnav_primary">
              <li id="topnav_category" className="topnav_primary_parent">
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/categories/">
                  Shop by Category
                  <i className="icon-angle-down" />
                </a>
                <ul className="topnav_secondary">
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/">
                      T-Shirts &amp; Apparel
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Apparel</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/unisex/all/">
                                T-Shirts
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/womens/">
                                Women&apos;s Tops, Tanks &amp; Babydolls
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/golfshirts/">
                                Polos &amp; Work Shirts
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/hoodies/">
                                Hoodies &amp; Jackets
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/slippers-robes-pajamas/">
                                Slippers, Robes &amp; Pajamas
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/socks-underwear/">
                                Socks &amp; Underwear
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/dresses-skirts-leggings/">
                                Dresses, Skirts &amp; Leggings
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/kids/">
                                Baby &amp; Kids
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/costumes/">
                                Costumes &amp; Cosplay
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Accessories
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/jewelry/">
                                Jewelry
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/watches/">
                                Watches
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/accessories/">
                                Wallets, Purses &amp; Keychains
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/bags-backpacks-luggage/">
                                Bags, Backpacks &amp; Luggage
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/hats-ties/">
                                Hats, Scarves, Belts &amp; More
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/cosmetics/">
                                Cosmetics &amp; Body
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/all/feature/desc/0/all/sale/1/">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_apparel-3_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/">
                      Geek Toys
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Geek Toys</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/collectibles/">
                                Action Figures &amp; Collectibles
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/costume-accessories/">
                                Costume &amp; Cosplay Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/rc/">
                                R/C Toys
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/games/">
                                Board Games, Cards &amp; Puzzles
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/plush/">
                                Plush
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/office-pranks/">
                                Office Pranks &amp; Cube Warfare
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/science/">
                                DIY &amp; Science Toys
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/lego-other/">
                                Other Geeky Toys
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geektoys/all/feature/desc/0/all/sale/1">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_geektoys_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/">
                      Electronics &amp; Gadgets
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Electronics &amp; Gadgets
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/computer-accessories/">
                                Computer &amp; PC Gaming Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/console-portable-gaming/">
                                Console &amp; Portable Gaming
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/camera-photo-video/">
                                Camera, Photo &amp; Video
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/speakers-headphones-audio/">
                                Speakers, Headphones &amp; Audio
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/lights-lasers/">
                                Lights &amp; Lasers
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/spy-security/">
                                Spy &amp; Security
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/usb-accessories/">
                                USB Hubs, Drives &amp; Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/music-gear/">
                                Music Gear
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/car-accessories/">
                                Car Gadgets &amp; Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/bags-backpacks/">
                                Bags &amp; Backpacks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Mobile &amp; Tablet
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/iphone-smartphone/">
                                iPhone &amp; Smartphone Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/ipad-tablet/">
                                iPad &amp; Tablet Accessories
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/batteries-chargers-cables/">
                                Batteries, Chargers &amp; Cables
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/all/feature/desc/0/all/sale/1/">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_electronicsgadgets-3_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/">
                      Home &amp; Office
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Home</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/blankets-rugs-towels/">
                                Blankets, Rugs &amp; Towels
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/lights/">
                                Lighting &amp; Clocks
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/calendars-posters-decals/">
                                Calendars, Posters &amp; Decals
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/bath/">
                                Bath
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/kitchen/">
                                Kitchen
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/mugs-travel/">
                                Coffee Mugs &amp; Travel Mugs
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/glassware/">
                                Glassware &amp; Drinkware
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/food-caffeine">
                                Food &amp; Caffeine
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/pets/">
                                Pet Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Office</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/office-pranks/">
                                Office Pranks &amp; Cube Warfare
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/geeky-office-supplies/">
                                Geeky Office Supplies
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/bags-backpacks/">
                                Bags, Backpacks &amp; Luggage
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/books/">
                                Books
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/homeoffice/feature/desc/0/all/sale/1/">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_homeoffice-3_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/">
                      Tools, Outdoor &amp; Survival
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Tools, Outdoor &amp; Survival
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/knives-swords-axes/">
                                Knives, Swords &amp; Axes
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/survival-camping-gear/">
                                Survival &amp; Camping Gear
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/geek-tools/">
                                Geek Tools
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/outdoor-backyard-fun/">
                                Outdoor &amp; Backyard Fun
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/car-gadgets-accessories/">
                                Car Gadgets &amp; Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_linklist last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tools-outdoor-survival/all/feature/desc/0/all/sale/1/">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_toolsoutdoorsurvival_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/">
                      Geek Kids
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Geek Kids</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/newborn-infant/">
                                Newborn &amp; Infant
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/1-3-years/">
                                1-3 Years
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/3-7-years/">
                                3-7 Years
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/7-13-years/">
                                7-13 Years
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/tshirts-apparel/">
                                T-Shirts &amp; Apparel
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/all/">
                                View All
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/all/newest/desc/0/100/">
                                View All Newest
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/all/feature/desc/0/100/">
                                View All Bestselling
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geek-kids/feature/desc/0/all/sale/1/">
                                View All On Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <img
                          width={250}
                          height={300}
                          src="https://web.archive.org/web/20150404213211im_/http://a.tgcdn.net/images/navigation/promos/navbar_promo_geekkids-3_250x300.png"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="topnav_interest" className="topnav_primary_parent">
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                  Shop by Interest
                  <i className="icon-angle-down" />
                </a>
                <ul className="topnav_secondary">
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                      TV, Movies &amp; Books
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid">
                          <li>
                            <a
                              className="topnav_logo topnav_star-wars"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/starwars/"
                            >
                              <span className="ir">Star Wars</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_doctor-who"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/doctorwho/"
                            >
                              <span className="ir">Doctor Who</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_star-trek"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/startrek/"
                            >
                              <span className="ir">Star Trek</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_big-bang-theory"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/bigbangtheory/"
                            >
                              <span className="ir">The Big Bang Theory</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_firefly"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/firefly/"
                            >
                              <span className="ir">Firefly &amp; Serenity</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_adventure-time"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/adventuretime/"
                            >
                              <span className="ir">Adventure Time</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_harry-potter"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/harrypotter/"
                            >
                              <span className="ir">Harry Potter</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_my-little-pony"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/mylittlepony/"
                            >
                              <span className="ir">My Little Pony</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_game-of-thrones"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/gameofthrones/"
                            >
                              <span className="ir">Game of Thrones</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_tolkien"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/tolkien/"
                            >
                              <span className="ir">Tolkien</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_marvel"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/marvel/"
                            >
                              <span className="ir">Marvel</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_walking-dead"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/walking-dead/"
                            >
                              <span className="ir">The Walking Dead</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_breaking-bad"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/breaking-bad/"
                            >
                              <span className="ir">Breaking Bad</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_dc-comics"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/dc-comics/"
                            >
                              <span className="ir">DC Comics</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_back-to-the-future"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/back-to-the-future/"
                            >
                              <span className="ir">Back to the Future</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_guardians-of-the-galaxy"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/guardians-of-the-galaxy/"
                            >
                              <span className="ir">Guardians of the Galaxy</span>
                            </a>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                              View All Interests
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/gamer/">
                      Gaming
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid">
                          <li>
                            <a
                              className="topnav_logo topnav_minecraft"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/minecraft/"
                            >
                              <span className="ir">Minecraft</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_portal-2"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/portal/"
                            >
                              <span className="ir">Portal</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_world-of-warcraft"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/world-of-warcraft/"
                            >
                              <span className="ir">World of Warcraft</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_dungeons-and-dragons"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/dungeonsanddragons/"
                            >
                              <span className="ir">Dungeons and Dragons</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_pacman"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/pacman/"
                            >
                              <span className="ir">Pac-Man</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_space-invaders"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/space-invaders/"
                            >
                              <span className="ir">Space Invaders</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_mass-effect"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/mass-effect/"
                            >
                              <span className="ir">Mass Effect</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_dota-2"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/dota-2/"
                            >
                              <span className="ir">Dota 2</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_xbox"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/xbox/"
                            >
                              <span className="ir">XBOX</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_razer"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/razer/"
                            >
                              <span className="ir">Razer</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_roccat"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/roccat/"
                            >
                              <span className="ir">Roccat</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_watch-dogs"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/watch-dogs/"
                            >
                              <span className="ir">Watch Dogs</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_legend-of-zelda"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/legend-of-zelda/"
                            >
                              <span className="ir">Legend of Zelda</span>
                            </a>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/gamer/">
                              View All Gaming
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                      Other Interests
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid topnav_tertiary_pop-culture">
                          <li>
                            <a
                              className="topnav_logo topnav_cool-retro"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/retro/"
                            >
                              <span className="ir">Cool Retro</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_tacticool"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/tacticool/"
                            >
                              <span className="ir">Tacticool</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_zombies"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/zombies/"
                            >
                              <span className="ir">Zombies</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_everyday-carry"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/everyday-carry/"
                            >
                              <span className="ir">Everyday Carry</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_charm-bracelets"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/charm-bracelets/"
                            >
                              <span className="ir">Charm Bracelets</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_mad-scientist"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/madscientist/"
                            >
                              <span className="ir">Mad Scientist</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_lego"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/lego/"
                            >
                              <span className="ir">Lego</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_gaming"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/gamer/"
                            >
                              <span className="ir">Gaming</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_frustrations"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/frustrations/"
                            >
                              <span className="ir">frustrations</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_superheroes"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/superheroes/"
                            >
                              <span className="ir">Superheroes</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_travel"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/travel/"
                            >
                              <span className="ir">Travel</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_geek-party"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/geekparty/"
                            >
                              <span className="ir">Geek Party</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_grillin-chillin"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/grillin-and-chillin/"
                            >
                              <span className="ir">Grillin and Chillin</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_geek-labs"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/invented/"
                            >
                              <span className="ir">Geek Labs</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_pop-vinyl"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/pop-vinyl/"
                            >
                              <span className="ir">Pop Vinyl</span>
                            </a>
                          </li>
                          <li className="last">
                            <a
                              className="topnav_logo topnav_steampunk"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/steampunk/"
                            >
                              <span className="ir">Steampunk</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_fall"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/fall/"
                            >
                              <span className="ir">Fall</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_unicorns"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/unicorns/"
                            >
                              <span className="ir">Unicorns</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="topnav_logo topnav_anime-manga"
                              href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/anime-and-manga/"
                            >
                              <span className="ir">Anime &amp; Manga</span>
                            </a>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                              View All Interests
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/gifts/">
                      Gifts
                      <i className="icon-angle-right" />
                    </a>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            By Audience
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsforhim/">
                                Gifts for Him
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsforher/">
                                Gifts for Her
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsforkids/">
                                Gifts for Kids
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/dads/">
                                Gifts for Dads
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/moms/">
                                Gifts for Moms
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/grads/">
                                Gifts for Grads
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/students/">
                                Gifts for Students
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/techies/">
                                Gifts for Techies, Developers, &amp; Sysadmins
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">By Price</span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsunder10/">
                                Gifts under $10
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsunder20/">
                                Gifts under $20
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsunder30/">
                                Gifts under $30
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsunder50/">
                                Gifts under $50
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/gifts-over-75/">
                                Gifts over $75
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/giftsunder100/">
                                Gifts under $100
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/order/certificate.cgi">
                                Gift Certificates
                              </a>
                            </li>
                            <li>
                              <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/gifts/">
                                View All Gifts
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/">
                      View All Interests
                    </a>
                  </li>
                </ul>
              </li>
              <li id="topnav_search">
                <form
                  id="searchform"
                  name="searchform"
                  method="get"
                >
                  <i className="icon-search" />
                  <input
                    id="search-term"
                    type="text"
                    size={12}
                    name="t"
                    className="searchbar"
                    placeholder="Search..."
                  />
                  <input
                    className="submit hide"
                    type="submit"
                    alt="find"
                    title="find"
                    defaultValue="GO"
                  />
                </form>
              </li>
              <li
                id="topnav_account"
                className="topnav_primary_parent topnav_account_login "
              >
                {" "}
                <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/account/login.cgi">
                  <i className="icon-lock" /> Log In
                </a>
                <ul className="topnav_secondary">
                  <li id="loggingin" className="logging-in">
                    <form
                      className="lablr"
                      method="post"
                    >
                      <input type="hidden" name="a" defaultValue="auth" />
                      <input
                        type="hidden"
                        name="p"
                        defaultValue="/product/iljk/"
                      />
                      <input type="hidden" name="s" defaultValue={0} />
                      <input type="text" name="un" placeholder="Email" />
                      <input
                        type="password"
                        name="pass"
                        autoComplete="off"
                        placeholder="Password"
                      />
                      <input
                        className="submit butt0n butt0n-blue butt0n-full"
                        type="submit"
                        defaultValue="Go"
                      />
                    </form>
                    <p className="topnav_secondary_subtext align-center">
                      <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/account/passwd.cgi">
                        Forgot password?
                      </a>{" "}
                      |{" "}
                      <a href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/account/login.cgi">
                        Create an Account
                      </a>
                    </p>
                  </li>
                </ul>
              </li>
              <li id="topnav_cart" className="topnav_primary_parent">
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/loot.cgi">
                  <i className="icon-shopping-cart" />
                  No loot
                </a>
                <ul className="topnav_secondary">
                  <li className="topnav_cart_items">
                    <div className="spinner-wrapper">
                      <span className="spinner" />
                      {/*[if lte IE 8 ]>Refreshing cart...<![endif]*/}
                    </div>
                    <ul />
                  </li>
                  <li className="topnav_cart_checkout">
                    <a
                      className="butt0n butt0n-blue butt0n-full"
                      href="https://web.archive.org/web/20150404213211/https://www.thinkgeek.com/brain/checkout/address.cgi"
                    >
                      Go to Checkout
                    </a>
                    <span>
                      <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/loot.cgi">
                        View/Edit Cart
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t\t#nav-top-secondary a {\n\t\t\t\t\tpadding: 0 2em !important;\n\t\t\t\t}\n\t\t\t"
          }}
        />
        <div id="nav-top-secondary">
          <div className="content-container">
            <ul>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/whats-new/">
                  What&apos;s New
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/bestsellers/">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/interests/exclusives/">
                  Exclusives
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/gifts/">
                  Gifts
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/tshirts-apparel/">
                  T-Shirts &amp; Apparel
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/electronics-gadgets/">
                  Electronics &amp; Gadgets
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/brain/order/certificate.cgi">
                  Gift Certificates
                </a>
              </li>
              <li>
                <a
                  className="color-sale"
                  href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/clearance/on-sale/"
                >
                  On Sale
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20150404213211/http://www.thinkgeek.com/geekpoints/">
                  <span className="color-green">Geek</span>Points
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
