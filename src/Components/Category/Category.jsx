import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // https://fakestoreapi.com/products/categories
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                console.log(response.data);
                setCategories(response.data);
            });
    }, []);
    const categoryList = categories.map((category, index) => {
        return (
            <div key={index}>
                <p className="text-capitalize">{category}</p>
            </div>
        );
    });
    return (
        <div>
            <h5>Category</h5>
            <hr/>
            { categoryList }
        </div>
    )
}

export default Category;