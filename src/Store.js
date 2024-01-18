import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: composeWithDevTools(),
});

export default store;
