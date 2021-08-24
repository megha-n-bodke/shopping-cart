import React from 'react';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import SortBy from '../../Components/SortBy/SortBy';
import ProductArrangement from '../../Components/ProductArrangement/ProductArrangement';
import ProductList from '../../Components/ProductList/ProductList';

const Products = () => {
    return (
        <div>
            <Category></Category>
            <CustomerSupport></CustomerSupport>
            <SortBy></SortBy>
            <ProductArrangement></ProductArrangement>
            <ProductList></ProductList>
        </div>
    )
}

export default Products;