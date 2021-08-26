import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import { addToCart, deleteFromCart, placeOrder } from '../../pages/my-cart/MyCartAction';
import { addToWishList } from '../../pages/my-wish-list/MyWishListAction';

const CartProductList = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    let cartItems = products.filter((product) => {
        return cart[product.id] !== undefined;
    });
    const currency = "₹";
    const cartItemList = cartItems.map((product, index) => {
        return (
            <div key={index}>
                <Image src={product.image} />
                <div>{product.title}</div>
                <div>{product.description}</div>
                {/* TODO */}
                {/*SIZE AND QUANTITY*/}
                <p>{cart[product.id]}</p>
                <div>{currency}{product.price}</div>
                <Button onClick={() => dispatch(deleteFromCart(product.id))}>Remove</Button>
                {/* TODO REDIRECT TO SUCCESS PAGE */}
                <Button onClick={() => dispatch(placeOrder())}>Place Order</Button>
            </div>
        );
    });
    return (
        <div>
            {cartItemList}
        </div>
    )
}

export default CartProductList;