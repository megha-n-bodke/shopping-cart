import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import userPreferences from './userPreferences';
import SortByAction from './SortByAction';

const SortBy = () => {
    const sortBy = useSelector(state => state.userPreferences.sortBy);
    const dispatch = useDispatch();

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title={sortBy}>
                <Dropdown.Item onClick={() => dispatch(SortByAction("PRICE"))}>Price</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(SortByAction("TITLE"))}>Title</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default SortBy;