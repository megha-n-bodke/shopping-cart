// import {default as reduxSaga} from "./../redux-saga/reducer"
import {combineReducers} from "redux";
import isLoggedIn from "./reducers/isLoggedIn";
import user from './reducers/user';

const reducers = combineReducers({
    isLoggedIn,
    user
});

export default reducers;
