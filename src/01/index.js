/**
 * Created by nalantianyi on 2017/1/11.
 */

import {createStore} from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(counter);
store.subscribe(() => {
    console.log(store.getState());
});
document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});