import React from 'react';
import PriceDetails from '../../Components/PriceDetails/PriceDetails';
import CartProductList from '../../Components/CartProductList/CartProductList';
import { useSelector } from 'react-redux';

const MyCart = () => {
    const cart = useSelector(state => state.cart);
    if (Object.keys(cart).length === 0 && cart.constructor === Object) {
        return (
            <div>
                <p>Your cart is empty!!!</p>
            </div>
        )
    } else {
        return (
            <div>
                <CartProductList></CartProductList>
                <PriceDetails></PriceDetails>
            </div>
        )
    }
}

export default MyCart;