import React, { Fragment } from 'react'
import Menu from './Menu'

export default function About() {
  return (
    <Fragment>
        <div className="main-wrapper">

{/* <!-- Preloader start --> */}
{/* <div id="preloader">
    <div className="preloader">
        <span></span>
        <span></span>
    </div>
</div> */}
{/* <!-- Preloader End --> */}
<Menu/>

{/* <!-- Page Banner Start --> */}
<div className="section page-banner-section">
    <div className="container">
        <div className="page-banner-wrap">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- Page Banner Content Start --> */}
                    <div className="page-banner text-center">
                        <h2 className="title">About Event</h2>
                        <ul className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Events in Home Page</li>
                        </ul>
                    </div>
                    {/* <!-- Page Banner Content End --> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Page Banner End --> */}

{/* <!-- About Section Start --> */}
<div className="meeta-about-section section-padding">
    <div className="container">

        <div className="row gy-5 align-items-center">
            <div className="col-lg-7">

                {/* <!-- About Images Start --> */}
                <div className="meeta-about-images" style={{backgroundImage: 'url(assets/images/shape/shape-4.png)'}}>
                    <div className="image">
                        <img src="assets/images/about-1.jpg" alt="About" />
                    </div>
                </div>
                {/* <!-- About Images End --> */}

            </div>
            <div className="col-lg-5">

                {/* <!-- Section Title Start --> */}
                <div className="meeta-section-title-2 meeta-about-title">
                    <h4 className="sub-title">An event for</h4>
                    <h2 className="main-title">Designers, Web <br/> developers & Design</h2>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- About Content Start --> */}
                <div className="meeta-about-content">

                    <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                    <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together, this time both in-person</p>

                </div>
                {/* <!-- About Content End --> */}

            </div>
        </div>

    </div>
</div>
{/* <!-- About Section End --> */}

{/* <!-- Features Section Start --> */}
<div className="meeta-features-section section-padding">
    <div className="shape-1" data-aos-delay="700" data-aos="zoom-in"></div>
    <img className="shape-2" src="assets/images/shape/shape-11.png" alt="" />
    <div className="container">
        <div className="meeta-features-wrap">
            <div className="row">
                <div className="col-lg-4">
                    {/* <!-- Section Title Start --> */}
                    <div className="meeta-section-title-2">
                        <h4 className="sub-title">Reason to join conference</h4>
                        <h2 className="main-title">Why attend conference</h2>
                    </div>
                    {/* <!-- Section Title End --> */}
                    {/* <!-- Features Item Start --> */}
                    <div className="feature-item feature-1">
                        <div className="feature-icon">
                            <img src="assets/images/feature-icon-1.png" alt=""/>
                        </div>
                        <div className="feature-content">
                            <h3 className="title"><a href="index-2.html">Trainings & Awards</a></h3>
                            <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their </p>
                        </div>
                    </div>
                    {/* <!-- Features Item End --> */}
                </div>
                <div className="col-lg-4">
                    {/* <!-- Features Item Start --> */}
                    <div className="feature-item feature-2">
                        <div className="feature-icon">
                            <img src="assets/images/feature-icon-2.png" alt=""/>
                        </div>
                        <div className="feature-content">
                            <h3 className="title"><a href="index-2.html">World className Speaker</a></h3>
                            <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their </p>
                        </div>
                    </div>
                    {/* <!-- Features Item End -->
                    <!-- Features Item Start --> */}
                    <div className="feature-item feature-3">
                        <div className="feature-icon">
                            <img src="assets/images/feature-icon-3.png" alt=""/>
                        </div>
                        <div className="feature-content">
                            <h3 className="title"><a href="index-2.html">Evening Concert</a></h3>
                            <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their </p>
                        </div>
                    </div>
                    {/* <!-- Features Item End --> */}
                </div>
                <div className="col-lg-4">
                    {/* <!-- Features Item Start --> */}
                    <div className="feature-item feature-4">
                        <div className="feature-icon">
                            <img src="assets/images/feature-icon-4.png" alt=""/>
                        </div>
                        <div className="feature-content">
                            <h3 className="title"><a href="index-2.html">3 Days Conference</a></h3>
                            <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their </p>
                        </div>
                    </div>
                    {/* <!-- Features Item End --> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Features Section End --> */}

{/* <!-- Speakers Start --> */}
<div className="meeta-speakers meeta-speakers-5 section-padding">
    <div className="container">
        {/* <!-- Section Title Start --> */}
        <div className="meeta-section-title-2 text-center">
            <h4 className="sub-title">Speakers</h4>
            <h2 className="main-title text-white">World className Speakers</h2>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="row gy-5 meeta-speakers-row">
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-1.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Mike Fermalin</a></h4>
                            <p className="speaker-designation">Lead Speaker</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-2.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Harnold Min</a></h4>
                            <p className="speaker-designation">Lead Speaker</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-3.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Joakim Ken</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-4.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Andrew Inon</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-5.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">kin Joan</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-6.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Aronic Kenan</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-7.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Kinda Mona</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
            <div className="col-lg-3 col-sm-6">
                {/* <!-- Single Speakers Start --> */}
                <div className="single-speaker">
                    <div className="speaker-image">
                        <a href="speaker-single.html"><img src="assets/images/speaker-8.jpg" alt="Speaker"/></a>
                    </div>
                    <div className="speaker-content">
                        <div className="speaker-content-box">
                            <h4 className="speaker-name"><a href="speaker-single.html">Mike Fermalin</a></h4>
                            <p className="speaker-designation">Developer</p>
                        </div>
                        <img className="speaker-shape-1" src="assets/images/shape/shape-8.png" alt=""/>
                        <div className="speaker-shape-2"></div>
                    </div>
                </div>
                {/* <!-- Single Speakers End --> */}
            </div>
        </div>

    </div>
</div>
{/* <!-- Speakers End --> */}

{/* <!-- Gallery Start --> */}
<div className="meeta-gallery meeta-gallery-2 section-padding">
    <div className="container">

        {/* <!-- Section Title Start --> */}
        <div className="meeta-section-title-2 text-center">
            <h4 className="sub-title">Photo Gallery</h4>
            <h2 className="main-title">Have A Look On Gallery</h2>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="row g-0">
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-1.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-1.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="Style prop value must be an object">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-2.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-2.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="Style prop value must be an object">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-3.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-3.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-4.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-4.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-5.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-5.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-6.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-6.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="Style prop value must be an object">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
        </div>

    </div>
</div>
{/* <!-- Gallery End --> */}

{/* <!-- Event Sponsors Start --> */}
<div className="meeta-event-sponsors-2 section-padding" style={{backgroundImage: 'url(assets/images/bg/sponsor-bg-2.jpg)'}}>
    <div className="container">

        {/* <!-- Section Title Start --> */}
        <div className="meeta-section-title-2 text-center">
            <h2 className="main-title">Event Sponsors</h2>
        </div>
        {/* <!-- Section Title End --> */}

        <div className="meeta-sponsor-active">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="meeta-sponsor-logo">
                            <img src="assets/images/sponsors-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="meeta-sponsor-logo">
                            <img src="assets/images/sponsors-6.png" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="meeta-sponsor-logo">
                            <img src="assets/images/sponsors-7.png" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="meeta-sponsor-logo">
                            <img src="assets/images/sponsors-8.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Sponsor Active End --> */}

    </div>
</div>
{/* <!-- Event Sponsors End --> */}


</div>

{/* <!-- Footer Start --> */}
<div className="meeta-footer-section" style={{backgroundImage: 'url(assets/images/bg/footer-bg.jpg)'}}>

{/* <!-- Footer Widget Start --> */}
<div className="footer-widget text-center">
    <div className="container">

        {/* <!-- Footer Logo Start --> */}
        <div className="footer-logo">
            <a href="index.html"><img src="assets/images/footer-logo-1.png" alt="Logo"/></a>
        </div>
        {/* <!-- Footer Logo End --> */}

        {/* <!-- Footer Newsletter Start --> */}
        <div className="footer-newsletter">
            <p>Join our mailing list to stay up to date on all things Expotin</p>

            <div className="footer-newsletter-form">
                <form action="#">
                    <input type="text" placeholder="Your Email"/>
                    <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
        {/* <!-- Footer Newsletter End --> */}

        {/* <!-- Footer widget Social Start --> */}
        <div className="footer-widget-social">
            <a href="index-2.html"><i className="fab fa-facebook-f"></i></a>
            <a href="index-2.html"><i className="fab fa-twitter"></i></a>
            <a href="index-2.html"><i className="fab fa-dribbble"></i></a>
            <a href="index-2.html"><i className="fab fa-behance"></i></a>
            <a href="index-2.html"><i className="fab fa-pinterest"></i></a>
        </div>
        {/* <!-- Footer widget Social End --> */}

        {/* <!-- Footer Copyright Start --> */}
        <div className="footer-copyright">
            <p>2022 Copyright Meeta Designed by Pixelcurve . All Rights Reserved</p>
        </div>
        {/* <!-- Footer Copyright End --> */}

    </div>
</div>
{/* <!-- Footer Widget End --> */}

</div>
{/* <!-- Footer End --> */}

{/* <!-- back to top start --> */}
<div className="progress-wrap">
<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
</svg>
</div>
{/* <!-- back to top end --> */}
</Fragment>
  )
}
