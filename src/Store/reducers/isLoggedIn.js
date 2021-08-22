const isLoggedIn = (state = false, action) => {
    switch (action.type) {
      case "ENTER_AS_USER": {
        return true;
      }
      default:
        return state;
    }
  };
  
  export default isLoggedIn;
  