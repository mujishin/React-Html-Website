import React, { Fragment } from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

export default function Event() {
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
    <div className="shape-2"></div>
    <div className="container">
        <div className="page-banner-wrap">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- Page Banner Content Start --> */}
                    <div className="page-banner text-center">
                        <h2 className="title">Event List</h2>
                        <ul className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"> <Link to= "/"> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Event List</li>
                        </ul>
                    </div>
                    {/* <!-- Page Banner Content End --> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Page Banner End --> */}

{/* <!-- Event List Start --> */}
<div className="meeta-event-list section-padding">
    <div className="container">
        <div className="meeta-event-list-wrap">
            {/* <!-- Event List Top Bar Start --> */}
            <div className="event-list-top-bar">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="event-list-search">
                            <form action="/">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <div className="single-form">
                                            <i className="fas fa-search"></i>
                                            <input type="text" placeholder="Search Event"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="single-form form-border">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <input type="text" placeholder="Location"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-btn">
                                            <button className="btn btn-primary">Find Event</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="event-filter-wrap">
                            <div className="event-collapse-btn">
                                <button className="btn collapsed" data-bs-toggle="collapse" data-bs-target="/collapseFilters">
                                    <i className="fa fa-filter"></i>
                                    Hide Filters
                                </button>
                            </div>
                            <div className="event-list-btn">
                                <ul className="nav">
                                    <li>
                                        <button data-bs-toggle="tab" data-bs-target="/grid"><i className="fas fa-th-large"></i></button>
                                    </li>
                                    <li>
                                        <button className="active" data-bs-toggle="tab" data-bs-target="/list"><i className="fas fa-list"></i></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- List Collapse Start --> */}
                <div className="collapse" id="collapseFilters">
                    <div className="event-list-tag">
                        <ul>
                            <li><a href="/">Featured Event</a></li>
                            <li><a href="/">Upcoming</a></li>
                            <li><a href="/">Organizers</a></li>
                            <li><a href="/">Day</a></li>
                            <li><a href="/">Price</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- List Collapse End --> */}
            </div>
            {/* <!-- Event List Top Bar End --> */}
            {/* <!-- Event List Bottom Bar Start --> */}
            <div className="event-list-bottom-bar">
                <div className="event-list-btn">
                    <a className="event-btn" href="/"><i className="flaticon-back"></i></a>
                    <a className="event-btn" href="/"><i className="flaticon-next"></i></a>
                </div>
            </div>
            {/* <!-- Event List Bottom Bar End --> */}
            {/* <!-- Event List Content Start --> */}
            <div className="event-list-content-wrap">
                <div className="tab-content">
                    <div className="tab-pane" id="grid">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-list-1.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="cat">Featured</span>
                                            <span className="price">$25</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-l-2.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="price">$25</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-l-3.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="price">Free</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-list-4.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="price">Free</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-list-5.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="cat">Featured</span>
                                            <span className="price">$25</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream</a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                {/* <!-- Event List Item Start --> */}
                                <div className="event-list-item">
                                    <div className="event-img">
                                        <a href="event-single.html"><img src="assets/images/event/event-list-6.jpg" alt=""/></a>
                                    </div>
                                    <div className="event-list-content">
                                        <div className="event-price">
                                            <span className="price">$25</span>
                                        </div>
                                        <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                        <div className="meta-data">
                                            <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                            <span><i className="fas fa-map-marker-alt"></i>  Sand diego, Canada</span>
                                        </div>
                                        <div className="event-desc">
                                            <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                        </div>
                                        <a className="ticket-link" href="price.html">Get Ticket Now</a>
                                    </div>
                                </div>
                                {/* <!-- Event List Item End --> */}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane show active" id="list">
                        {/* <!-- Event List Item Start --> */}
                        <div className="event-list-item event-list d-lg-flex align-items-center">
                            <div className="event-img">
                                <a href="event-single.html"><img src="assets/images/event/event-list-1.jpg" alt=""/></a>
                            </div>
                            <div className="event-list-content">
                                <div className="event-price">
                                    <span className="cat">Featured</span>
                                    <span className="price">$25</span>
                                </div>
                                <h3 className="title"><a href="event-single.html">Virtual Event with Protected Content and Hidden Livestream </a></h3>
                                <div className="meta-data">
                                    <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                </div>
                                <div className="event-desc">
                                    <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                </div>
                                <a className="ticket-link" href="price.html">Get Ticket Now</a>
                            </div>
                            <span className="event-time"><span>01</span>Am</span>
                        </div>
                        {/* <!-- Event List Item EEnd -->
                        <!-- Event List Item Start --> */}
                        <div className="event-list-item event-list d-lg-flex align-items-center">
                            <div className="event-img">
                                <a href="event-single.html"><img src="assets/images/event/event-l-2.jpg" alt=""/></a>
                            </div>
                            <div className="event-list-content">
                                <div className="event-price">
                                    <span className="price">$25</span>
                                </div>
                                <h3 className="title"><a href="event-single.html">Walking on the Village Mountain</a></h3>
                                <div className="meta-data">
                                    <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                </div>
                                <div className="event-desc">
                                    <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                </div>
                                <a className="ticket-link" href="price.html">Get Ticket Now</a>
                            </div>
                            <span className="event-time"><span>03</span>Am</span>
                        </div>
                        {/* <!-- Event List Item EEnd -->
                        <!-- Event List Item Start --> */}
                        <div className="event-list-item event-list d-lg-flex align-items-center">
                            <div className="event-img">
                                <a href="event-single.html"><img src="assets/images/event/event-l-3.jpg" alt=""/></a>
                            </div>
                            <div className="event-list-content">
                                <div className="event-price">
                                    <span className="price">Free</span>
                                </div>
                                <h3 className="title"><a href="event-single.html">Wedding of James & Helen</a></h3>
                                <div className="meta-data">
                                    <span><i className="fas fa-map-marker-alt"></i> 1:00AM-2:00AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i>    Sand diego, Canada</span>
                                </div>
                                <div className="event-desc">
                                    <p>Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                                </div>
                                <a className="ticket-link" href="price.html">Get Ticket Now</a>
                            </div>
                            <span className="event-time"><span>05</span>Am</span>
                        </div>
                        {/* <!-- Event List Item EEnd --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Event List Content End --> */}
            <div className="event-next-prev-btn text-center">
                <a className="event-btn" href="/"><i className="flaticon-back"></i> Previous</a>
                <a className="event-btn btn-next" href="/">Next <i className="flaticon-next"></i></a>
            </div>
        </div>
    </div>
</div>
{/* <!-- Event List End --> */}

</div>

{/* <!-- Footer Start --> */}
<div className="meeta-footer-section">
{/* 
<!-- Footer Widget Start --> */}
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
{/* <!-- back to top end --> */}
    </Fragment>
  )
}
