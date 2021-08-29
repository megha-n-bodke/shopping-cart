import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import TopProductCard from './TopProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css'


const MenTopProducts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing", {
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
        <>
            {posts.map(post => (
                <TopProductCard key={post.id} productId={post.id} title={post.title} image={post.image} price={post.price}></TopProductCard>
            ))}
        </>
    );
}

export default MenTopProducts;