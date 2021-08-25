const initialState = []

export default function MyWishListReducer(state = initialState, {payload, type}) {
    switch (type) {
        case "ADD_TO_WISHLIST": {
            return [
                ...state,
                payload.id
            ]
        }
        case "DELETE_FROM_WISHLIST": {
            return state.filter((wishItemId) => wishItemId !== payload.id)
        }
        default:
            return state;
    }
}
