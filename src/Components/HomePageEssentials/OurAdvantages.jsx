import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './HomePageEssentials.css'
const OurAdvantages = () => {
    return (
        <>
            <Row>
                <Col className="col-md-2"></Col>
                <Col className="col-md-8">
                    <div className="AdvantagesText text-center">
                        <h1>Our Advantages</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed velit ullamcorper, venenatis ex sed,  In interdum condimentum nibh, nec dapibus massa placerat at. Mauris vel leo leo. Curabitur id lacinia tellus, nec tempus diam. Sed rhoncus vulputate finibus. Phasellus et egestas turpis. Nullam molestie diam sed lorem sagittis, mattis dignissim augue sagittis
                        </p>
                    </div>
                </Col>
                <Col className="col-md-2"></Col>
            </Row>
        </>
    );
}


export default OurAdvantages;