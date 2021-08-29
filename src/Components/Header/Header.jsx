import React, {lazy,Suspense} from 'react';
import './Utils.css'
import {useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineUserSwitch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    Link,
    withRouter
} from "react-router-dom";
import { Badge, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';


//Lazy loading
const Albums = lazy(() =>
{
   return new Promise(resolve => setTimeout(resolve, 2 * 1000))
  .then(() => import('../../pages/albums/Albums')) });

  const Products = lazy(() =>
{
   return new Promise(resolve => setTimeout(resolve, 1 * 1000))
  .then(() => import('../../pages/products/Products')) });


    const Header = () => {
    const [hmbgicon, sethmbgIcon] = useState(false);
    let headertype = 'topnav';
    const [toggleCls, settoggleCls] = useState(true);
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    let loginMenu = [];
    if (user.token !== null) {
        loginMenu.push(
            // TODO
                <Dropdown>
            <Dropdown.Toggle variant="light">
                <AiOutlineUser></AiOutlineUser>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Link to="/my-cart">My Cart</Link>
                <Link to="/my-wish-list">My Wishlist</Link>
                <Link to="/logout">Logout</Link>
                </Dropdown.Menu>
            </Dropdown>
        );
    } else {
        loginMenu.push(
            // TODO
            <Dropdown>
                <Dropdown.Toggle variant="light">
                    <AiOutlineUserSwitch></AiOutlineUserSwitch>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Link to="/login">Login</Link>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <>
        <Suspense fallback = {<div>Loading....please wait</div>}>
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
                            {/* TODO Fix colour and position */}
                            <Badge bg="danger">
                                {Object.keys(cart).length}
                            </Badge>
                            <AiOutlineShoppingCart>
                            </AiOutlineShoppingCart>
                        </Link>
                        <Link> {loginMenu} </Link>
                        <a className="icon" onClick={() => {
                            settoggleCls(!toggleCls);
                        }}>
                            <i className="fa fa-bars"></i>
                            <GiHamburgerMenu/>
                        </a>
                    </div>
                </div>
            </withRouter>
            </Suspense>
        </>
    );
};


export default Header;