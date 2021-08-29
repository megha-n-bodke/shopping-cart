import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { addToCart } from '../../pages/my-cart/MyCartAction';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCardListView = ({product: product}) => {
    const dispatch = useDispatch();
    const currency = "₹";
    return (
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
                        <hr/>
                        <Row>
                            <Col>
                                <div>{currency}{product.price}</div>
                            </Col>
                            <Col className="justify-content-end d-flex">
                                <Button className="btn"  variant="warning" onClick={() => dispatch(addToCart(product.id, 1))}>
                                    Add to Cart</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ProductCardListView;
