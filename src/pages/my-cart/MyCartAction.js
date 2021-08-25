export function addToCart(id, quantity) {
    return {
        type: "ADD_TO_CART",
        payload: {id, quantity}
    }
}

export function updateToCart(id, quantity) {
    return {
        type: "UPDATE_TO_CART",
        payload: {id, quantity}
    }
}

export function getProductQuantityInCard(id) {
    return {
        type: "GET_QUANTITY_FROM_CART",
        payload: {id}
    }
}

export function deleteFromCart(id) {
    return {
        type: "DELETE_FROM_CART",
        payload: {id}
    }
}
