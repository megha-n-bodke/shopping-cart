import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from 'react-bootstrap';
import ProductArrangementAction from './ProductArrangementAction';

const ProductArrangement = () => {
    const view = useSelector(state => state.userPreferences.view);
    const dispatch = useDispatch();
    const label = view === "GRID" ? "Grid" : "List";
    const listView = view === "GRID";
    return (
        <div>
            <ToggleButton
                id="toggle-check"
                type="checkbox"
                checked= {listView}
                value= {view}
                onChange={(e) =>
                    dispatch(ProductArrangementAction(e.currentTarget.value === "GRID" ? "LIST" : "GRID" ))}
            >
                {label}
            </ToggleButton>
        </div>
    )
}

export default ProductArrangement;