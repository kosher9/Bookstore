import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
