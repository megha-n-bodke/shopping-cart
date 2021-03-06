import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import TopProductCard from './TopProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css'

const WomenTopProduct = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/women's%20clothing", {
            params: {
                limit: 4
            }
        })
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            });
    }, []);
    return (
        <div className="cardContainer">
            {posts.map(post => (
                <TopProductCard key={post.id} productId={post.id} title={post.title} image={post.image} price={post.price}></TopProductCard>
            ))}
        </div>
    );
}

export default WomenTopProduct;