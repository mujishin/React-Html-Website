import React, { Fragment } from 'react'
import Menu from './Menu'

export default function Home() {
    return (
        <Fragment>
            <div className="main-wrapper">
                {/* <div id="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div> */}
                
        <Menu/>

                {/* <!-- Slider Section Start home-1 --> */}
                <div className="meeta-hero-section" >

                    <img className="hero-shape-01" src="assets/images/shape/shape-1.svg" alt="shpae" />
                    <img className="hero-shape-02" src="assets/images/shape/shape-2.png" alt="shpae" />

                    <div className="container">
                        <div className="meeta-hero-content">
                            <div className="hero-content-shape">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1904.000000 1521.000000" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="10%" style={{ stopColor: '#c40378' }} />
                                            <stop offset="90%" style={{ stopColor: '#ff3866' }} />
                                        </linearGradient>
                                    </defs>
                                    <g transform="translate(0.000000,1521.000000) scale(0.100000,-0.100000)" fill="url(#grad1)">
                                        <path d="M9505 14211 l-9500 -997 3 -34 c8 -94 1739 -13170 1744 -13175 4 -4 15636 1194 15645 1199 1 1 369 3140 818 6976 448 3836 818 6987 821 7003 5 22 2 27 -13 26 -10 -1 -4293 -450 -9518 -998z" />
                                    </g>
                                </svg>
                            </div>

                            <div className="hero-content-shape-01">
                                <div className="hero-content-shape-02" data-aos-delay="700" data-aos="fade-right"></div>
                                <div className="hero-content-shape-03" data-aos-delay="800" data-aos="fade-right"></div>
                                <div className="hero-content-shape-04" data-aos-delay="900" data-aos="fade-left"></div>
                                <div className="hero-content-shape-05" data-aos-delay="1000" data-aos="fade-left"></div>

                                <h1 className="hero-title" data-aos-delay="700" data-aos="fade-up">Development Conference Day</h1>
                                <span className="hero-year" data-aos-delay="800" data-aos="fade-right">2025</span>
                                <p className="hero-date" data-aos-delay="900" data-aos="fade-up">November 10-12, Boston, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Slider Section End --> */}

                {/* <!-- Register & Countdown Section Start home-1--> */}
                <div className="meeta-register-countdown">
                    <div className="container position-relative">

                        {/* <!-- Register & Countdown Wrapper Start --> */}
                        <div className="meeta-register-countdown-wrapper">

                            <div className="row gy-5 align-items-center">
                                <div className="col-lg-4">

                                    {/* <!-- Register Start --> */}
                                    <div className="meeta-register">
                                        <h2 className="register-title">Register Today</h2>
                                        <a className="register-btn btn btn-3 btn-outline-primary" href="price.html">Book Your Seat</a>
                                    </div>
                                    {/* <!-- Register End --> */}

                                </div>
                                <div className="col-lg-8">

                                    {/* <!-- Countdown Start --> */}
                                    <div className="meeta-countdown countdown" data-countdown="2024/10/24" data-format="short">
                                        <div className="single-countdown">
                                            <span className="count countdown__time daysLeft"></span>
                                            <span className="value countdown__time daysText"></span>
                                        </div>
                                        <div className="single-countdown">
                                            <span className="count countdown__time hoursLeft"></span>
                                            <span className="value countdown__time hoursText"></span>
                                        </div>
                                        <div className="single-countdown">
                                            <span className="count countdown__time minsLeft"></span>
                                            <span className="value countdown__time minsText"></span>
                                        </div>
                                        <div className="single-countdown">
                                            <span className="count countdown__time secsLeft"></span>
                                            <span className="value countdown__time secsText"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Countdown End --> */}

                                </div>

                            </div>
                            {/* <!-- Register & Countdown Wrapper End --> */}
                        </div>

                        <img classNameName="register-countdown-shape" src="assets/images/shape/shape-5.png" alt="Shape" />

                    </div>
                </div>
                {/* <!-- Register & Countdown Section End home-1--> */}

                {/* <!-- About Section Start home-1--> */}
                <div className="meeta-about-section section-padding">
                    <div className="container">

                        <div className="row gy-5 align-items-center">
                            <div className="col-lg-7">

                                {/* <!-- About Images Start --> */}
                                <div className="meeta-about-images">
                                    <div className="image">
                                        <img src="assets/images/about-1.jpg" alt="About" />
                                    </div>
                                </div>
                                {/* <!-- About Images End --> */}

                            </div>
                            <div className="col-lg-5">

                                {/* <!-- Section Title Start --> */}
                                <div className="meeta-section-title meeta-about-title">
                                    <h4 className="sub-title">An event for</h4>
                                    <h2 className="main-title">Designers, Web <br /> developers & Design</h2>
                                </div>
                                {/* <!-- Section Title End --> */}

                                {/* <!-- About Content Start --> */}
                                <div className="meeta-about-content">

                                    <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                    <p>Grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together, this time both</p>

                                </div>
                                {/* <!-- About Content End --> */}

                                {/* <!-- About Content Start -->
                <!-- <div className="meeta-about-counter-items">
                    <div className="single-about-counter">
                        <span className="about-count value counter">24</span>
                        <p className="about-text">Speakers</p>
                    </div>
                    <div className="single-about-counter">
                        <span className="about-count value counter">1140</span>
                        <p className="about-text">Attendence</p>
                    </div>
                    <div className="single-about-counter">
                        <span className="about-count value counter">05</span>
                        <p className="about-text">Workshops</p>
                    </div>
                </div> -->
                <!-- About Content End --> */}

                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- About Section End -->

<!-- Counter Start --> */}
                <div className="meeta-counter-section section-padding" >
                    <div className="shape-1">
                        <img src="assets/images/shape/counter-shape-1.png" alt="" />
                    </div>
                    <div className="shape-2">
                        <img src="assets/images/shape/counter-shape-2.png" alt="" />
                    </div>
                    <div className="shape-3">
                        <img src="assets/images/shape/hero-sahpe-1.png" alt="" />
                    </div>
                    <div className="shape-4">
                        <img src="assets/images/shape/counter-shape-4.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="counter-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    {/* <!-- Single Counter Start --> */}
                                    <div className="single-counter counter-item-1 text-center">
                                        <div className="counter-text">
                                            <span className="counter">24</span>
                                            <p>Speakers</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Counter End --> */}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/* <!-- Single Counter Start --> */}
                                    <div className="single-counter counter-item-2 text-center">
                                        <div className="counter-text">
                                            <span className="counter">1140</span>
                                            <p>Attendence</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Counter End --> */}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/* <!-- Single Counter Start --> */}
                                    <div className="single-counter counter-item-3 text-center">
                                        <div className="counter-text">
                                            <span className="counter">05</span>
                                            <p>Workshops</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Counter End --> */}
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    {/* <!-- Single Counter Start --> */}
                                    <div className="single-counter text-center">
                                        <div className="counter-text">
                                            <span className="counter">205</span>
                                            <p>Guests</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Counter End --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Counter End --> */}

                {/* <!-- Speakers Start --> */}
                <div className="meeta-speakers-2 section-padding">
                    <div className="container">
                        <div className="meeta-speakers-wrap">
                            {/* <!-- Section Title Start --> */}
                            <div className="meeta-section-title-2 text-center">
                                <h4 className="sub-title">Speakers</h4>
                                <h2 className="main-title text-white">World className Speakers</h2>
                            </div>
                            {/* <!-- Section Title End --> */}
                            <div className="meeta-speakers-content-wrap-2">
                                <div className="row">

                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-1 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="speaker-single.html"><img src="assets/images/speaker/speaker-1.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">Mike Fermalin</a></h4>
                                                <p className="speaker-designation">Lead Speaker</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-2 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="speaker-single.html"><img src="assets/images/speaker/speaker-2.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">Harnold Min</a></h4>
                                                <p className="speaker-designation">Developer</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-3 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="speaker-single.html"><img src="assets/images/speaker/speaker-3.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">Joakim Ken</a></h4>
                                                <p className="speaker-designation">Lead Speaker</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-4 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="speaker-single.html"><img src="assets/images/speaker/speaker-4.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">Andrew Inon</a></h4>
                                                <p className="speaker-designation">Lead Speaker</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-5 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="speaker-single.html"><img src="assets/images/speaker/speaker-5.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">kin Joan</a></h4>
                                                <p className="speaker-designation">Developer</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        {/* <!-- Single Speakers Start --> */}
                                        <div className="single-speaker-2 color-6 text-center">
                                            <div className="shape-2">
                                                <img src="assets/images/shape/sp-shape-2.png" alt="" />
                                            </div>
                                            <div className="speaker-image">
                                                <div className="image">
                                                    <a href="index-2.html"><img src="assets/images/speaker/speaker-6.jpg" alt="Speaker" /></a>
                                                </div>
                                                <div className="shape-1">
                                                    <img src="assets/images/shape/sp-shape-1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="speaker-content">
                                                <h4 className="speaker-name"><a href="speaker-single.html">Aronic Kenan</a></h4>
                                                <p className="speaker-designation">Graphic Designer</p>
                                            </div>
                                        </div>
                                        {/* <!-- Single Speakers End --> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Speakers End --> */}

                {/* <!-- Event Schedule Start --> */}
                <div className="meeta-event-schedule meeta-event-schedule-2 section-padding">
                    <div className="container">

                        {/* <!-- Section Title Start --> */}
                        <div className="meeta-section-title-2 text-center">
                            <h4 className="sub-title">Event Schedule</h4>
                            <h2 className="main-title">Follow event schedule</h2>
                        </div>
                        {/* <!-- Section Title End --> */}

                        <div className="row gy-5 justify-content-between">

                            <div className="col-lg-12">

                                {/* <!-- Event Schedule Tabs Start --> */}
                                <div className="meeta-event-schedule-tabs">

                                    {/* <!-- Event Schedule Tabs Menu Start --> */}
                                    <ul className="meeta-event-schedule-tabs-menu">
                                        <li data-tab-target="#tab1" className="active">
                                            <div className="meeta-event-schedule-time">
                                                <h4 className="meeta-event-schedule-day">Day 1</h4>
                                                <p>Oct 08, 2022</p>
                                            </div>
                                        </li>
                                        <li data-tab-target="#tab2" className="tab">
                                            <div className="meeta-event-schedule-time">
                                                <h4 className="meeta-event-schedule-day">Day 2</h4>
                                                <p>Oct 09, 2022</p>
                                            </div>
                                        </li>
                                        <li data-tab-target="#tab3" className="tab">
                                            <div className="meeta-event-schedule-time">
                                                <h4 className="meeta-event-schedule-day">Day 3</h4>
                                                <p>Oct 10, 2022</p>
                                            </div>
                                        </li>
                                        <li data-tab-target="#tab4" className="tab">
                                            <div className="meeta-event-schedule-time">
                                                <h4 className="meeta-event-schedule-day">Day 4</h4>
                                                <p>Oct 11, 2022</p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <!-- Event Schedule Tabs Menu End --> */}

                                    {/* <!-- Event Schedule Tabs Content Start --> */}
                                    <div className="meeta-event-schedule-tab-content">
                                        <div id="tab1" className="meeta-event-schedule-tab-pane active">

                                            {/* <!-- Event Accordion Start --> */}
                                            <ul className="meeta-event-accordion">
                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-1.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">09 AM - 11 AM</span>
                                                            <h3 className="title">Registration for opening workshop </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body open">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-2.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">11 AM - 01 AM</span>
                                                            <h3 className="title">Introduction about speakers </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-3.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">01 AM - 02 AM</span>
                                                            <h3 className="title">Lunch Break </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            {/* <!-- Event Accordion End --> */}

                                        </div>
                                        <div id="tab2" className="meeta-event-schedule-tab-pane">

                                            {/* <!-- Event Accordion Start --> */}
                                            <ul className="meeta-event-accordion">
                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-1.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">09 AM - 11 AM</span>
                                                            <h3 className="title">Discussion about technolgy </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body open">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-2.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">11 AM - 01 AM</span>
                                                            <h3 className="title">Introduction about speakers </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-3.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">01 AM - 02 AM</span>
                                                            <h3 className="title">Lunch Break </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            {/* <!-- Event Accordion End --> */}

                                        </div>
                                        <div id="tab3" className="meeta-event-schedule-tab-pane">

                                            {/* <!-- Event Accordion Start --> */}
                                            <ul className="meeta-event-accordion">

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-2.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">11 AM - 01 AM</span>
                                                            <h3 className="title">Introduction about speakers </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-1.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">09 AM - 11 AM</span>
                                                            <h3 className="title">Registration for opening workshop </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body open">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-3.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">01 AM - 02 AM</span>
                                                            <h3 className="title">Lunch Break </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            {/* <!-- Event Accordion End --> */}

                                        </div>
                                        <div id="tab4" className="meeta-event-schedule-tab-pane">

                                            {/* <!-- Event Accordion Start --> */}
                                            <ul className="meeta-event-accordion">
                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-1.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">09 AM - 11 AM</span>
                                                            <h3 className="title">Registration for opening workshop </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body open">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-2.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">11 AM - 01 AM</span>
                                                            <h3 className="title">Discussion about technolgy  </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                                <li className="meeta-event-accordion-item">
                                                    <div className="meeta-event-accordion-toggle">
                                                        <div className="image">
                                                            <img src="assets/images/schedule-3.jpg" alt="" />
                                                        </div>
                                                        <div className="event-title">
                                                            <span className="time">01 AM - 02 AM</span>
                                                            <h3 className="title">Lunch Break </h3>
                                                        </div>
                                                    </div>
                                                    <div className="meeta-event-accordion-body">
                                                        <p>We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            {/* <!-- Event Accordion End --> */}

                                        </div>
                                    </div>
                                    {/* <!-- Event Schedule Tabs Content End --> */}

                                </div>
                                {/* <!-- Event Schedule Tabs End --> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Event Schedule End --> */}

                {/* <!-- Pricing Start --> */}
                <div className="meeta-pricing meeta-pricing-2 section-padding">

                    <div className="shape-1">
                        <img src="assets/images/shape/price-2-bg.png" alt="" />
                    </div>

                    <div className="container">

                        {/* <!-- Section Title Start --> */}
                        <div className="meeta-section-title-2 text-center">
                            <h4 className="sub-title">Ticket Price</h4>
                            <h2 className="main-title text-white">Get Your Tickets Now</h2>
                        </div>
                        {/* <!-- Section Title End --> */}

                        <div className="row gy-5 justify-content-center meeta-pricing-row">
                            <div className="col-lg-4 col-md-8">

                                {/* <!-- Single Pricing Start --> */}
                                <div className="single-pricing">
                                    <div className="pricing-header">
                                        <h3 className="price_title">Basic Pass</h3>
                                        <div className="price">
                                            <span><sup>$</sup>45</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li>Back Row Seat</li>
                                            <li>Free Lunch & Snacks</li>
                                            <li>Event Certificate</li>
                                            <li>1 Workshop</li>
                                        </ul>
                                        <a className="btn" href="price.html">Book A Seat</a>
                                    </div>
                                </div>
                                {/* <!-- Single Pricing End --> */}

                            </div>
                            <div className="col-lg-4 col-md-8">

                                {/* <!-- Single Pricing Start --> */}
                                <div className="single-pricing active">
                                    <div className="pricing-header">
                                        <h3 className="price_title">Standard Pass</h3>
                                        <div className="price">
                                            <span><sup>$</sup>65</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li>Back Row Seat</li>
                                            <li>Free Lunch & Snacks</li>
                                            <li>Event Certificate</li>
                                            <li>1 Workshop</li>
                                        </ul>
                                        <a className="btn" href="price.html">Book A Seat</a>
                                    </div>
                                </div>
                                {/* <!-- Single Pricing End --> */}

                            </div>
                            <div className="col-lg-4 col-md-8">

                                {/* <!-- Single Pricing Start --> */}
                                <div className="single-pricing">
                                    <div className="pricing-header">
                                        <h3 className="price_title">Premium Pass</h3>
                                        <div className="price">
                                            <span><sup>$</sup>85</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li>Back Row Seat</li>
                                            <li>Free Lunch & Snacks</li>
                                            <li>Event Certificate</li>
                                            <li>1 Workshop</li>
                                        </ul>
                                        <a className="btn" href="price.html">Book A Seat</a>
                                    </div>
                                </div>
                                {/* <!-- Single Pricing End --> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Pricing End --> */}

                {/* <!-- Event Sponsors Start home-1--> */}
                <div className="meeta-event-sponsors section-padding" >
                    <div className="container">

                        {/* <!-- Section Title Start --> */}
                        <div className="meeta-section-title text-center">
                            <h2 className="main-title text-white">Event Sponsors</h2>
                        </div>
                        {/* <!-- Section Title End --> */}

                        {/* <!-- Sponsor Active Start --> */}
                        <div className="meeta-sponsor-active">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="meeta-sponsor-logo">
                                            <img src="assets/images/sponsors-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="meeta-sponsor-logo">
                                            <img src="assets/images/sponsors-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="meeta-sponsor-logo">
                                            <img src="assets/images/sponsors-3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="meeta-sponsor-logo">
                                            <img src="assets/images/sponsors-4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Sponsor Active End --> */}

                    </div>
                </div>
                {/* <!-- Event Sponsors End --> */}


                {/* <!-- Blog Start --> */}
                <div className="meeta-blog section-padding-02">
                    <div className="container">
                        {/* <!-- Section Title Start --> */}
                        <div className="meeta-section-title-2 text-center">
                            <h4 className="sub-title">Latest Blog</h4>
                            <h2 className="main-title">Whats happening near</h2>
                        </div>
                        {/* <!-- Section Title End --> */}
                        <div className="meeta-blog-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    {/* <!-- Single Blog Start --> */}
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/images/blog/blog-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span className="category">Conference</span>
                                                <span className="date">Octobor 09, 2022</span>
                                            </div>
                                            <h3 className="title"><a href="blog-details.html">Registration for opening workshop </a></h3>
                                        </div>
                                    </div>
                                    {/* <!-- Single Blog End --> */}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    {/* <!-- Single Blog Start --> */}
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/images/blog/blog-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span className="category color-1">Conference</span>
                                                <span className="date">Octobor 09, 2022</span>
                                            </div>
                                            <h3 className="title"><a href="blog-details.html">Registration for opening workshop </a></h3>
                                        </div>
                                    </div>
                                    {/* <!-- Single Blog End --> */}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    {/* <!-- Single Blog Start --> */}
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <a href="blog-details.html"><img src="assets/images/blog/blog-3.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span className="category color-2">Conference</span>
                                                <span className="date">Octobor 09, 2022</span>
                                            </div>
                                            <h3 className="title"><a href="blog-details.html">Registration for opening workshop </a></h3>
                                        </div>
                                    </div>
                                    {/* <!-- Single Blog End --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog End --> */}

                {/* <!-- Gallery Start --> */}
                <div className="meeta-gallery meeta-gallery-2 section-padding-02">
                    <div className="row g-0">
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-1.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-1.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-2.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-2.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-7.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-7.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-8.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-8.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-4.jpg" alt="Gallery" />
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
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-3.jpg" alt="Gallery" />
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
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-9.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-9.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">

                            {/* <!-- Single Gallery Start --> */}
                            <div className="single-gallery">
                                <div className="gallery-image">
                                    <img src="assets/images/gallery-10.jpg" alt="Gallery" />
                                </div>
                                <div className="gallery-content">
                                    <div className="gallery-content-wrap">
                                        <a href="assets/images/gallery-10.jpg" className="gallery-plus image-popup">
                                            <span></span>
                                        </a>
                                        <h4 className="gallery-title"><a href="index-2.html">Developer Conference 2022</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Gallery End --> */}

                        </div>
                    </div>
                </div>
                {/* <!-- Gallery End --> */}
            </div>

            {/* <!-- Footer Start --> */}
            <div className="meeta-footer-section meeta-footer-2">

                {/* <!-- Footer Widget Start --> */}
                <div className="footer-widget">
                    <div className="container">

                        <div className="footer-wrap">
                            <div className="row">

                                <div className="col-lg-3">
                                    {/* <!-- Footer Logo Start --> */}
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="assets/images/footer-logo-1.png" alt="Logo" />
                                        </a>
                                    </div>
                                    {/* <!-- Footer Logo End --> */}
                                </div>

                                <div className="col-lg-9">
                                    {/* <!-- Footer Newsletter Start --> */}
                                    <div className="footer-newsletter">

                                        <div className="footer-newsletter-form">
                                            <form action="#">
                                                <input type="text" placeholder="Your Email" />
                                                <button className="btn btn-primary">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- Footer Newsletter End --> */}

                                    <div className="footer-bottom-wrap">
                                        <div className="row">
                                            <div className="col-md-5">
                                                {/* <!-- Footer Info Start --> */}
                                                <div className="footer-info">
                                                    <h3 className="title">Event Details</h3>
                                                    <span className="date">21 - 23 Octobor 2022 </span>
                                                    <p>66 Road Broklyn Street BNG 275 New York. United States of America.</p>
                                                    <div className="footer-widget-social">
                                                        <a href="index-2.html"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="index-2.html"><i className="fab fa-twitter"></i></a>
                                                        <a href="index-2.html"><i className="fab fa-dribbble"></i></a>
                                                        <a href="index-2.html"><i className="fab fa-behance"></i></a>
                                                        <a href="index-2.html"><i className="fab fa-pinterest"></i></a>
                                                    </div>
                                                    {/* <!-- Footer Info End --> */}
                                                </div>
                                            </div>

                                            <div className="col-md-7">
                                                {/* <!-- Footer widget Map Start --> */}
                                                <div className="footer-widget-map">
                                                    <iframe src="https://maps.google.com/maps?q=New%20York%20University%20&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="New York University" aria-label="New York University"></iframe>
                                                </div>
                                                {/* <!-- Footer widget Map End --> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="footer-copyright text-center">
                            <p>2022 Copyright Meeta Designed by Pixelcurve. All Rights Reserved</p>
                        </div>

                    </div>
                </div>
                {/* <!-- Footer Widget End --> */}
                {/* <!-- back to top start --> */}
                <div class="progress-wrap">
                    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
                {/* <!-- back to top end --> */}

            </div>
            </Fragment>
    )
}
