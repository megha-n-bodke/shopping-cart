import React from 'react';
import { FcServices, FcClock } from "react-icons/fc";
import { IoBulbOutline } from "react-icons/io5";
import { FaChartBar, FaSearchengin } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import './journey.css'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { Col, Row } from 'react-bootstrap';



const Card = () => (
    <div>
        <h4>Lorem ipsum</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
        </p>
    </div>
);

const OurJourney = () => {
    return <>


    <Row>
    <div className="col-md-1"></div>
    <div className="col-md-5 text-center">
    <Row>
            <Col xs={6} md={3}>
            <div><FaChartBar className="icons" /></div>
            </Col>
            <Col xs={6} md={3}>
            <div><FaSearchengin className="icons" /></div>
        
            </Col>
            <Col xs={6} md={3}>
            <div ><FcServices className="icons" /></div>
            </Col>
            <Col xs={6} md={3}>
            <div><FcClock className="icons" /></div>
            </Col>
        </Row>

    </div>
    

    <div className="col-md-5 text-center">
        <Row>
            <Col xs={6} md={3}>
            <div><IoBulbOutline className="icons" /></div>
            </Col>
            <Col xs={6} md={3}>
            <div><GiArcheryTarget className="icons" /></div>
            </Col>
            <Col xs={6} md={3}>
            <div><BsBarChartFill className="icons" /></div>
            </Col>
            <Col xs={6} md={3}>
        &nbsp;    </Col>
        </Row>
      </div>
      <div className="col-md-1"></div>
  </Row>

        {/* <div className="iconContainer">
            <div><FaChartBar className="icons" /></div>
            <div><FaSearchengin className="icons" /></div>
            <div ><FcServices className="icons" /></div>
            <div><FcClock className="icons" /></div>
            <div><IoBulbOutline className="icons" /></div>
            <div><GiArcheryTarget className="icons" /></div>
            <div><BsBarChartFill className="icons" /></div>
        </div> */}

        <Row>
        <div className="col-md-1"></div>
        <div className="col-md-10">
            <Row>
            <Col xs={10} md={12}>
            

        <ul className="breadcrumb">
            <li className="first"><a className="first">2015</a></li>
            <li className="second"><a>2016</a></li>
            <li className="thirdBox"><a>2017</a></li>
            <li className="fourthBox"><a>2018</a></li>
            <li className="fifthBox"><a>2019</a></li>
            <li className="sixthBox"><a>2020</a></li>
            <li className="seventhBox"><a>2021</a></li>
        </ul>
        </Col>
            </Row>        
        </div>
        <div className="col-md-1"></div>
        </Row>


        <Row>
    <div className="col-md-1"></div>
    <div className="col-md-5 text-center">
    <Row>
            <Col xs={6} md={3}>
            
            <div class="vl"></div>
            </Col>
            <Col xs={6} md={3}>
            <div className=" secondBox commonProp">
                <Card />
            </div>
            </Col>
            <Col xs={6} md={3}>
            <div class="vl2"></div>
            </Col>
            <Col xs={6} md={3}>
           
            <div className="fourthBox commonProp">
                <Card />
            </div>
             </Col>
        </Row>

    </div>
    

    <div className="col-md-5 text-center">
        <Row>
            <Col xs={6} md={3}>
            <div class="vl3"></div>
            </Col>
            <Col xs={6} md={3}>
            <div className="sixthBox commonProp">
                <Card />
            </div>
            </Col>
            <Col xs={6} md={3}>
            <div class="vl4"></div> </Col>
            <Col xs={6} md={3}>
        &nbsp;    </Col>
        </Row>
      </div>
      <div className="col-md-1"></div>
  </Row>




  <Row>
    <div className="col-md-1"></div>
    <div className="col-md-5 text-center">
    <Row>
            <Col xs={6} md={3}>
            <div className="firstBox commonProp">
                <Card />
            </div>
            </Col>
            <Col xs={6} md={3}>
            &nbsp;</Col>
            <Col xs={6} md={3}>
            <div className="thirdBox commonProp">
                <Card />
            </div>
            </Col>
            <Col xs={6} md={3}>
            &nbsp;
             </Col>
        </Row>

    </div>
    

    <div className="col-md-5 text-center">
        <Row>
            <Col xs={6} md={3}>
            <div className="fifthBox commonProp">
                <Card />
            </div>
            </Col>
            <Col xs={6} md={3}>
            &nbsp;
            </Col>
            <Col xs={6} md={3}>
            <div className="seventhBox commonProp">
                <Card />
            </div>   </Col>
            <Col xs={6} md={3}>
            <div>&nbsp;</div>
            </Col>
            
        </Row>
      </div>
      <div className="col-md-1"></div>
  </Row>



    </>;
}



export default OurJourney;