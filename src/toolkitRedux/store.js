
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import basketSlice from './basketSlice';
import weatherSlice from './weatherSlice';

const rootReducer = combineReducers({
    productInitial: productSlice ,
    basketInitial: basketSlice,
    weatherInitial: weatherSlice
});


export const store = configureStore({
    reducer: rootReducer
})