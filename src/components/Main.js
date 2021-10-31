import React from 'react'

import gperson from '../img/icons/gradient-person.png';
import lmore from '../img/icons/load-more.png';
import sfocus from '../img/icons/service-focus.png';
import smethod from '../img/icons/service-method.png';
import sknowledge from '../img/icons/service-knowledge.png';
import {Button} from 'react-bootstrap'

const Main = () => {
    return (
        <div className="container"> 
        <main className="main">
        <div className="slider-facebook container">
            <div className="row">
                <div className="slider-bootstrap carousel slide col-12 col-xl-9" data-right="carousel" id="slides">
                    <ul className="carousel-indicators slider-bootstrap__indicators">
                        <li className="active" data-target="#slides" data-slide-to="0"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                        <li data-target="#slides" data-slide-to="2"></li>
                        <li data-target="#slides" data-slide-to="3"></li>
                        <li data-target="#slides" data-slide-to="4"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item slider-bootstrap__item slider-bootstrap__item_one active">
                            <p className="slider-bootstrap__heading">Control and manage any</p>
                            <p className="slider-bootstrap__heading slider-bootstrap__heading_last-child">device with cloud
                                solutions</p>
                            <p className="slider-bootstrap__subtitle">Improve business performance and the user experience
                            </p>
                            <p className="slider-bootstrap__subtitle slider-bootstrap__subtitle_last-child">with the right
                                mix of IoT technology
                                and processes
                            </p>
                            <a className="slider-bootstrap__link" href="pages/category.html">View more</a>
                        </div>
                        <div className="carousel-item slider-bootstrap__item slider-bootstrap__item_two">
                            <p className="slider-bootstrap__heading">Control and manage any</p>
                            <p className="slider-bootstrap__heading slider-bootstrap__heading_last-child">device with cloud
                                solutions</p>
                            <p className="slider-bootstrap__subtitle">Improve business performance and the user experience
                            </p>
                            <p className="slider-bootstrap__subtitle slider-bootstrap__subtitle_last-child">with the right
                                mix of IoT technology
                                and processes
                            </p>
                            <a className="slider-bootstrap__link" href="pages/category.html">View more</a>
                        </div>
                        <div className="carousel-item slider-bootstrap__item slider-bootstrap__item_three">
                            <p className="slider-bootstrap__heading">Control and manage any</p>
                            <p className="slider-bootstrap__heading slider-bootstrap__heading_last-child">device with cloud
                                solutions</p>
                            <p className="slider-bootstrap__subtitle">Improve business performance and the
                                user experience</p>
                            <p className="slider-bootstrap__subtitle slider-bootstrap__subtitle_last-child">with the right
                                mix of IoT technology
                                and processes
                            </p>
                            <a className="slider-bootstrap__link" href="pages/category.html">View more</a>
                        </div>
                        <div className="carousel-item slider-bootstrap__item slider-bootstrap__item_four">
                            <p className="slider-bootstrap__heading">Control and manage any</p>
                            <p className="slider-bootstrap__heading slider-bootstrap__heading_last-child">device with cloud
                                solutions</p>
                            <p className="slider-bootstrap__subtitle">Improve business performance and the user experience
                            </p>
                            <p className="slider-bootstrap__subtitle slider-bootstrap__subtitle_last-child">with the right
                                mix of IoT technology
                                and processes
                            </p>
                            <a className="slider-bootstrap__link" href="pages/category.html">View more</a>
                        </div>
                        <div className="carousel-item slider-bootstrap__item slider-bootstrap__item_five">
                            <p className="slider-bootstrap__heading">Control and manage any</p>
                            <p className="slider-bootstrap__heading slider-bootstrap__heading_last-child">device with cloud
                                solutions</p>
                            <p className="slider-bootstrap__subtitle">Improve business performance and the user experience
                            </p>
                            <p className="slider-bootstrap__subtitle slider-bootstrap__subtitle_last-child">with the right
                                mix of IoT technology
                                and processes
                            </p>
                            <a className="slider-bootstrap__link" href="pages/category.html">View more</a>
                        </div>
                    </div>
                </div>
                <aside className="facebook-follow d-xl-flex col-xl-3">
                    <div className="facebook-follow__window">
                        <p className="facebook-follow__sale">55%</p>
                        <p className="facebook-follow__description">Summer sales</p>
                    </div>
                    <p className="facebook-follow__heading">Follow us on Facebook</p>
                    <p className="facebook-follow__subtitle">Sed ut perspiciatis unde omnis iste natus error sit</p>
                    <a className="facebook-follow__link" target="_blank" href="https://www.facebook.com/OSFDigital/"><i
                            className="fa fa-facebook facebook-follow__icon" aria-hidden="true"></i>Follow</a>
                </aside>
            </div>
        </div>

        <div className="products">
            <div className="container">
                <div className="products__head-whrapper">
                    <div className="products__line"></div>
                    <h2 className="products__heading">Popular Items</h2>
                    <div className="products__line"></div>
                </div>
                <div className="row products__row">
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_one">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Kristina Dam Oak Table With <br/>
                                White Marble Top</div>
                            <div className="products__price">$ 799.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <a className="products__photo products__photo_two d-block" href="pages/product.html">
                        </a>
                        <div className="products__description">
                            <a className="products__name products__name_link" href="pages/product.html">Hay - About A Lounge
                                <br/>
                                Chair AAL 93</a>
                            <div className="products__buy-now">
                                <a className="products__buy-now_price" href="pages/product.html">$659.55</a>
                                <Button className="products__buy-now_button products__button_buy">Buy now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_three">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Activate Facial Mask and <br/>
                                Charcoal Soap</div>
                            <div className="products__price">$ 129.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_four">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Cocktail Table Walnut <br/>
                                | YES</div>
                            <div className="products__price">$ 299.99</div>
                        </div>
                    </div>
                </div>
                <div className="row products__row">
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_five">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Hay - About A Lounge <br/>
                                Chair AAL 93</div>
                            <div className="products__price">$ 659.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_six">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">TORY DESK CALENDAR</div>
                            <div className="products__price">$ 410.99</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__photo products__photo_seven">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">CH445 Wing Chair on <br/>
                                SUITE NY</div>
                            <div className="products__price">$ 330.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item">
                        <div className="products__gradient">
                            <div className="products__gradient_text">My dragons are misbehaving again. Unbelieveable!</div>
                            <img className="products__gradient_image" src={gperson} alt="person"/>
                            <div className="products__gradient_counter">5h ago</div>
                        </div>
                        <div className="products__photo products__photo_full products__photo_eight">
                        </div>
                    </div>
                </div>

                <div className="row products__row products__slider">
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__hover">
                            <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                    aria-hidden="true"></i></Button>
                            <Button className="products__button products__button_like"><i className="fa fa-heart"
                                    aria-hidden="true"></i></Button>
                        </div>
                        <div className="products__photo products__photo_one">
                        </div>
                        <div className="products__description">
                            <div className="products__name">Kristina Dam Oak Table With <br/>
                                White Marble Top</div>
                            <div className="products__price">$ 799.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <a className="products__photo products__photo_two d-block" href="pages/product.html">
                        </a>
                        <div className="products__description">
                            <a className="products__name products__name_link" href="pages/product.html">Hay - About A Lounge
                                <br/>
                                Chair AAL 93</a>
                            <div className="products__buy-now">
                                <a className="products__buy-now_price" href="pages/product.html">$659.55</a>
                                <Button className="products__buy-now_button products__button_buy">Buy now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_three">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Activate Facial Mask and <br/>
                                Charcoal Soap</div>
                            <div className="products__price">$ 129.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_four">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Cocktail Table Walnut <br/>
                                | YES</div>
                            <div className="products__price">$ 299.99</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_five">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Hay - About A Lounge <br/>
                                Chair AAL 93</div>
                            <div className="products__price">$ 659.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_six">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">TORY DESK CALENDAR</div>
                            <div className="products__price">$ 410.99</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_seven">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">CH445 Wing Chair on <br/>
                                SUITE NY</div>
                            <div className="products__price">$ 330.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__gradient">
                            <div className="products__gradient_text">My dragons are misbehaving again. Unbelieveable!
                            </div>
                            <img className="products__gradient_image" src={gperson} alt="person"/>
                            <div className="products__gradient_counter">5h ago</div>
                        </div>
                        <div className="products__photo products__photo_full products__photo_eight"></div>
                    </div>
                </div>

                <div className="row products__row" id="loaded-products">

                </div>
                <Button className="products__load-more" id="btn-main">Load more <img className="products__load-more_image"
                        src={lmore} alt="load-more"/></Button>
            </div>
        </div>
        

        <div className="osf-banner">
            <h3 className="osf-banner__heading">Banner OSF Theme</h3>
            <p className="osf-banner__subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </p>
        </div>

        <div className="products slider-slick">
            <div className="container">
                <div className="slider-slick__head-whrapper">
                    <h2 className="slider-slick__heading">Featured Products</h2>
                    <p className="slider-slick__subtitle">Unde omnis iste natus error sit voluptatem</p>
                    <div className="slider-slick__arrows">
                        <div className="slider-slick__lines"></div>
                    </div>
                </div>
                <div className="row products__row slider-slick__slider">
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_one">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Kristina Dam Oak Table With <br/>
                                White Marble Top</div>
                            <div className="products__price">$ 799.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <a className="products__photo products__photo_two d-block" href="product.html">
                        </a>
                        <div className="products__description">
                            <a className="products__name products__name_link" href="product.html">Hay - About A Lounge
                                <br/>
                                Chair AAL 93</a>
                            <div className="products__buy-now">
                                <a className="products__buy-now_price" href="product.html">$659.55</a>
                                <Button className="products__buy-now_button products__button_buy">Buy now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_three">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Activate Facial Mask and <br/>
                                Charcoal Soap</div>
                            <div className="products__price">$ 129.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_four">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Cocktail Table Walnut <br/>
                                | YES</div>
                            <div className="products__price">$ 299.99</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_five">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">Hay - About A Lounge <br/>
                                Chair AAL 93</div>
                            <div className="products__price">$ 659.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_six">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">TORY DESK CALENDAR</div>
                            <div className="products__price">$ 410.99</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__photo products__photo_seven">
                            <div className="products__hover">
                                <Button className="products__button products__button_buy"><i className="fa fa-plus"
                                        aria-hidden="true"></i></Button>
                                <Button className="products__button products__button_like"><i className="fa fa-heart"
                                        aria-hidden="true"></i></Button>
                            </div>
                        </div>
                        <div className="products__description">
                            <div className="products__name">CH445 Wing Chair on <b/>
                                SUITE NY</div>
                            <div className="products__price">$ 330.55</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 products__item slider-slick__item">
                        <div className="products__gradient">
                            <div className="products__gradient_text">My dragons are misbehaving again. Unbelieveable!
                            </div>
                            <img className="products__gradient_image" src={gperson} alt="person"/>
                            <div className="products__gradient_counter">5h ago</div>
                        </div>
                        <div className="products__photo products__photo_full products__photo_eight"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="sevices-static">
            <div className="container">
                <div className="row sevices-static__whrapper">
                    <div className="col-md-4 sevices-static__facility">
                        <img className="sevices-static__image" src={sfocus} alt="facility"/>
                        <div className="sevices-static__description">
                            <p className="sevices-static__title">Focus</p>
                            <p className="sevices-static__subtitle">Our unwavering focus on superior service delivery and
                                building
                                next
                                generation competencies</p>
                        </div>
                    </div>
                    <div className="col-md-4 sevices-static__facility">
                        <img className="sevices-static__image" src={smethod} alt="facility"/>
                        <div className="sevices-static__description">
                            <p className="sevices-static__title">Method</p>
                            <p className="sevices-static__subtitle">A standardized methodology designed to deliver
                                measurable
                                business
                                results
                                and predictable costs</p>
                        </div>
                    </div>
                    <div className="col-md-4 sevices-static__facility">
                        <img className="sevices-static__image" src={sknowledge} alt="facility"/>
                        <div className="sevices-static__description">
                            <p className="sevices-static__title">Knowledge</p>
                            <p className="sevices-static__subtitle">A highly skilled, proactive workforce that reliably
                                improves
                                each
                                client’s
                                ROI while mitigating their business risk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
         
    )
}

export default Main;
