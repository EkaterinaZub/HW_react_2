import { basketReducer } from "./basketReducer";
import productReducer1 from "./productReducer1";
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    productInitial: productReducer1 ,
    basketInitial: basketReducer
})


export const store = createStore(rootReducer)