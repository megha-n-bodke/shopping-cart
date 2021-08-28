import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, DropdownButton, Image, Row } from 'react-bootstrap';
import { addToCart, deleteFromCart, placeOrder, updateToCart } from '../../pages/my-cart/MyCartAction';
import { useHistory } from 'react-router';
import "./cart.css";


const CartProductList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    let cartItems = products.filter((product) => {
        return cart[product.id] !== undefined;
    });
    const currency = '₹';
    const cartItemList = cartItems.map((product, index) => {
        return (
            <div key={index}>
                {/* xs, sm, md*/}
                <Card className="top-buffer">
                    <Row>
                        <Col md={3}>
                            <Card.Img src={product.image}/>
                        </Col>
                        <Col md={9}>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description.substring(0, 50)}
                                </Card.Text>

                                <Row className="justify-content-md-start">
                                    <Col xs lg="3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="S">Size : S</option>
                                            <option value="M">Size : M</option>
                                            <option value="L">Size : L</option>
                                            <option value="XL">Size : XL</option>
                                        </select>
                                    </Col>
                                    <Col xs lg="3">
                                        <ButtonGroup className="me-2">
                                            <Col>
                                                <Button variant={'light'}
                                                    aria-label="Increment value"
                                                    onClick={() => dispatch(updateToCart(product.id, cart[product.id] + 1))}
                                                >+</Button>
                                            </Col>
                                            <Col>
                                                <Button disabled={true} variant={'light'}>{cart[product.id]}</Button>
                                            </Col>
                                            <Col>
                                                <Button variant={'light'}
                                                    aria-label="Decrement value"
                                                    onClick={() => dispatch(updateToCart(product.id, cart[product.id] - 1))}
                                                >-</Button>
                                            </Col>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <div>{currency}{product.price}</div>
                                    </Col>
                                    <Col className="justify-content-end d-flex">
                                                <Button className="btn" variant="light"
                                                        onClick={() => dispatch(deleteFromCart(product.id))}>Remove</Button>
                                                <Button className="btn"  variant="warning" onClick={() => {
                                                    dispatch(placeOrder());
                                                    history.push('/products');
                                                }}>Place Order</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    });
    return (
        <div>
            {cartItemList}
        </div>
    );
};

export default CartProductList;