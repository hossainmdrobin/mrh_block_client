import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterRducer from "../feature/counterRducer";
import apiSlice from "../api/apiSlice";

const rootReducer = combineReducers({
    counter: counterRducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
})
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // serializableCheck: false,
        }).concat(apiSlice.middleware),
})

export default store;