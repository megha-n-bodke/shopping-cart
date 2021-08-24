import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // https://fakestoreapi.com/products
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            });
    }, []);
    const currency = "₹";
    const productList = products.map((product, index) => {
        return (
            <div key={index}>
                <Image src={product.image} />
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{currency}{product.price}</div>
            </div>
        );
    });
    return (
        <div>
            <h3>Customer Support</h3>
            { productList }
        </div>
    )
}

export default ProductList;