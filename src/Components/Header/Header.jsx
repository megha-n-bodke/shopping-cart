import React from 'react';
import './Utils.css'
import { useState } from 'react';
import Home from '../../pages/home/Home';
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Products from '../../pages/products/Products';
import Albums from '../../pages/albums/Albums';
import MyCart from '../../pages/my-cart/MyCart';
import LoginPage from '../Login/LoginPage';
import MyWishList from '../../pages/my-wish-list/MyWishList';
import Blog from '../../pages/blog/Blog';
import OurJourney from '../../pages/journey/OurJourney';
import blogdetails from '../../pages/blog/Blogdetails';
import Blogdetails from '../../pages/blog/Blogdetails';
import ProductDetails from '../ProductList/ProductDetails';


const Header = () => {
    const [hmbgicon, sethmbgIcon] = useState(false);
    let headertype = "topnav";
    const [toggleCls, settoggleCls] = useState(true);

      
    return (
        <>
            <withRouter>

                <div className={toggleCls === true ? "topnav" : "topnav responsive"} id="myTopnav">
                    <Link to="/"><h4><span class="badge badge-secondary" style={{ color: "black", backgroundColor: "#04AA6D" }}>Logo</span></h4></Link>
                    <div className="topnav-right">
                        <Link to="/" className="active">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/albums">Album</Link>
                        <Link to="/blog">Blog</Link>
                        {/* <Link to="/journey">Our Journey</Link> */}
                        <Link to="/my-cart">
                            <AiOutlineShoppingCart />
                        </Link>
                        <Link to="/my-wish-list">Wishlist</Link>
                        <a className="icon" onClick={() => { settoggleCls(!toggleCls) }}>
                            <i className="fa fa-bars"></i>
                            <GiHamburgerMenu />
                        </a>

                    </div>

                </div>

            </withRouter>
        </>
    );
}


export default Header;