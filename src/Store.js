import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./albumSlice";

const store = configureStore({
  reducer: {
    albums: albumSlice
  }
})
export default store;