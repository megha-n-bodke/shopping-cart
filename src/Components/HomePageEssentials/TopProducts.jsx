import React from 'react';
import './HomePageEssentials.css'
import { Row, Tab, Tabs } from 'react-bootstrap';
import MenTopProducts from './MenTopProducts';
import WomenTopProduct from './WomenTopProduct';
import JewelleryTopProducts from './JewelleryTopProducts';

const TopProducts = () => {
    return (
        <Tabs defaultActiveKey="men" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="men" title="Men">
                <Row>
                    <MenTopProducts />
                </Row>
            </Tab>
            <Tab eventKey="women" title="Women">
                <WomenTopProduct />
            </Tab>
            <Tab eventKey="jewellery" title="Jwellery" >
                <JewelleryTopProducts />
            </Tab>
        </Tabs>
    )
}

export default TopProducts;