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