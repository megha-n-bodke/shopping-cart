import React from 'react'
import{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Col, Row } from 'react-bootstrap';
import Category from '../Category/Category';
import CustomerSupport from '../CustomerSupport/CustomerSupport';
import { useHistory } from 'react-router-dom';
import SortByAction from '../SortBy/SortByAction';
import { addToCart } from '../../pages/my-cart/MyCartAction';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../pages/my-wish-list/MyWishListAction';
import { loadProducts } from './ProductListAction';
import { setupProductsPagination } from './ProductPaginatorAction';
import "./product.css";
import { BsHeart } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


const ProductDetails = props =>{
    const product = props.location.state.product;
    const [comments, setComments] = useState();

    const dispatch = useDispatch();
    const history = useHistory();

    let strp = "";
    let resp = "";
    const url = "https://fakestoreapi.com/products/"+product.id;
    console.log(url);
    useEffect(() => {
        axios.get(url).then(resp => {
                console.log(resp.data);
                setComments(resp.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
           <>
           { comments !== undefined ?
           <Row>

            <Col className="col-md-1"></Col>
            <Col className="col-md-2 bg-light">
                <Category></Category>
                <CustomerSupport></CustomerSupport>
            </Col>
            <Col className="col-md-8">
            
           <Row>
                <Col className="col-md-2">
                    <img src={comments.image} className="imgresp" alt="a"/>
                </Col>
                <Col className="col-md-9">
                    <Row>
                       <Col className="col-md-12">
                        {comments.title}<br/>
                        {comments.category}<br/>
                        {comments.price}<br/>
                        <Button onClick={() => dispatch(addToCart(product.id, 1))}>Add to Cart</Button>

                        <hr/>
                        </Col>
                    </Row>
                    <Row>
                       <Col className="col-md-12">
                       Product Details 
                       <hr/>
                        </Col>
                    </Row>
                    <Row>
                       <Col className="col-md-12">
                        Offers
                        </Col>
                    </Row>
                </Col>
                <Col className="col-md-1"></Col>
            </Row>
            </Col>
            </Row>
            : null
           }
           </>
    )
};

export default ProductDetails