import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Table } from 'react-bootstrap';

const PriceDetails = () => {
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    let cartItems = products.filter((product) => {
         return cart[product.id] !== undefined;
    });
    let totalCartValue = 0;
    cartItems.forEach(element => totalCartValue += (element.price * cart[element.id] ));
    // TODO Get rid of all magic numbers
    const gst = 10;
    let discount = totalCartValue < 500 ? 0 : 2;
    let discountedPrice = discount === 0? totalCartValue : totalCartValue - totalCartValue * 0.02;
    discountedPrice = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
    // Math.round(((totalCartValue - totalCartValue * 0.02) + Number.EPSILON) * 100) / 100
    let amountToPay = discountedPrice + discountedPrice * 0.10;
    amountToPay = Math.round((amountToPay + Number.EPSILON) * 100) / 100;
    let savings = totalCartValue - discountedPrice > 0 ? totalCartValue - discountedPrice :  0;
    savings = Math.round((savings + Number.EPSILON) * 100) / 100;

    return (
        <Card>
            <Table borderless responsive>
                <thead className="justify-content-md-start">
                <tr className="border-bottom">
                    <p>Price Details</p>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Price ({Object.keys(cart).length} items)</td>
                    <td>{totalCartValue}</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{discount}%</td>
                </tr>
                <tr>
                    <td>GST</td>
                    <td>{gst}%</td>
                </tr>
                <tr className="dashed-border-bottom">
                    <td>Delivery charges</td>
                    <td>Free</td>
                </tr>
                <tr className="dashed-border-bottom">
                    <td>Total Amount</td>
                    <td>{amountToPay}</td>
                </tr>
                <tr>
                    <td>You will save {savings} on this order</td>
                </tr>
                </tbody>
            </Table>
    </Card>
    )
}

export default PriceDetails;