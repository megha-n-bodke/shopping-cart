import React from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateAlbumsPageNumbers, updateAlbumsPagination } from './AlbumPaginatorAction';


const AlbumPaginator = ({ list: list, paging: paging }) => {
    const dispatch = useDispatch();
    let active = paging.current_page;
    // cases
    // total_pages = 4
    // 1, 2, Next: start: 1, end: 2
    // Prev, 2, 3, Next start: 2, end: 3
    // Prev, 3, 4 start: 3, end: 4

    // item will be number to show
    let items = [];
    if (paging.current_page !== 1) {
        items.push(
            <Pagination.Prev onClick={() => dispatch(updateAlbumsPageNumbers(paging.current_page - 1, paging.start_page_number - 1))}/>
        )
    }
    for (let number = paging.start_page_number; number <= paging.start_page_number + 1; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}
                             onClick={() => dispatch(updateAlbumsPagination(
                                 number
                             ))}
            >
                {number}
            </Pagination.Item>,
        );
    }
    if (paging.total_pages !== paging.current_page) {
        items.push(
            <Pagination.Next onClick={() => dispatch(updateAlbumsPageNumbers(paging.current_page + 1, paging.start_page_number + 1))}/>
        )
    }

    return (
        <>
            <Col>
            <p>Page {paging.current_page} of {paging.total_pages}</p>
            </Col>
            <Col>
            <Pagination>
                {items}
            </Pagination>
            </Col>
        </>
    )
}

export default AlbumPaginator;
