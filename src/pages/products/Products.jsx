import React from 'react';
import Category from '../../Components/Category/Category';
import CustomerSupport from '../../Components/CustomerSupport/CustomerSupport';
import SortBy from '../../Components/UserPreferences/SortBy';
import ProductArrangement from '../../Components/ProductArrangement/ProductArrangement';
import ProductList from '../../Components/ProductList/ProductList';
import Paginator from '../../Components/ProductList/Paginator';
import { useSelector } from 'react-redux';
import { updateProductsPagination } from '../../Components/ProductList/ProductPaginatorAction';
import { Col, Row } from 'react-bootstrap';


const Products = () => {
    const products = useSelector(state => state.products);
    const pagingInfo = useSelector(state => state.productsPagination);

    return (
        <Row>
            <Col className="col-md-2 bg-light ml-1">
                <Category></Category>
                <CustomerSupport></CustomerSupport>
            </Col>
            <Col className="col-md-8">
                <Row className={'justify-content-end'}>
                        <Col className="col-md-1">
                        <SortBy></SortBy>
                        </Col>
                        <Col className="col-md-1">
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
    );
};

export default Products;