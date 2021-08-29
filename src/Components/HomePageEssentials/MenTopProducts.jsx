import React from 'react';
import '../../Components/HomePageEssentials/HomePageEssentials.css'
import TopProductCard from './TopProductCard';
import * as products from 'react-bootstrap/ElementChildren';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css'
import { Row } from 'react-bootstrap';


const MenTopProducts = () => {
    const  [posts,setPosts] = useState([])
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        // https://fakestoreapi.com/products/category/jewelery
        // https://fakestoreapi.com/products/category/electronics
        // https://fakestoreapi.com/products/category/women's%20clothing
        // https://fakestoreapi.com/products/category/men's%20clothing
        // limit = 5
        // let params = new URLSearchParams();
        // params.append('limit', 2);
        
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing", {params:{
            limit: 4}
     } )
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <>
            {posts.map(post =>(
                <TopProductCard key={post.id}  productId={post.id} title={post.title} image={post.image} price={post.price}></TopProductCard>
            ))}
        </>
    );
}

export default MenTopProducts;