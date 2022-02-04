import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import BreadsReducer from './reducers/breads.reducer';
import CategoryReducer from './reducers/category.reducer';
import CartReducer from './reducers/cart-reducer';

const RootReducer = combineReducers({
    breads: BreadsReducer,
    categories: CategoryReducer,
    cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));

