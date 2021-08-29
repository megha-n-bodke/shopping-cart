import React from 'react';
import PriceDetails from '../../Components/PriceDetails/PriceDetails';
import CartProductList from '../../Components/CartProductList/CartProductList';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

const MyCart = () => {
    const cart = useSelector(state => state.cart);
    if (Object.keys(cart).length === 0 && cart.constructor === Object) {
        return (
            <Container>
                <h2 className="text-center">Your cart is empty!!!</h2>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <CartProductList></CartProductList>
                    </Col>
                    <Col md={3}>
                        <PriceDetails></PriceDetails>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default MyCart;