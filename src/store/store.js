import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {filterReducer} from './filterSlice'
import {cartReducer} from './cartSlice'


const reducers = combineReducers({
    filterReducer,
    cartReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat()
})
