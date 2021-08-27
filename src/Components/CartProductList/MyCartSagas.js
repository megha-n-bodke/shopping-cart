import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import { getCart } from '../../pages/my-cart/MyCartAction';
import axios from 'axios';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addToCart(action) {
    try {
        const cart = yield select(getCart)
        // https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
        let date = (new Date()).toISOString().slice(0, 10);
        let cartItems = Object.entries(cart).map((item, index) => {
            return {
                productId: parseInt(item[0]),
                quantity: item[1]
            };
        });
        // TODO user_id
        const data = {
            userId: 1,
            date: date,
            products: cartItems
        };
        axios.put('https://fakestoreapi.com/carts/1', data);
    } catch (e) {
        // TODO error handling
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* addToCartSaga() {
    yield takeEvery('ADD_TO_CART', addToCart);
}

export function* updateToCartSaga() {
    yield takeEvery('UPDATE_TO_CART', addToCart);
}

export function* deleteFromCartSaga() {
    yield takeEvery('DELETE_FROM_CART', addToCart);
}

export default function* cartSagas() {
    yield all([fork(addToCartSaga), fork(updateToCartSaga), fork(deleteFromCartSaga)]);
}