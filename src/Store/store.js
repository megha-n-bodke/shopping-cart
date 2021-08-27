import { applyMiddleware, createStore } from 'redux'
import reducers from './appReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import cartSagas from '../Components/CartProductList/MyCartSagas';


const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
// with dev tools
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(reducers, undefined, composedEnhancers)
// then run the saga
sagaMiddleware.run(cartSagas);

export default store