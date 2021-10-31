import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
        <div className="footer__container container">
            <div className="footer__section footer__section_one">
                <p className="footer__copyrighting">© Copyright <span id="year">2069</span>. <br/>
                    All Rights Reserved.</p>
                <div className="footer__section_drop">
                    <p className="footer__title footer__title_first-child">Contact<i
                            className="fa fa-caret-down footer__title_icon" aria-hidden="true"></i></p>
                    <ul className="footer__contacts footer__drop-down footer__drop-down_contact">
                        <li className="footer__item footer__item_info">
                            <address>
                                Headquarters:<br/>
                                5600, Blvd. des Galeries, Bur 530<br/>
                                Québec, Québec G2K 2H6
                            </address>
                        </li>
                        <li className="footer__item footer__item_info"><a
                                href="mailto:contact@osf-global.com">contact@osf-global.com</a></li>
                        <li className="footer__item footer__item_info"><a href="tel:1-888-548-4344">+1 (888) 548-4344</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__section footer__section_two">
                <p className="footer__title">Categories<i
                        className="fa fa-caret-down footer__title_icon footer__title_display-inline" aria-hidden="true"></i>
                </p>
                <div className="footer__section_whrapper footer__drop-down footer__drop-down_categories">
                    <ul>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Alcohol</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Art</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Books</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Drink</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Electronics</a></li>
                    </ul>
                    <ul>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Home</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Jewelry</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Kids & Baby</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Men's Fashion</a>
                        </li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Mobile</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Motorcycles</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Movies</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Music</a></li>
                    </ul>
                    <ul>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Sport</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Toys</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Travel</a></li>
                        <li className="footer__item footer__item_common"><a href="pages/error.html">Women's Fashion</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__section footer__section_three">
                <p className="footer__title">About<i className="fa fa-caret-down footer__title_icon" aria-hidden="true"></i></p>
                <ul className="footer__drop-down footer__drop-down_about">
                    <li className="footer__item footer__item_common"><a href="pages/error.html">About us</a></li>
                    <li className="footer__item footer__item_common"><a href="pages/error.html">Delivery</a></li>
                    <li className="footer__item footer__item_common"><a href="pages/error.html">Testimonials</a></li>
                    <li className="footer__item footer__item_common"><a href="pages/error.html">Contact</a></li>
                </ul>
            </div>
            <div className="footer__links">
                <a className="footer__link" target="_blank" href="https://www.facebook.com/OSFDigital/"><i
                        className="fa fa-facebook" aria-hidden="true"></i></a>
                <a className="footer__link" target="_blank" href="https://en.wikipedia.org/wiki/Google%2B"><i
                        className="fa fa-google-plus" aria-hidden="true"></i></a>
                <a className="footer__link" target="_blank" href="https://twitter.com/osfdigital"><i className="fa fa-twitter"
                        aria-hidden="true"></i></a>
                <a className="footer__link" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"
                        aria-hidden="true"></i></a>
            </div>
        </div>
        </footer>
        </div>
        
    )
}

export default Footer
