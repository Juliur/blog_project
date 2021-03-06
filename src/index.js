import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/rootReducer';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename='/'>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));