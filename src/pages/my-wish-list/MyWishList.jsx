import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import { Button, CloseButton, Image } from 'react-bootstrap';
import { addToCart, deleteFromCart, placeOrder } from '../my-cart/MyCartAction';
import { deleteFromWishList } from './MyWishListAction';

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

            <div key={index}>
                <CloseButton onClick={() => dispatch(deleteFromWishList(product.id))}/>
                <Image src={product.image} />
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{currency}{product.price}</div>
                <Button onClick={() => {dispatch(addToCart(product.id, 1));
                    dispatch(deleteFromWishList(product.id))}}>Add to cart</Button>
            </div>
        );
    });

    return (
        <div>
            <Category/>
            <CustomerSupport/>
            <h3>My wishlist</h3>
            {wishlist.length} Items
            {wishlistItemList}
        </div>
    )
}

export default MyWishList;