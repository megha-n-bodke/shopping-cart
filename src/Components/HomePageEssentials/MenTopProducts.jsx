import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import TopProductCard from './TopProductCard';
import * as products from 'react-bootstrap/ElementChildren';

const MenTopProducts = () => {
    const trackCards = products.map((product, index) => {
        return (
            <div key={index}>
                <TopProductCard/>
            </div>
        );
    });

    return (
        <div>
            {trackCards}
        </div>
    );
}

export default MenTopProducts;