import React from 'react';
import { Row } from 'react-bootstrap';
import './HomePageEssentials.css'


const HighQuality = () => {
    return (
        <Row className="HighqualityContainer Display BgColor">
        
            <div className="col-md-4 AdvantagesText  text-center">
            <Row>
            <div className="col-md-2"></div>

            <div className="col-md-8">
                <div className="Circle"></div>
                <div>
                <h4>High Quality</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed velit ullamcorper, venenatis ex sed</p>
                </div>
            </div>

            <div className="col-md-2"></div>
            </Row>
            </div>
            <div className="col-md-4 AdvantagesText  text-center">
            <Row>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                 <div className="Circle"></div>
                <div>
                <h4>High Quality</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed velit ullamcorper, venenatis ex sed</p>
                </div>
                </div>
                <div className="col-md-2"></div>
            </Row>
            </div>
            
            <div className="col-md-4 AdvantagesText  text-center">
            <Row>
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
                <div className="Circle"></div>
                <div>
                    <h4>High Quality</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed velit ullamcorper, venenatis ex sed</p>
                </div>
                </div>
            
                <div className="col-md-2"></div>
            </Row>         
            </div>
            
    </Row>

    );
}


export default HighQuality;