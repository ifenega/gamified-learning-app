import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import settingsReducer from "./slices/settingsSlice";
import authReducer from "./slices/authSlice";
import lessonReducer from "./slices/lessonSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    lesson: lessonReducer,

  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
