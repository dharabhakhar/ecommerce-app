import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <section className='banner-1 py-5'>
            <div className="container-1">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src={require('../images/main-banner-1.webp')}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>SUPERCHARGED FOR PROS.</p>
                                        <h1>iPad S13+ Pro.</h1>
                                        <span className='text-black'>From $999.00 or $41.62/mo. <br />for 24 mo. Footnote*</span><br />
                                        <Link to={'/shop'} className='text-white'>
                                            <button className='mt-4 carousel-btn'>BUY NOW</button>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded rounded-3"
                                        src={require('../images/main-banner-2.webp')}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>SUPERCHARGED FOR PROS.</p>
                                        <h1>Special Sale</h1>
                                        <span className='text-black'>From $999.00 or $41.62/mo. <br />for 24 mo. Footnote*</span><br />
                                        <Link to={'/shop'} className='text-white'>
                                            <button className='mt-4 carousel-btn'>BUY NOW</button>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-6 banner-sec-part">
                        <div className="row mb-4">
                            <div className="col-6">
                                <Link to={'/shop'}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded rounded-3"
                                                src={require('../images/catbanner-01.webp')}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <p>BEST SALE</p>
                                                <h1 className='sale-text'>Laptops Max</h1>
                                                <span className='text-black'>From $1699.00 or <br />$62.62/mo.</span><br />
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to={'/shop'}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded rounded-3"
                                                src={require('../images/catbanner-03.webp')}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <p>NEW ARRIVAL</p>
                                                <h1 className='sale-text'>Buy IPad Air</h1>
                                                <span className='text-black'>From $599.00 or <br />$49.91/mo.</span><br />
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Link to={'/shop'}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded rounded-3"
                                                src={require('../images/catbanner-02.webp')}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <p>15% OFF</p>
                                                <h1 className='sale-text'>Smartwatch 7</h1>
                                                <span className='text-black'>                  Shop the latest band <br /> styles and colors.
                                                </span><br />
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to={'/shop'}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded rounded-3"
                                                src={require('../images/catbanner-04.webp')}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <p>FREE ENGRAVING</p>
                                                <h1 className='sale-text'>AirPods Max</h1>
                                                <span className='text-black'>
                                                    High-fidelity playback &<br /> ultra-low distortion
                                                </span><br />
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
