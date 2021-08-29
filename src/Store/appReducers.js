// import {default as reduxSaga} from "./../redux-saga/reducer"
import {combineReducers} from "redux";
import isLoggedIn from "./reducers/isLoggedIn";
import user from './reducers/user';
import userPreferences from '../Components/UserPreferences/userPreferences';
import MyCartReducer from '../pages/my-cart/MyCartReducer';
import MyWishListReducer from '../pages/my-wish-list/MyWishListReducer';
import ProductListReducer from '../Components/ProductList/ProductListReducer';
import ProductPaginatorReducer from '../Components/ProductList/ProductPaginatorReducer';
import AlbumPaginatorReducer from '../pages/albums/AlbumPaginatorReducer';

const reducers = combineReducers({
    isLoggedIn,
    user,
    userPreferences,
    cart: MyCartReducer,
    wishlist: MyWishListReducer,
    products: ProductListReducer,
    productsPagination: ProductPaginatorReducer,
    albumsPagination: AlbumPaginatorReducer
});

export default reducers;
