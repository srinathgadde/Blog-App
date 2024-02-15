import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //more slices here for posts
    // post: postSlicce,
  },
});

export default store;
