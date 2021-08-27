import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, DropdownButton, Image } from 'react-bootstrap';
import { addToCart, deleteFromCart, placeOrder, updateToCart } from '../../pages/my-cart/MyCartAction';
import { useHistory } from 'react-router';


const CartProductList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
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
                {/* TODO Dropdown + Items to zero case */}
                {/*<DropdownButton id="dropdown-basic-button" title="Dropdown button">*/}
                {/*    <Dropdown.Item eventKey="1">Small</Dropdown.Item>*/}
                {/*    <Dropdown.Item eventKey="2">Medium</Dropdown.Item>*/}
                {/*    <Dropdown.Item eventKey="3">Large</Dropdown.Item>*/}
                {/*    <Dropdown.Item eventKey="4">Extra Large</Dropdown.Item>*/}
                {/*</DropdownButton>*/}
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(updateToCart(product.id, cart[product.id] + 1))}
                    >+</button>
                    <span>{cart[product.id]}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(updateToCart(product.id, cart[product.id] - 1))}
                    >-</button>
                </div>
                <div>{currency}{product.price}</div>
                <Button onClick={() => dispatch(deleteFromCart(product.id))}>Remove</Button>
                {/* Redirecting to products page once order is placed! */}
                <Button onClick={() => {dispatch(placeOrder()); history.push('/products');}}>Place Order</Button>
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