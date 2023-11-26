import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import settingsReducer from "./slices/settingsSlice";


const store = configureStore({
  reducer: {
    // auth: authReducer,
    settings: settingsReducer,

  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
