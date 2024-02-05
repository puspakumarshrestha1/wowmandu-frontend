import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-12">
                            <div className="footer-logo pe-3">
                                <img className='w-100' src="logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-contact text-center pe-3">
                                <h5><span className='me-2'><FontAwesomeIcon icon={faPhone} /></span>+977 01234444</h5>
                                <h5><span className='me-2'><FontAwesomeIcon icon={faEnvelope} /></span>wowmandu@gmail.com</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-icon text-center pe-3">
                                <ul className='d-flex justify-content-around'> 
                                    <li className='fb'><a href="https://www.facebook.com/wowmandu"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                    <li className='twt'><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                                    <li className='inst'><a href="https://twitter.com/"><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
                                    <li className='lkdn'><a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="footer-designer text-center">
                                <h5>Developed & designed by <span className=''><a href="https://webedgeinfotech.com/">WebEdge InfoTech</a></span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer