import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../Components/HomePageEssentials/HomePageEssentials.css';
import './card.css';
import { FaFontAwesome } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import WishListButton from '../ProductList/WishListButton';

const TopProductCard = ({productId, title, price, image}) => {
    return (
        <div className="col-md-3 border" mr={5} style={{marginRight: '25px', width: '18rem', padding: '10px'}}>
            <div className="col-md-12">
                <img src={image} className="card-img-top imgresponsive" alt="..."></img>
                <div className="card-body">
                    <Row>
                        <Col className="col-md-9">
                            <h6 className="text-truncate">{title}</h6>
                        </Col>
                        <Col className="col-md-3">
                            <WishListButton productId={productId}></WishListButton>
                        </Col>
                    </Row>
                    <p className="card-text"><BiRupee></BiRupee> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default TopProductCard;