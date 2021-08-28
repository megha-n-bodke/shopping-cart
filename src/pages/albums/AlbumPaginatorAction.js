export function updateAlbumsPagination(page) {
    return {
        type: "UPDATE_ALBUMS_PAGINATION",
        payload: page
    }
}

export function setupAlbumsPagination(pagination) {
    return {
        type: "SETUP_ALBUMS_PAGINATION",
        payload: pagination
    }
}

export function updateAlbumsPageNumbers(page, start_page) {
    return {
        type: "UPDATE_ALBUMS_PAGE_NUMBERS",
        payload: {current_page: page, start_page_number: start_page}
    }
}