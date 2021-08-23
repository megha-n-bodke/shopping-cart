import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import HighQuality from '../../Components/HomePageEssentials/HighQuality';
import OurAdvantages from '../../Components/HomePageEssentials/OurAdvantages';
import TopProducts from '../../Components/HomePageEssentials/TopProducts';

const Home = () => {
    return (
        <>
        <OurAdvantages></OurAdvantages>
        <HighQuality></HighQuality>
        <TopProducts></TopProducts>
        </>
    );
}

export default Home;