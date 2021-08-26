import React from 'react';
import './Utils.css'
import Home from '../../pages/home/Home';
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
    return (
        <>
            <Router>
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
                        <li><AiOutlineShoppingCart /></li>
                        <li data-toggle="popover" title="Login" title="myCart" data-content="megha bodke"><HiOutlineUser />
                        </li>
                    </ul>
                </div>
            </div>

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