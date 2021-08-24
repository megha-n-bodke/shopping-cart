const initialState = {
    sortBy: "PRICE",
    view: "GRID"
};

export default function userPreferences(state = initialState, {payload, type}) {
    switch (type) {
        case "SORT_BY": {
            return {
                ...state,
                sortBy: payload
            }
        }
        case "ARRANGE_BY": {
            return {
                ...state,
                view: payload
            }
        }
        default:
            return state;
    }
}

