const initialState = []

export default function ProductListReducer(state = initialState, {payload, type}) {
    switch (type) {
        case "LOAD_PRODUCTS": {
            return payload
        }
        default:
            return state;
    }
}
