export function updateProductsPagination(page) {
    return {
        type: "UPDATE_PRODUCTS_PAGINATION",
        payload: page
    }
}

export function setupProductsPagination(pagination) {
    return {
        type: "SETUP_PRODUCTS_PAGINATION",
        payload: pagination
    }
}

export function updateProductPageNumbers(page, start_page) {
    return {
        type: "UPDATE_PRODUCT_PAGE_NUMBERS",
        payload: {current_page: page, start_page_number: start_page}
    }
}