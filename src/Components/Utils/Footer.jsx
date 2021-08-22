import React from 'react';
import { FiPhone,  } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { GiLargeDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";





const Footer = () => {
    return (
       <div>
           <div className = "container">
                      <div className = "row">
                          <div className = "col-md-3 col-sm-12">
                              <h4>Contact Us</h4>
                              <ul>
                                  <li><FiPhone/>Phone: +91 123456789</li>
                                  <li><GoMail/>&nbsp; Email: abcd@mail.com</li>
                                  <li><GrLocation/>&nbsp; Email: abcd@mail.com</li>

                              </ul>
                          </div>
                          <div className = "col-md-3 col-sm-12">
                              <h4>Important Link</h4>
                              <ul>
                                  <li><IoShirtOutline/>Men's Clothing</li>
                                  <li><GiLargeDress/>Womens Clothing</li>
                                  <li>Our Journey</li>

                              </ul>
                          </div>

                          <div className = "col-md-3 col-sm-12">
                              <h4>Follow Us</h4>
                              <ul>
                                  <li><ImFacebook2/>Username</li>
                                  <li>Username</li>
                                  <li>Username</li>

                              </ul>
                          </div>

                      </div>
                      </div>

                      </div>
    )
}


export default Footer;