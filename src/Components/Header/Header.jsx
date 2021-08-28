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
    Link
} from "react-router-dom";
import Products from '../../pages/products/Products';
import Albums from '../../pages/albums/Albums';
import MyCart from '../../pages/my-cart/MyCart';
import LoginPage from '../Login/LoginPage';
import MyWishList from '../../pages/my-wish-list/MyWishList';
import Blog from '../../pages/blog/Blog';


const Header = () => {
    const [hmbgicon, sethmbgIcon] = useState(false);
    let headertype = "topnav";
    const [toggleCls, settoggleCls] = useState(true);
    

    return (
        <>
                    <Router>

    <div className={toggleCls === true?"topnav":"topnav responsive"} id="myTopnav">
    <Link to="/"><h4><span class="badge badge-secondary" style={{color:"black", backgroundColor:"#04AA6D"}}>Logo</span></h4></Link>
  <div className="topnav-right">
  <Link to="/" className="active">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/albums">Album</Link>
  <Link to="/blog">Blog</Link>
  <Link to="/my-cart">
      <AiOutlineShoppingCart />
  </Link>
  <Link to="/my-wish-list">Wishlist</Link>
  <a className="icon" onClick={()=>{settoggleCls(!toggleCls)}}>
    <i className="fa fa-bars"></i>
    <GiHamburgerMenu/>
  </a>

  </div>
  
</div>

{/*                     
            <div className="headerContainer">
                <div className = "logo">Logo</div>
                <div className="menuLink">
                    <ul >
                        <li >
                            <Link className = "menu" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className = "menu" to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className = "menu" to="/albums">Album</Link>
                        </li>
                        <li>
                            <Link className = "menu" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/my-cart">
                            <AiOutlineShoppingCart />
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-wish-list">WishList</Link>
                        </li>

                        <div>
                        <a href = "#" onClick ={()=>{sethmbgIcon(!hmbgicon) }}>
                            <GiHamburgerMenu/>
                        </a>
                        
                           <p> { hmbgicon ? <Blog/>:""}</p>
                        </div>
                    </ul>
                </div>
            </div> */}

            {/* {/* <Router>
            <div className="HeaderContainer">
                <div>Logo</div>
                <div className="MenuLink">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/albums">Album</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/my-cart">
                            <AiOutlineShoppingCart />
                            </Link>
                        </li>
                        <li data-toggle="popover" title="Login" title="myCart" data-content="megha bodke"><HiOutlineUser />
                        </li>
                        {/* <div>
                        <a href = "#" onClick ={()=>{sethmbgIcon(!hmbgicon) }}>
                            <GiHamburgerMenu/>
                        </a>
                        
                           <p> { hmbgicon ? <Blog/>:""}</p>
                        </div> */}

                    {/* </ul>
                </div> */}
            {/* </div> */} 

            <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/login" component = {LoginPage} />
      <Route exact path = "/products" component = {Products} />
      <Route exact path = "/my-cart" component = {MyCart} />
      <Route exact path = "/my-wish-list" component = {MyWishList} />
      <Route exact path = "/albums" component = {Albums} />
      <Route exact path = "/blog" component = {Blog} />
        </Switch>
            </Router>
        </>
    );
}


export default Header;