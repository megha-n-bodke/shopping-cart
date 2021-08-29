import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Image, Row } from 'react-bootstrap';
import SortByAction from '../UserPreferences/SortByAction';
import { addToCart } from '../../pages/my-cart/MyCartAction';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './ProductListAction';
import { setupProductsPagination } from './ProductPaginatorAction';
import "./product.css";
import WishListButton from './WishListButton';
import ProductCardListView from './ProductCardListView';


const ProductList = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const sortBy = useSelector(state => state.userPreferences.sortBy);
    const filterBy = useSelector(state => state.userPreferences.filterBy);
    const view = useSelector(state => state.userPreferences.view);
    const pagingInfo= useSelector(state => state.productsPagination);
    useEffect(() => {
        // https://fakestoreapi.com/products
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
                dispatch(loadProducts(response.data));
                // TODO set limit as per view
                let total_pages = Math.ceil(response.data.length/8);
                dispatch(setupProductsPagination({total_pages: total_pages,
                    current_page: 1,
                    items_per_page: 8}))
            });
    }, []);
    const currency = "₹";

    // products sorted
    let productsSorted = null;
    switch (sortBy) {
        case "PRICE": {
            productsSorted = products.sort(function (a, b) {
                return a.price - b.price;
            });
            break;
        }
        case "TITLE": {
            productsSorted = products.sort(function(a, b) {
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            break;
        }
        default:
            productsSorted = products.sort(function (a, b) {
                return a.price - b.price;
            });
    }

    // products filtered
    let productsFiltered = null;
    switch (filterBy) {
        case "electronics":
        case "jewelery":
        case "men's clothing":
        case "women's clothing": {
            productsFiltered = productsSorted.filter(product => product.category === filterBy)
            break;
        }
        default:
            productsFiltered = productsSorted;
    }

    let start = (pagingInfo.current_page - 1)  * pagingInfo.items_per_page;
    let productsInView = productsFiltered.slice(start, start + pagingInfo.items_per_page);
    const productList = productsInView.map((product, index) => {
        if ( view === "LIST") {
            return (
                <ProductCardListView product={product}></ProductCardListView>
            )
        } else {
            return (
                <div key={index} className="col-sm-3">
                    <Image className="imgresponsive" src={product.image} />
                    <div onClick={()=> history.push({pathname:"/productdetails/",state: {product},}) }className="text-truncate">{product.title}</div>
                    <div className="text-truncate">{product.description}</div>
                    <div>{currency}{product.price}</div>
                    <Button onClick={() => dispatch(addToCart(product.id, 1))}>Add to Cart</Button>
                    <WishListButton key={index} productId={product.id}/>
                </div>
            );
        }
    });
    return (
        <Row>
            { productList }
        </Row>
    )
}

export default ProductList;