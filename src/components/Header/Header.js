import Link from 'next/link';

import Container from '@/components/Container';

import styles from './Header.module.scss';
import { CldImage } from 'next-cloudinary';

const Header = () => {
  return (
    <>
      <div id="sitewide-ribbon">
        <div className="content-container"></div>
      </div>
      <div id="header-wrapper" className="header-wrapper">
        <div id="header-main">
          <div className="content-container">
            <Link
              id="header-logo"
              className="ir"
              href="/"
            >
              ThinkGeek - Join In. Geek Out.
            </Link>
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
                    <Link href="/looflirpa">
                      <i className="icon-question-circle" />
                      Help
                    </Link>
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
                <Link href="/looflirpa">
                  Shop by Category
                  <i className="icon-angle-down" />
                </Link>
                <ul className="topnav_secondary">
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      T-Shirts &amp; Apparel
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Apparel</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                T-Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Women&apos;s Tops, Tanks &amp; Babydolls
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Polos &amp; Work Shirts
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Hoodies &amp; Jackets
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Slippers, Robes &amp; Pajamas
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Socks &amp; Underwear
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Dresses, Skirts &amp; Leggings
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Baby &amp; Kids
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Costumes &amp; Cosplay
                              </Link>
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
                              <Link href="/looflirpa">
                                Jewelry
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Watches
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Wallets, Purses &amp; Keychains
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Bags, Backpacks &amp; Luggage
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Hats, Scarves, Belts &amp; More
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Cosmetics &amp; Body
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_apparel-3_250x300_o9clbi"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Geek Toys
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Geek Toys</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Action Figures &amp; Collectibles
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Costume &amp; Cosplay Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                R/C Toys
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Board Games, Cards &amp; Puzzles
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Plush
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Office Pranks &amp; Cube Warfare
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                DIY &amp; Science Toys
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Other Geeky Toys
                              </Link>
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
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_geektoys_250x300_baeaz7"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Electronics &amp; Gadgets
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Electronics &amp; Gadgets
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Computer &amp; PC Gaming Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Console &amp; Portable Gaming
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Camera, Photo &amp; Video
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Speakers, Headphones &amp; Audio
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Lights &amp; Lasers
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Spy &amp; Security
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                USB Hubs, Drives &amp; Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Music Gear
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Car Gadgets &amp; Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Bags &amp; Backpacks
                              </Link>
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
                              <Link href="/looflirpa">
                                iPhone &amp; Smartphone Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                iPad &amp; Tablet Accessories
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Batteries, Chargers &amp; Cables
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_electronicsgadgets-3_250x300_bzbyji"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Home &amp; Office
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Home</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Blankets, Rugs &amp; Towels
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Lighting &amp; Clocks
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Calendars, Posters &amp; Decals
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Bath
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Kitchen
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Coffee Mugs &amp; Travel Mugs
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Glassware &amp; Drinkware
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Food &amp; Caffeine
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Pet Accessories
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Office</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Office Pranks &amp; Cube Warfare
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Geeky Office Supplies
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Bags, Backpacks &amp; Luggage
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Books
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_homeoffice-3_250x300_uj9pq1"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Tools, Outdoor &amp; Survival
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            Tools, Outdoor &amp; Survival
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Knives, Swords &amp; Axes
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Survival &amp; Camping Gear
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Geek Tools
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Outdoor &amp; Backyard Fun
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Car Gadgets &amp; Accessories
                              </Link>
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
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_toolsoutdoorsurvival_250x300_kjacgd"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Geek Kids
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary topnav_tertiary_promo ">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">Geek Kids</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Newborn &amp; Infant
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                1-3 Years
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                3-7 Years
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                7-13 Years
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                T-Shirts &amp; Apparel
                              </Link>
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
                              <Link href="/looflirpa">
                                View All
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Newest
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Bestselling
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All On Sale
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column topnav_tertiary_promo_column">
                        <CldImage
                          width={250}
                          height={300}
                          src="thinkgeek-product-generator/navbar_promo_geekkids-3_250x300_kcverm"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li id="topnav_interest" className="topnav_primary_parent">
                <Link href="/looflirpa">
                  Shop by Interest
                  <i className="icon-angle-down" />
                </Link>
                <ul className="topnav_secondary">
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      TV, Movies &amp; Books
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid">
                          <li>
                            <Link
                              className="topnav_logo topnav_star-wars"
                              href="/looflirpa"
                            >
                              <span className="ir">Star Wars</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_doctor-who"
                              href="/looflirpa"
                            >
                              <span className="ir">Doctor Who</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_star-trek"
                              href="/looflirpa"
                            >
                              <span className="ir">Star Trek</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_big-bang-theory"
                              href="/looflirpa"
                            >
                              <span className="ir">The Big Bang Theory</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_firefly"
                              href="/looflirpa"
                            >
                              <span className="ir">Firefly &amp; Serenity</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_adventure-time"
                              href="/looflirpa"
                            >
                              <span className="ir">Adventure Time</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_harry-potter"
                              href="/looflirpa"
                            >
                              <span className="ir">Harry Potter</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_my-little-pony"
                              href="/looflirpa"
                            >
                              <span className="ir">My Little Pony</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_game-of-thrones"
                              href="/looflirpa"
                            >
                              <span className="ir">Game of Thrones</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_tolkien"
                              href="/looflirpa"
                            >
                              <span className="ir">Tolkien</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_marvel"
                              href="/looflirpa"
                            >
                              <span className="ir">Marvel</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_walking-dead"
                              href="/looflirpa"
                            >
                              <span className="ir">The Walking Dead</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_breaking-bad"
                              href="/looflirpa"
                            >
                              <span className="ir">Breaking Bad</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_dc-comics"
                              href="/looflirpa"
                            >
                              <span className="ir">DC Comics</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_back-to-the-future"
                              href="/looflirpa"
                            >
                              <span className="ir">Back to the Future</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_guardians-of-the-galaxy"
                              href="/looflirpa"
                            >
                              <span className="ir">Guardians of the Galaxy</span>
                            </Link>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <Link href="/looflirpa">
                              View All Interests
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Gaming
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid">
                          <li>
                            <Link
                              className="topnav_logo topnav_minecraft"
                              href="/looflirpa"
                            >
                              <span className="ir">Minecraft</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_portal-2"
                              href="/looflirpa"
                            >
                              <span className="ir">Portal</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_world-of-warcraft"
                              href="/looflirpa"
                            >
                              <span className="ir">World of Warcraft</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_dungeons-and-dragons"
                              href="/looflirpa"
                            >
                              <span className="ir">Dungeons and Dragons</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_pacman"
                              href="/looflirpa"
                            >
                              <span className="ir">Pac-Man</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_space-invaders"
                              href="/looflirpa"
                            >
                              <span className="ir">Space Invaders</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_mass-effect"
                              href="/looflirpa"
                            >
                              <span className="ir">Mass Effect</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_dota-2"
                              href="/looflirpa"
                            >
                              <span className="ir">Dota 2</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_xbox"
                              href="/looflirpa"
                            >
                              <span className="ir">XBOX</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_razer"
                              href="/looflirpa"
                            >
                              <span className="ir">Razer</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_roccat"
                              href="/looflirpa"
                            >
                              <span className="ir">Roccat</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_watch-dogs"
                              href="/looflirpa"
                            >
                              <span className="ir">Watch Dogs</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_legend-of-zelda"
                              href="/looflirpa"
                            >
                              <span className="ir">Legend of Zelda</span>
                            </Link>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <Link href="/looflirpa">
                              View All Gaming
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Other Interests
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column last">
                        <ul className="topnav_tertiary_grid topnav_tertiary_pop-culture">
                          <li>
                            <Link
                              className="topnav_logo topnav_cool-retro"
                              href="/looflirpa"
                            >
                              <span className="ir">Cool Retro</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_tacticool"
                              href="/looflirpa"
                            >
                              <span className="ir">Tacticool</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_zombies"
                              href="/looflirpa"
                            >
                              <span className="ir">Zombies</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_everyday-carry"
                              href="/looflirpa"
                            >
                              <span className="ir">Everyday Carry</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_charm-bracelets"
                              href="/looflirpa"
                            >
                              <span className="ir">Charm Bracelets</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_mad-scientist"
                              href="/looflirpa"
                            >
                              <span className="ir">Mad Scientist</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_lego"
                              href="/looflirpa"
                            >
                              <span className="ir">Lego</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_gaming"
                              href="/looflirpa"
                            >
                              <span className="ir">Gaming</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_frustrations"
                              href="/looflirpa"
                            >
                              <span className="ir">frustrations</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_superheroes"
                              href="/looflirpa"
                            >
                              <span className="ir">Superheroes</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_travel"
                              href="/looflirpa"
                            >
                              <span className="ir">Travel</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_geek-party"
                              href="/looflirpa"
                            >
                              <span className="ir">Geek Party</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_grillin-chillin"
                              href="/looflirpa"
                            >
                              <span className="ir">Grillin and Chillin</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_geek-labs"
                              href="/looflirpa"
                            >
                              <span className="ir">Geek Labs</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_pop-vinyl"
                              href="/looflirpa"
                            >
                              <span className="ir">Pop Vinyl</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link
                              className="topnav_logo topnav_steampunk"
                              href="/looflirpa"
                            >
                              <span className="ir">Steampunk</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_fall"
                              href="/looflirpa"
                            >
                              <span className="ir">Fall</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_unicorns"
                              href="/looflirpa"
                            >
                              <span className="ir">Unicorns</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="topnav_logo topnav_anime-manga"
                              href="/looflirpa"
                            >
                              <span className="ir">Anime &amp; Manga</span>
                            </Link>
                          </li>
                          <li className="topnav_tertiary_view-all">
                            <Link href="/looflirpa">
                              View All Interests
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="topnav_secondary_parent tgnav_secondary_parent">
                    <Link href="/looflirpa">
                      Gifts
                      <i className="icon-angle-right" />
                    </Link>
                    <div className="topnav_tertiary">
                      <div className="topnav_tertiary_column">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            By Audience
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Him
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Her
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Kids
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Dads
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Moms
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Grads
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Students
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts for Techies, Developers, &amp; Sysadmins
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="topnav_tertiary_column last">
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">By Price</span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Gifts under $10
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts under $20
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts under $30
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts under $50
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts over $75
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                Gifts under $100
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav_tertiary_row">
                          <span className="topnav_tertiary_title">
                            More Ways to Shop
                          </span>
                          <ul>
                            <li>
                              <Link href="/looflirpa">
                                Gift Certificates
                              </Link>
                            </li>
                            <li>
                              <Link href="/looflirpa">
                                View All Gifts
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/looflirpa">
                      View All Interests
                    </Link>
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
                <Link href="/looflirpa">
                  <i className="icon-lock" /> Log In
                </Link>
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
                      <Link href="/looflirpa">
                        Forgot password?
                      </Link>{" "}
                      |{" "}
                      <Link href="/looflirpa">
                        Create an Account
                      </Link>
                    </p>
                  </li>
                </ul>
              </li>
              <li id="topnav_cart" className="topnav_primary_parent">
                <Link href="/looflirpa">
                  <i className="icon-shopping-cart" />
                  No loot
                </Link>
                <ul className="topnav_secondary">
                  <li className="topnav_cart_items">
                    <div className="spinner-wrapper">
                      <span className="spinner" />
                      {/*[if lte IE 8 ]>Refreshing cart...<![endif]*/}
                    </div>
                    <ul />
                  </li>
                  <li className="topnav_cart_checkout">
                    <Link
                      className="butt0n butt0n-blue butt0n-full"
                      href="/looflirpa"
                    >
                      Go to Checkout
                    </Link>
                    <span>
                      <Link href="/looflirpa">
                        View/Edit Cart
                      </Link>
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
                <Link href="/looflirpa">
                  What&apos;s New
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Exclusives
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Gifts
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  T-Shirts &amp; Apparel
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Electronics &amp; Gadgets
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  Gift Certificates
                </Link>
              </li>
              <li>
                <Link
                  className="color-sale"
                  href="/looflirpa"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="/looflirpa">
                  <span className="color-green">Geek</span>Points
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
