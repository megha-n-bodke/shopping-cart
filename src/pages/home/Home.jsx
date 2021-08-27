import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import HighQuality from '../../Components/HomePageEssentials/HighQuality';
import OurAdvantages from '../../Components/HomePageEssentials/OurAdvantages';
import TopProducts from '../../Components/HomePageEssentials/TopProducts';
import { useEffect } from 'react';
import axios from 'axios';
import ImageSlider from '../../Components/HomePageEssentials/ImageSlider';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>
        <ImageSlider></ImageSlider>
        <OurAdvantages></OurAdvantages>
        <HighQuality></HighQuality>
        <Row>
        <Col className="col-md-2">&nbsp;</Col>
        </Row>
        <Row>
        <Col className="col-md-2"></Col>
        <Col className="col-md-8">
        <TopProducts></TopProducts>
        </Col>
        <Col className="col-md-2"></Col>
        </Row>
        
        </>
    );
}

export default Home;