import { combineReducers, createStore } from 'redux';
import coffeeReducer from './reducers/coffeeReducer';

const rootReducer = combineReducers({
    coffee: coffeeReducer
})

let store = createStore(rootReducer);

export default store;