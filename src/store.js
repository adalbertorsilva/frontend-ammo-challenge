import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './reducers/products_reducer'

export default createStore(combineReducers({productsReducer}), applyMiddleware(thunk))