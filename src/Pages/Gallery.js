import React, { Fragment } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <Fragment>
        <div className="main-wrapper">

 {/* <!-- Preloader start -->
<div id="preloader">
    <div className="preloader">
        <span></span>
        <span></span>
    </div>
</div>
<!-- Preloader End --> */}

<Menu/>

{/* <!-- Page Banner Start --> */}
<div className="section page-banner-section">
    <div className="shape-2"></div>
    <div className="container">
        <div className="page-banner-wrap">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- Page Banner Content Start --> */}
                    <div className="page-banner text-center">
                        <h2 className="title">Gallery</h2>
                        <ul className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to= "/"> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                        </ul>
                    </div>
                    {/* <!-- Page Banner Content End --> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Page Banner End --> */}

{/* <!-- Gallery Start --> */}
<div className="meeta-gallery meeta-gallery-2 section-padding">
    <div className="container">


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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
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
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-8.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-8.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-9.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-9.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
            <div className="col-lg-4 col-sm-6">

                {/* <!-- Single Gallery Start --> */}
                <div className="single-gallery">
                    <div className="gallery-image">
                        <img src="assets/images/gallery-10.jpg" alt="Gallery"/>
                    </div>
                    <div className="gallery-content">
                        <div className="gallery-content-wrap">
                            <a href="assets/images/gallery-10.jpg" className="gallery-plus image-popup">
                                <span></span>
                            </a>
                            <h4 className="gallery-title"><a href="/">Developer Conference 2022</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single Gallery End --> */}

            </div>
        </div>
        </div>

    </div>
{/* </div>
<!-- Gallery End --> */}

</div>

{/* <!-- Footer Start --> */}
<div className="meeta-footer-section">

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
                <form action="/">
                    <input type="text" placeholder="Your Email"/>
                    <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
       
        <div className="footer-widget-social">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-dribbble"></i></a>
            <a href="/"><i className="fab fa-behance"></i></a>
            <a href="/"><i className="fab fa-pinterest"></i></a>
        </div>
        {/* <!-- Footer widget Social End --> */}

        {/* <!-- Footer Copyright Start --> */}
        <div className="footer-copyright">
            <p>2022 Copyright Meeta Designed by Pixelcurve. All Rights Reserved</p>
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
