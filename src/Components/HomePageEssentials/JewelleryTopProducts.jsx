import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import TopProductCard from './TopProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css'


const JewelleryTopProducts = () => {
    const  [posts,setPosts] = useState([])
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        // limit = 5
        axios.get("https://fakestoreapi.com/products/category/jewelery",{params:{
            limit: 4}})
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            });
    }, []);

    return (
        <div className = "cardContainer">
            {posts.map(post =>(
                <div key={post.id}>
                <TopProductCard title={post.title} image={post.image} price={post.price}></TopProductCard>
                </div>
            ))}
        </div>
    );
}

export default JewelleryTopProducts;