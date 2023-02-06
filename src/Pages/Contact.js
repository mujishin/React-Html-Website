import React, { Fragment } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
   <Fragment>
    <div className="main-wrapper">
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
                        <h2 className="title">Contact Us</h2>
                        <ul className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to= "/"> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ul>
                    </div>
                    {/* <!-- Page Banner Content End --> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Page Banner End --> */}

{/* <!-- Contact Form Start --> */}
<div className="contact-form-section section-padding">
    <div className="container">
        {/* <!-- Contact Wrap Start --> */}
        <div className="contact-wrap">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="form-title text-center">
                        <h2 className="title">Sent Us A Message</h2>
                    </div>
                    {/* <!-- Contact Form Wrap Start --> */}
                    <div className="contact-form-wrap">
                        <form action="/">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input className="form-control" type="text" placeholder="Your Name"/>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input className="form-control" type="email" placeholder="Your Email"/>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input className="form-control" type="text" placeholder="Your Number"/>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input className="form-control" type="text" placeholder="Subject"/>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div className="col-md-12">
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <textarea className="form-control" placeholder="Write A Message"></textarea>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div className="col-md-12">
                                    {/* <!--  Single Form Start --> */}
                                    <div className="form-btn text-center">
                                        <button className="btn btn-primary" type="submit">Submit Now</button>
                                    </div>
                                    {/* <!--  Single Form End --> */}
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Contact Form Wrap End --> */}
                </div>
            </div>
        </div>
        {/* <!-- Contact Wrap End --> */}
    </div>
</div>
{/* <!-- Contact Form End --> */}

{/* <!-- Contact Info Start --> */}
<div className="section contact-info-section">
    <div className="container">
        {/* <!-- Contact Info Wrap Start --> */}
        <div className="contact-info-wrap">
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    {/* <!--Single Contact Info Start --> */}
                    <div className="single-contact-info text-center">
                        <div className="info-icon color-2">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="info-content">
                            <h5 className="title">Telephone</h5>
                            <p>+458 123 657 2324</p>
                        </div>
                    </div>
                    {/* <!--Single Contact Info End --> */}
                </div>
                <div className="col-lg-4 col-sm-6">
                    {/* <!--Single Contact Info Start --> */}
                    <div className="single-contact-info text-center">
                        <div className="info-icon color-1">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="info-content">
                            <h5 className="title">Drop Your Mail</h5>
                            <p>info@techmax.nl</p>
                        </div>
                    </div>
                    {/* <!--Single Contact Info End --> */}
                </div>
                <div className="col-lg-4 col-sm-6">
                    {/* <!--Single Contact Info Start --> */}
                    <div className="single-contact-info text-center">
                        <div className="info-icon color-3">
                            <i className="flaticon-pin"></i>
                        </div>
                        <div className="info-content">
                            <h5 className="title">Location</h5>
                            <p>1800 Abbot Kinney Blvd</p>
                        </div>
                    </div>
                    {/* <!--Single Contact Info End --> */}
                </div>
            </div>
        </div>
        {/* <!-- Contact Info Wrap End --> */}
    </div>
</div>
{/* <!-- Contact Info End --> */}

{/* <!-- Contact Map Start --> */}
<div className="section contact-map-section">
    <div className="contact-map-wrap">
    <iframe title={'maps'}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
        {/* <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8369905872214!2d77.58972751526969!3d12.918196419542008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e2a2370949%3A0x8fbaa2022ede0c80!2sJAIN%20University%20(BANGLA%20POINT)!5e0!3m2!1sen!2sin!4v1673955602534!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
</div>
{/* <!-- Contact Map End --> */}

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
        {/* <!-- Footer Newsletter End --> */}

        {/* <!-- Footer widget Social Start --> */}
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

   </Fragment>
  )
}
