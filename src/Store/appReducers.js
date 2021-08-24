// import {default as reduxSaga} from "./../redux-saga/reducer"
import {combineReducers} from "redux";
import isLoggedIn from "./reducers/isLoggedIn";
import user from './reducers/user';
import userPreferences from './reducers/userPreferences';

const reducers = combineReducers({
    isLoggedIn,
    user,
    userPreferences
});

export default reducers;
