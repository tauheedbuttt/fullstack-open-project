import { configureStore } from "@reduxjs/toolkit";
import { breadcrumbSlice } from "./breadcrumbSlice";

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
