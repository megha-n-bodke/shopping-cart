import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Provider store = {store}>
  {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    </Provider>,
  document.getElementById('root')
);

