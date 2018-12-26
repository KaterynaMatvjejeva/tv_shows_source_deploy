import { createStore, applyMiddleware } from "redux";
import { rootReducer } from '../reducers/reducers';
import thunk from "redux-thunk";
import logger from 'redux-logger';
const initialState = {
    data: [],
    imgs: [],
    genres: [],
    loading: true,
    error: false,
    filter: '',
    query: '',
    option: null,
    countOfPages: 1000,
    currentPage: 1,
  }
  
export const store = createStore(rootReducer, initialState,  applyMiddleware(thunk, logger))
