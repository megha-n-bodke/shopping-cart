import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import './card.css'
import { FaFontAwesome } from 'react-icons/fa';
import { BiRupee } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const TopProductCard = ({ title, price, image }) => {
    const [togglePassword, settogglePassword] = useState(true);
     
    return (
        

         <div className="col-md-3 border" mr={5} style={{marginRight:"25px", width: "18rem", padding: "10px"}}>
 <div className="col-md-12">
         <img src={image} className="card-img-top imgresponsive" alt="..."></img>
           <div className="card-body">
           <Row>
           <Col className="col-md-10">
               <h6 className="text-truncate">{title}</h6> 
               </Col>
                      <Col className="col-md-2">
               {togglePassword ? <BsHeart  onClick={()=>{settogglePassword(!togglePassword) }} type="button"></BsHeart> 
                      : <FcLike  onClick={()=>{settogglePassword(!togglePassword) }} type="button"></FcLike>}
                      </Col>
</Row>        <p className="card-text"><BiRupee></BiRupee> {price}</p>
       </div>
           </div>
       </div>
       
    );
}

export default TopProductCard;