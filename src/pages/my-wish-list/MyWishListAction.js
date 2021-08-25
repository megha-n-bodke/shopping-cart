export function addToWishList(id) {
    return {
        type: "ADD_TO_WISHLIST",
        payload: {id}
    }
}

export function deleteFromWishList(id) {
    return {
        type: "DELETE_FROM_WISHLIST",
        payload: {id}
    }
}
