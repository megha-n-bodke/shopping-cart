const initialState = {
    total_pages: 0,
    current_page: 0,
    items_per_page: 0
}

export default function ProductPaginatorReducer(state = initialState, {payload, type}) {
    switch (type) {
        case "UPDATE_PRODUCTS_PAGINATION": {
            return {
                ...state,
                current_page: payload
            }
        }
        case "SETUP_PRODUCTS_PAGINATION": {
            return {
                total_pages: payload.total_pages,
                current_page: payload.current_page,
                items_per_page: payload.items_per_page
            }
        }
        default:
            return state;
    }
}
