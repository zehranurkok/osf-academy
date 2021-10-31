import React from 'react'
import logo from '../img/osf/logo.png';
import fgirl from '../img/background/f-girl.png'
import profile from '../img/icons/profile.png';
import pmobile from '../img/icons/profile-mobile.png';
import search from '../img/icons/search.png';
import smobile from '../img/icons/search-mobile.png';
import sbag from '../img/icons/shopping-bag.png';
import sbmobile from '../img/icons/shopping-bag-mobile.png';
import heart from '../img/icons/heart.png';
import hmobile from '../img/icons/heart-mobile.png';
import {Button, Form, Nav} from 'react-bootstrap'

const Header = () => {
    return (

        <div className="container">
            <header className="header">
            <div className="header__whrapper container">

            <div className="logo">
                <a href="index.html"><img src={logo} className="logo__image"  alt="osf-logo"/></a>
                <div className="logo__text-whrapper">
                    <h1 className="logo__heading">OSF</h1>
                    <p className="logo__subtitle">Academy</p>
                </div>
            </div>


            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <Nav className="navigation">
                <img src={fgirl} className="navigation__image" alt="service-picture"/>
                <div className="navigation__item services">
                    <span className="navigation__link_main navigation__link_main_active">Services
                        <i className="navigation__icon navigation__icon_main fa fa-caret-down" aria-hidden="true"></i>
                    </span>

                    <ul className="services__dropdown">
                        <li className="services__sections services__sections_first-child">
                            <h4 className="services__heading">Product Categories<i className="services__icon fa fa-caret-down"
                                    aria-hidden="true"></i>
                            </h4>
                            <ul className="services__row services__row_first-child">
                                <li className="services__column">
                                    <a className="services__link" href="pages/error.html">Accesspries</a>
                                    <a className="services__link" href="pages/error.html">Alcohol</a>
                                    <a className="services__link" href="pages/error.html">Art</a>
                                    <a className="services__link" href="pages/error.html">Books</a>
                                    <a className="services__link" href="pages/error.html">Drink</a>
                                    <a className="services__link" href="pages/error.html">Electronics</a>
                                    <a className="services__link" href="pages/error.html">Flowers & Plants</a>
                                    <a className="services__link" href="pages/error.html">Food</a>
                                </li>
                                <li className="services__column">
                                    <a className="services__link" href="pages/error.html">Gadgets</a>
                                    <a className="services__link" href="pages/error.html">Garden</a>
                                    <a className="services__link" href="pages/error.html">Grocery</a>
                                    <a className="services__link" href="pages/error.html">Home</a>
                                    <a className="services__link" href="pages/error.html">Jewelry</a>
                                    <a className="services__link" href="pages/error.html">Kids & Baby</a>
                                    <a className="services__link" href="pages/error.html">Men's Fashion</a>
                                    <a className="services__link" href="pages/error.html">Mobile</a>
                                </li>
                                <li className="services__column services__column_last-child">
                                    <a className="services__link" href="pages/error.html">Motorcycles</a>
                                    <a className="services__link" href="pages/error.html">Movies</a>
                                    <a className="services__link" href="pages/error.html">Music</a>
                                    <a className="services__link" href="pages/error.html">Office</a>
                                    <a className="services__link" href="pages/error.html">Pets</a>
                                    <a className="services__link" href="pages/error.html">Romantic</a>
                                    <a className="services__link" href="pages/error.html">Sport</a>
                                    <a className="services__link" href="pages/error.html">Toys</a>
                                </li>
                            </ul>
                        </li>
                        <li className="services__sections services__sections_second-child services__sections_margin">
                            <h4 className="services__heading services__heading_last-child">Sale<i
                                    className="services__icon fa fa-caret-down" aria-hidden="true"></i>
                            </h4>
                            <ul className="services__row services__row_second-child">
                                <li className="services__column services__column_last-child">
                                    <a className="services__link" href="pages/error.html">Accesspries</a>
                                    <a className="services__link" href="pages/error.html">Alcohol</a>
                                    <a className="services__link" href="pages/error.html">Art</a>
                                    <a className="services__link" href="pages/error.html">Books</a>
                                    <a className="services__link" href="pages/error.html">Drink</a>
                                    <a className="services__link" href="pages/error.html">Electronics</a>
                                    <a className="services__link" href="pages/error.html">Flowers & Plants</a>
                                    <a className="services__link" href="pages/error.html">Food</a>
                                </li>
                            </ul>
                        </li>
                        <li className="services__sections">
                            <img className="services__image" src={fgirl} alt="service-picture"/>
                        </li>
                    </ul>

                </div>
                <div className="navigation__item"><a className="navigation__link" href="pages/error.html">Company
                <i className="navigation__icon fa fa-caret-down" aria-hidden="true"></i></a></div>
                <div className="navigation__item"><a className="navigation__link" href="pages/error.html">Library
                <i className="navigation__icon fa fa-caret-down" aria-hidden="true"></i></a></div>
                <div className="navigation__item"><a className="navigation__link navigation__link_last-child"
                        href="pages/error.html">Contact us<i className="navigation__icon fa fa-caret-down"
                            aria-hidden="true"></i></a>
                </div>
            </Nav>
 
            <div className="chosen-value">
                <ul className="chosen-value__value languadge">
                    <li className="chosen-value__item_main"><span>EN<i className="fa fa-caret-down chosen-value__icon"
                                aria-hidden="true"></i></span>
                        <ul className="chosen-value__drop-down">
                            <li><a className="chosen-value__item chosen-value__item_first-child"
                                    href="pages/error.html">DE</a>
                            </li>
                            <li><a className="chosen-value__item" href="pages/error.html">UA</a></li>
                            <li><a className="chosen-value__item" href="pages/error.html">FR</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="chosen-value__value currency">
                    <li className="chosen-value__item_main"><span>$ US<i className="fa fa-caret-down chosen-value__icon"
                                aria-hidden="true"></i></span>
                        <ul className="chosen-value__drop-down">
                            <li><a className="chosen-value__item chosen-value__item_first-child" href="pages/error.html">$
                                    CA</a></li>
                            <li><a className="chosen-value__item" href="pages/error.html">eur</a></li>
                            <li><a className="chosen-value__item" href="pages/error.html">uah</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="login-cart">
                <div className="login-cart__content">
                    <span className="login-cart__icon login-cart__icon_search">
                      <img className="login-cart__image login-cart__image_smaller" src={search} alt="search"/>
                      <img className="login-cart__image login-cart__image_smaller login-cart__image_mobile" src={smobile} alt="search"/></span>
                </div>
                <div className="login-cart__content">
                    <span className="login-cart__icon login-cart__icon_login">
                      <img className="login-cart__image login-cart__image_smaller" src={profile} alt="profile"/>
                      <img className="login-cart__image login-cart__image_smaller login-cart__image_mobile" src={pmobile} alt="profile"/></span>
                </div>
                <div className="login-cart__content">
                    <a className="login-cart__icon" href="pages/wishlist.html">
                    <img className="login-cart__image" src={heart} alt="search"/>
                    <img className="login-cart__image login-cart__image_mobile" src={hmobile} alt="search"/></a>
                    <a href="pages/cart.html" className="login-cart__counter login-cart__counter_wishlist">1</a>
                </div>
                <div className="login-cart__content">
                    <a className="login-cart__icon" href="pages/cart.html">
                    <img className="login-cart__image" src={sbag} alt="profile"/>
                    <img className="login-cart__image login-cart__image_mobile" src={sbmobile} alt="profile"/></a>
                    <a href="pages/wishlist.html" className="login-cart__counter login-cart__counter_cart">2</a>
                </div>
            </div>

        </div>
        
        <div className="modal">
            <Form className="modal__content modal__animate" method="post">
                <div>
                    <p className="modal__title">Sign in</p>
                </div>
                <div className="modal__main">
                    <label className="modal__text" for="email">Email</label>
                    <input className="modal__input" type="email" name="email" required/>
                    <a className="modal__link modal__link_password" href="pages/error.html">forgot password</a>
                    <label className="modal__text" for="psw">Password</label>
                    <input id="password" className="modal__input" type="password" name="psw"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" required/>
                    <i id="togglePassword" className="modal__icon fa fa-eye" aria-hidden="true"></i>
                    <Button className="modal__submit" type="submit">Login</Button>
                </div>
                <div className="modal__footer">
                    <a className="modal__link modal__link_registration" href="pages/error.html">I don't have an
                        account</a>
                </div>
            </Form>
        </div>
        <div className="modal-search">
            <Form className="modal-search__content modal__animate" method="post">
                <p className="error-page__title">Search our site</p>
                <div className="error-page__search-box">
                    <input className="error-page__search-text" type="text" name="" placeholder="SEARCH"/>
                    <a className="error-page__search-btn" href="error.html">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
                <a className="modal-search__link" href="pages/release.html">Check the release date here!</a>
            </Form>
        </div>
        <div className="cookie" id="cookie">
            <Form className="cookie__content modal__animate">
                <div className="cookie__header">
                    <p className="cookie__title">This website uses cookies</p>
                    <i className="cookie__close fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="cookie__main">
                    <p className="cookie__text">OSF uses its own and third-party cookies for statistical purposes, to know
                        your preferences, for website performance <br/>
                        and interaction with social media offering publicity tailored to your interests. If you continue
                        browsing, we consider
                        that you accept its use. <br/>
                        You can expand this information consulting our <a className="cookie__link" href="error.html">Cookies
                            Policy Page.</a></p>
                </div>
                <div className="cookie__footer">
                    <Button className="cookie__submit" type="submit">Accept</Button>
                </div>
            </Form>
        </div>
        </header>
        </div>
    )
}

export default Header
