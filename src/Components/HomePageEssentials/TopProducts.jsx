import React from 'react';
import './HomePageEssentials.css'

const TopProducts = () => {
    return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
            <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
            <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            <Sonnet />
        </Tab>
    </Tabs>
    )
}

export default TopProducts;