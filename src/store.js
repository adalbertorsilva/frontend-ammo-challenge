import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import productsReducer from './reducers/products_reducer'
import searchReducer from './reducers/search_reducer'

export default createStore(combineReducers({productsReducer, searchReducer}), applyMiddleware(thunk, multi))