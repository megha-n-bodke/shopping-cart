// import {default as reduxSaga} from "./../redux-saga/reducer"
import {combineReducers} from "redux";
import isLoggedIn from "./reducers/isLoggedIn";
// import registerReducer from "../registration/registerReducer";

const reducers = combineReducers({
    isLoggedIn

});

export default reducers;
