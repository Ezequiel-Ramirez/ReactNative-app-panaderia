import {applyMiddleware, combineReducers, createStore} from 'redux';

import BreadsReducer from './reducers/breads.reducer';
import CategoryReducer from './reducers/category.reducer';

const RootReducer = combineReducers({
    breads: BreadsReducer,
    categories: CategoryReducer
});

export default createStore(RootReducer);

