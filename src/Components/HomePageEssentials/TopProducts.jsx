import React from 'react';
import './HomePageEssentials.css'
import { Tab, Tabs } from 'react-bootstrap';
import MenTopProducts from './MenTopProducts';
import WomenTopProduct from './WomenTopProduct';
import JewelleryTopProducts from './JewelleryTopProducts';

const TopProducts = () => {
    return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="men" title="Men">
            <MenTopProducts />
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