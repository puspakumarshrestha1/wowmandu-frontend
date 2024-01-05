import React, { useState } from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Link } from "react-router-dom";
import All from '../All/All'
import InternationalChild from '../InternationalChild/InternationalChild'
import Dashboard from '../Dashboard/Dashboard'
import Admin from '../Admin/Admin'
import Change from './../Change/Change';
import Forget from './../Forget/Forget';
import Reset from './../Reset/Reset';
import Update from '../Update/Update'
import Test from '../Test'



function Header() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-6 col-xs-6 icon-and-burger">
                                <div className="social-icons">
                                    <ul className='d-flex'>
                                        <li className='me-2 fb'><a href="https://www.facebook.com/wowmandu"><FontAwesomeIcon className='icons' icon={faFacebookF} /></a></li>
                                        <li className='mx-2 inst'><a href=""><FontAwesomeIcon className='icons' icon={faInstagram} /></a></li>
                                        <li className='mx-2 twt'><a href=""><FontAwesomeIcon className='icons' icon={faXTwitter} /></a></li>
                                        <li className='mx-2 gg'><a href=""><FontAwesomeIcon className='icons' icon={faGoogle} /></a></li>
                                        <li className='ms-2 lkd'><a href=""><FontAwesomeIcon className='icons' icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                                {/* burger icon  */}
                                <div className="hamburger d-none" onClick={handleNav}>
                                    <i className="fa-solid fa-bars">burger</i>
                                </div>
                                {/* burger icon  */}
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-6">
                                <div className="logo">
                                    <img className='w-100' src="\logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4 call-btn">
                                <div className="call text-end">
                                    <div className="call-icon me-2">
                                        <FontAwesomeIcon className='icons' icon={faPhone} />
                                    </div>
                                    <p><a href="tel:+977 9808530440">+977 9808530440</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="navbar text-center">
                            {/* //desktop */}
                            <div className="d-flex mx-auto pc-nav">
                                <li className='me-4'><Link to="/"><a href="">Home</a></Link></li>
                                <li className='mx-4'>
                                    <div className="dropdown">
                                        <button className="dropbtn">Category</button>
                                        <div className="dropdown-content">
                                            <a href="#sports">Sports</a>
                                            <a href="#national">National</a>
                                            <a href="#politics">Politics</a>
                                            <a href="#international">International</a>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-4'><a href="">Archive</a></li>
                                <li className='mx-4'><a href="#blog">Blog</a></li>
                                <li className='mx-4'><a href="#trending">Latest news</a></li>
                                <li className='me-4'><a href="">Contact us</a></li>
                            </div>
                            {/* desktop  */}

                            {/* mobile  */}
                            <div onClick={handleNav} className={nav ? "d-flex mx-auto inside-link" : "d-none"}>
                                <li className='me-4'><Link to="/"><a href="">Home</a></Link></li>
                                <li className='mx-4'>
                                    <div className="dropdown">
                                        <button className="dropbtn">Category</button>
                                        <div className="dropdown-content">
                                            <a href="#sports">Sports</a>
                                            <a href="#national">National</a>
                                            <a href="#politics">Politics</a>
                                            <a href="#international">International</a>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-4'><a href="">Archive</a></li>
                                <li className='mx-4'><a href="#blog">Blog</a></li>
                                <li className='mx-4'><a href="#trending">Latest news</a></li>
                                <li className='me-4'><a href="">Contact us</a></li>
                                <div className="call text-end d-flex">
                                    <div className="call-icon me-2">
                                        <FontAwesomeIcon className='icons' icon={faPhone} />
                                    </div>
                                    <p><a href="tel:+977 9808530440">+977 9808530440</a></p>
                                </div>
                            </div>
                            {/* mobile  */}
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<All />} />
                {/* <Route path="/interChild" element={<InternationalChild />} /> */}
                <Route path="/admin-login" element={<Admin />} />
                <Route path="/admin-change-password" element={<Change />} />
                <Route path="/send-reset-email" element={<Forget />} />
                <Route path="/reset-password/:id/:token" element={<Reset />} />
                <Route path="/admin-dashboard-wowmandu" element={<Dashboard />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/find/:id" element={<InternationalChild />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </>
    )
}

export default Header