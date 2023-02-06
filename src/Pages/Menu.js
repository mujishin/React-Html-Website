import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <Fragment>
        {/* <!-- Header Start --> */}
        <div className="meeta-header-section meeta-header-2">

{/* <!-- Header Middle Start --> */}
<div className="header-middle header-sticky">
    <div className="container-fluid">

        <div className="header-wrap">
            {/* <!-- Header Logo Start --> */}
            <div className="header-logo">
                <Link to ="/"><img src="assets/images/logo-4.png" alt="Logo" /></Link>
            </div>
            {/* <!-- Header Logo End --> */}

            {/* <!-- Header Navigation Start --> */}
            <div className="header-navigation d-none d-lg-block">
                <ul className="main-menu">
                    <li class=""><Link to= "/"> Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to= "/events">Events</Link></li>
                    <li><Link to= "/gallery">Gallery</Link> </li>
                    <li><Link to= "/speakers">Speakers</Link></li>
                    <li><Link to= "/blog">Blog</Link></li>
                    <li><Link to= "/contact">Contact</Link></li>
                </ul>
            </div>
            {/* <!-- Header Navigation End --> */}

            {/* <!-- Header Meta Start --> */}

            <div className="header-meta">
                <div className="header-btn d-none d-md-block">
                    <a href="login-register.html" className="btn btn-primary">Buy Ticket Now</a>
                </div>


                {/* <!-- Header Toggle Start --> */}
                <div className="header-toggle d-lg-none">
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                {/* <!-- Header Toggle End --> */}

            </div>
            {/* <!-- Header Meta End --> */}

        </div>

    </div>
</div>
{/* <!-- Header Middle End --> */}

</div>
{/* <!-- Header End --> */}

{/* <!-- Mini Cart Start --> */}
<div className="off-canvas">
<div className="icon-close"></div>

{/* <!-- Mini Cart Box Start --> */}
<div className="meeta-mini-cart-box">

    <div className="mini-cart-items">

        <div className="mini-cart-item">
            <div className="mini-cart-item-image">
                <a href="#index-2.html"><img src="assets/images/cart/cart-1.jpg" alt="Cart" /></a>
            </div>
            <div className="mini-cart-item-content">
                <h4 className="mini-cart-title"><a href="index-2.html">Virtual Event with Protected Content and Hidden Livestream </a></h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
            </div>
            <button className="btn-close"></button>
        </div>

        <div className="mini-cart-item">
            <div className="mini-cart-item-image">
                <a href="index-2.html"><img src="assets/images/cart/cart-2.jpg" alt="Cart" /></a>
            </div>
            <div className="mini-cart-item-content">
                <h4 className="mini-cart-title"><a href="index-2.html">Virtual Event with Protected Content and Hidden Livestream </a></h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
            </div>
            <button className="btn-close"></button>
        </div>

        <div className="mini-cart-item">
            <div className="mini-cart-item-image">
                <a href="index-2.html"><img src="assets/images/cart/cart-3.jpg" alt="Cart" /></a>
            </div>
            <div className="mini-cart-item-content">
                <h4 className="mini-cart-title"><a href="index-2.html">Virtual Event with Protected Content and Hidden Livestream </a></h4>
                <p className="mini-cart-quantity">1 × $19.99</p>
            </div>
            <button className="btn-close"></button>
        </div>

    </div>

    <div className="mini-cart-sub-total">
        <p><strong>Subtotal:</strong> <span className="mini-cart-amount">$99.97</span></p>
    </div>
    <div className="mini-cart-sub-btn">
        <a className="btn btn-primary" href="index-2.html">View cart</a>
        <a className="btn btn-white" href="index-2.html">Checkout</a>
    </div>
</div>
{/* <!-- Mini Cart Box End --> */}

</div>
{/* <!-- Mini Cart End --> */}


{/* <!-- Offcanvas Start--> */}
<div className="offcanvas offcanvas-start" id="offcanvasExample">
<div className="offcanvas-header">
    {/* <!-- Offcanvas Logo Start --> */}
    <div className="offcanvas-logo">
        <a href="index.html"><img src="assets/images/logo-4.png" alt="" /></a>
    </div>
    {/* <!-- Offcanvas Logo End --> */}
    <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="flaticon-close"></i></button>
</div>

{/* <!-- Offcanvas Body Start --> */}
<div className="offcanvas-body">
    <div className="offcanvas-menu offcanvas-menu-2">
        <ul className="main-menu">
            <li className="active-menu"><a href="index-2.html">Home</a>
                <ul className="sub-menu">
                    <li><a href="index.html">Home 01</a></li>
                    <li><a className="active" href="index-2.html">Home 02</a></li>
                    <li><a href="index-3.html">Home 03</a></li>
                    <li><a href="index-4.html">Home 04</a></li>
                    <li><a href="index-5.html">Home 05</a></li>
                    <li><a href="index-6.html">Home 06</a></li>
                </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="index-2.html">Pages</a>
                <ul className="sub-menu">
                    <li><a href="speaker-one.html">Speakers 01</a></li>
                    <li><a href="speaker-two.html">Speakers 02</a></li>
                    <li><a href="speaker-single.html">Speaker Single</a></li>
                    <li><a href="event-list.html">Event List</a></li>
                    <li><a href="event-single.html">Event Single</a></li>
                    <li><a href="schedule.html">Event Schedule</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="price.html">Pricing</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                    <li><a href="login-register.html">Login Register</a></li>
                </ul>
            </li>
            <li><a href="index-2.html">Blog</a>
                <ul className="sub-menu">
                    <li><a href="blog.html">Blog Grid</a></li>
                    <li><a href="blog-standard.html">Latest News</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</div>
{/* <!-- Offcanvas Body End --> */}
</div>
{/* <!-- Offcanvas End --> */}
    </Fragment>
  )
}

