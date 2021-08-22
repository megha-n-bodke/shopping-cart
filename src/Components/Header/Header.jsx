import React from 'react';
import './Utils.css'
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <div className="HeaderContainer">
                <div>Logo</div>
                <div className="MenuLink">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>Albums</li>
                        <li>Blogs</li>
                        <li><AiOutlineShoppingCart /></li>
                        <li data-toggle="popover" title="Login" data-content="megha bodke"><HiOutlineUser /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Header;