/**
 * Created by nalantianyi on 2017/1/11.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';


let store = createStore(rootReducer);
let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , rootElement);