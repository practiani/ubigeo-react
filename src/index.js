import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// ReactDOM.render(<App />, document.getElementById('root'));

import store from './reducers/ubigeoReducer';
//import { loadUbigeos } from './actions/ubigeoAction';
//import store from '../../reducers/ubigeoReducer';

// Routes
import AppRoutes from './routes';
//store.dispatch(loadUbigeos());

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>),
    document.getElementById('root'));

registerServiceWorker();
