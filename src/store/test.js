// import {createStore} from 'redux'
let redux =require('redux');
function counter(state = 0, action){
    switch (action.type){
        case 'counter_add':
            return ++state;
        case "counter_min":
            return --state;

        default:
            return state;
    }
}

var app = function(state = {}, action){
    return {counter: counter(state.counter, action)};
 };

let store = redux.createStore(app);
console.log(store.getState());


store.dispatch({type: 'counter_add'});
console.log(store.getState());

store.dispatch({type: 'counter_min'});
console.log(store.getState());