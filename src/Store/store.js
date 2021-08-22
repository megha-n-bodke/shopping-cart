
import { applyMiddleware, createStore } from 'redux'
import reducers from './appReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga';
// import usersSaga from "../redux-saga/sagas";


// const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware()
// with dev tools
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(reducers, undefined, composedEnhancers)
// sagaMiddleware.run(usersSaga);

export default store