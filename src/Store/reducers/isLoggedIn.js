const isLoggedIn = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
      case "ENTER_AS_USER": {
          return action.payload.isLoggedIn;
      }
      default:
        return state;
    }
  };
  
  export default isLoggedIn;
  