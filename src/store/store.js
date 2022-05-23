import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {marketReducer} from './marketSlice'


const reducers = combineReducers({
    marketReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat()
})
