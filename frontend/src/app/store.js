import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

export default store;
