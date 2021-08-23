import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import './card.css'


const TopProductCard = ({ title, price, image }) => {
    return (
        <div className="cardContainer">
            <img src={image} className="productImage"></img>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
}

export default TopProductCard;