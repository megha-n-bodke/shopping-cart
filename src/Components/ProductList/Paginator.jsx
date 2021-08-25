import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateProductsPagination } from './ProductPaginatorAction';

const Paginator = (list, paging) => {
    const dispatch = useDispatch();
    let active = paging.current_page;
    // item will be number to show
    let items = [];
    for (let number = 1; number <= 5; number++) {
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

    return (
        <div>
            <Pagination>
                {/*<Pagination.First />*/}
                {/*<Pagination.Prev />*/}
                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item active>{12}</Pagination.Item>*/}
                {items}
                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item>{20}</Pagination.Item>*/}
                <Pagination.Next />
                {/*<Pagination.Last />*/}
            </Pagination>
        </div>
    )
}

export default Paginator;
