import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateProductPageNumbers, updateProductsPagination } from './ProductPaginatorAction';


const Paginator = ({ list: list, paging: paging }) => {
    const dispatch = useDispatch();
    let active = paging.current_page;
    // cases
    // total_pages = 4
    // 1, 2, Next: start: 1, end: 2
    // Prev, 2, 3, Next start: 2, end: 3
    // Prev, 3, 4 start: 3, end: 4

    // item will be number to show
    // TODO start
    // TODO updating page buttons list
    let items = [];
    if (paging.current_page !== 1) {
        items.push(
            <Pagination.Prev onClick={() => dispatch(updateProductPageNumbers(paging.current_page - 1, paging.start_page_number - 1))}/>
        )
    }
    for (let number = paging.start_page_number; number <= paging.start_page_number + 1; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}
                             onClick={() => dispatch(updateProductsPagination(
                                 number
                             ))}
            >
                {number}
            </Pagination.Item>,
        );
    }
    if (paging.total_pages !== paging.current_page) {
        items.push(
            <Pagination.Next onClick={() => dispatch(updateProductPageNumbers(paging.current_page + 1, paging.start_page_number + 1))}/>
        )
    }

    return (
        <div>
            <p>Page {paging.current_page} of {paging.total_pages}</p>
            <Pagination>
                {items}
            </Pagination>
        </div>
    )
}

export default Paginator;
