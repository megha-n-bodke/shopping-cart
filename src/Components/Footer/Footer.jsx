import React from 'react';
import { FiPhone, } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { FaRoute } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import OurJourney from '../../pages/journey/OurJourney';

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <withRouter>
            <div className="footerContainer">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-3 col-sm-12">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 shadow p-3 mb-5 bg-white rounded">
                            <h4>Contact Us</h4>
                            <ul style={{ listStyleType: "none" }}>
                                <li><FiPhone /> Phone: +91 123456789</li>
                                <li><GoMail />&nbsp; Email: abcd@mail.com</li>
                                <li><GrLocation />&nbsp; Email: abcd@mail.com</li>

                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12 shadow p-3 mb-5 bg-white rounded ">
                            <h4>Important Link</h4>
                            <ul className="menuLink" style={{ listStyleType: "none" }}>
                                <li ><IoShirtOutline /> Men's Clothing</li>
                                <li><GiLargeDress /> Womens Clothing</li>
                                <li><FaRoute /><Link className="nodec" to="/journey">Our Journey</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12 shadow p-3 mb-5 bg-white rounded">
                            <h4>Follow Us</h4>
                            <ul style={{ listStyleType: "none" }}>
                                <li><ImFacebook2 className="fbIcon" /> Username</li>
                                <li><AiOutlineInstagram className="instaIcon" />Username</li>
                                <li ><FaTwitterSquare className="twitterIcon" />Username</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </withRouter>
    )
}


export default Footer;