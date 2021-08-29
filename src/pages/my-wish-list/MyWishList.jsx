import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import { Button, CloseButton, Col, Image, Row } from 'react-bootstrap';
import { addToCart, deleteFromCart, placeOrder } from '../my-cart/MyCartAction';
import { deleteFromWishList } from './MyWishListAction';
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./myWishlist.css";

const MyWishList = () => {
    const dispatch = useDispatch();
    const currency = "₹";
    const wishlist = useSelector(state => state.wishlist);
    const products = useSelector(state => state.products);
    let wishlistItems = products.filter((product) => {
        return wishlist.find(element => element === product.id) !== undefined;
    });
    const wishlistItemList = wishlistItems.map((product, index) => {
        return (
            <div className="col-sm-3" key={index}>
                <div className="col-sm-12 shadow-lg p-3 mb-5 bg-white rounded ">
                    <AiOutlineCloseCircle className="expand-position-for-picture" onClick={() => dispatch(deleteFromWishList(product.id))} />
                    <Image className="imgresponsive" src={product.image} />
                    <div className="text-truncate">{product.title}</div>
                    <div className="text-truncate">{product.description}</div>
                    <div>{currency}{product.price}</div>
                    <Button className="btn btn-light" onClick={() => {
                        dispatch(addToCart(product.id, 1));
                        dispatch(deleteFromWishList(product.id))
                    }}>Add to cart</Button>
                </div>
            </div>
        );
    });

    return (
        <Row>
            <Col className="col-md-1"></Col>
            <Col className="col-md-2 bg-light">
                <Category />
                <CustomerSupport />
            </Col>
            <Col className="col-md-8">
                <h3>My wishlist {wishlistItemList.length} items</h3>
                <Row>
                    {wishlistItemList}
                </Row>
            </Col>
            <Col className="col-md-1"></Col>
        </Row>
    )
}

export default MyWishList;