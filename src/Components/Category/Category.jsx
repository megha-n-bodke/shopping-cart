import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filerBy } from '../UserPreferences/FilterByAction';

const Category = () => {
    const dispatch = useDispatch();
    const filterBy = useSelector(state => state.userPreferences.filterBy);
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
        let active = filterBy === category;
        return (
            <ListGroup.Item key={index}
                            href={"#" + category}
                            className="text-capitalize"
                            onClick={() => dispatch(filerBy(category))}
                            active={active}
            >{category}</ListGroup.Item>
        );
    });
    return (
        <div>
            <h5>Category</h5>
            <hr/>
            <ListGroup variant="flush">
            { categoryList }
            </ListGroup>
        </div>
    )
}

export default Category;