const initialState = {};

export default function MyCartReducer(state = initialState, {payload, type}) {
    switch (type) {
        case "ADD_TO_CART": {
            return {
                ...state,
                [payload.id]: payload.quantity
            };
        }
        case "UPDATE_TO_CART": {
            return {
                ...state,
                [payload.id]: payload.quantity
            };
        }
        case "DELETE_FROM_CART": {
            return state.filter((cartItem) => cartItem !== payload.id)
        }
        default:
            return state;
    }
}
