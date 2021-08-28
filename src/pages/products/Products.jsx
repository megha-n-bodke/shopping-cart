import React from 'react';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import SortBy from '../../Components/SortBy/SortBy';
import ProductArrangement from '../../Components/ProductArrangement/ProductArrangement';
import ProductList from '../../Components/ProductList/ProductList';
import Paginator from '../../Components/ProductList/Paginator';
import { useSelector } from 'react-redux';
import { updateProductsPagination } from '../../Components/ProductList/ProductPaginatorAction';
import { Col, Row } from 'react-bootstrap';

const Products = () => {
    const products = useSelector(state => state.products);
    const pagingInfo= useSelector(state => state.productsPagination);
    const actionCallBack = updateProductsPagination;
    

    return (
        <Row>
            <Col className="col-md-1"></Col>
            <Col className="col-md-2">
            <Category></Category>
            <CustomerSupport></CustomerSupport>
            </Col>
            <Col  className="col-md-8">
            <Row>
            <Col className="col-md-12">
                <SortBy></SortBy>
                <ProductArrangement></ProductArrangement>
              </Col>
              </Row>

              <Row className="row-fluid">
            <Col className="col-md-12">  
                
                <ProductList></ProductList>
            </Col>
            </Row>

                <Row>
            <Col className="col-md-12">
                <Paginator list={products} paging={pagingInfo}></Paginator>
                </Col>
                </Row>
            </Col>
            <Col className="col-md-1"></Col>
            </Row>
           
    )
}

export default Products;