import { configureStore } from "@reduxjs/toolkit";
import teaReducer from "../features/tea/teaSlice";

export const store = configureStore({
  reducer: {
    tea: teaReducer,
  },
});
