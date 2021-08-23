// user object is set server side and is never updated client side but this empty reducer is still needed
const user = (state = {username: null, token: null}, action) => {
    switch (action.type) {
        case "LOGGED_IN": {
            const { username, token } = action.payload;
            return action.payload
        }
        default:
            return state;
    }
};

export default user;