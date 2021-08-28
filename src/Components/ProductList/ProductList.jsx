import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Image, Row } from 'react-bootstrap';
import SortByAction from '../SortBy/SortByAction';
import { addToCart } from '../../pages/my-cart/MyCartAction';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../pages/my-wish-list/MyWishListAction';
import { loadProducts } from './ProductListAction';
import { setupProductsPagination } from './ProductPaginatorAction';
import "./product.css";
import { BsHeart } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const sortBy = useSelector(state => state.userPreferences.sortBy);
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

    let start = (pagingInfo.current_page - 1)  * pagingInfo.items_per_page;
    let productsInView = productsSorted.slice(start, start + pagingInfo.items_per_page);
    const [toggle, settoggle] = useState(true);
    const productList = productsInView.map((product, index) => {
        return (
            <div key={index} className="col-sm-3">
                <Image className="imgresponsive" src={product.image} />
                <div className="text-truncate">{product.title}</div>
                <div className="text-truncate">{product.description}</div>
                <div>{currency}{product.price}</div>
                <Button onClick={() => dispatch(addToCart(product.id, 1))}>Add to Cart</Button>
                <Button onClick={() => dispatch(addToWishList(product.id))}>Add to WishList</Button>
                {toggle ? <BsHeart id={"heart"+product.id}  onClick={()=>{settoggle(!toggle) }} type="button"></BsHeart> 
                      : <FcLike  onClick={()=>{settoggle(!toggle) }} type="button"></FcLike>}
            </div>
        );
    });
    return (
        <Row>
            { productList }
        </Row>
    )
}

export default ProductList;