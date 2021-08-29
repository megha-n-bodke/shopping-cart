import React from 'react';
import PriceDetails from '../../Components/PriceDetails/PriceDetails';
import CartProductList from '../../Components/CartProductList/CartProductList';
import { useSelector } from 'react-redux';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'; 
import Popper from 'popper.js';

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