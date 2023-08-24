import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./Features/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
