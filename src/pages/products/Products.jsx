import React from 'react';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import SortBy from '../../Components/SortBy/SortBy';
import ProductArrangement from '../../Components/ProductArrangement/ProductArrangement';
import ProductList from '../../Components/ProductList/ProductList';
import Paginator from '../../Components/ProductList/Paginator';
import { useSelector } from 'react-redux';
import { updateProductsPagination } from '../../Components/ProductList/ProductPaginatorAction';

const Products = () => {
    const products = useSelector(state => state.products);
    const pagingInfo= useSelector(state => state.productsPagination);
    const actionCallBack = updateProductsPagination;
    return (
        <div>
            <Category></Category>
            <CustomerSupport></CustomerSupport>
            <SortBy></SortBy>
            <ProductArrangement></ProductArrangement>
            <ProductList></ProductList>
            <Paginator list={products} paging={pagingInfo}></Paginator>
        </div>
    )
}

export default Products;