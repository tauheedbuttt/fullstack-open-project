import { configureStore } from "@reduxjs/toolkit";
import { breadcrumbSlice } from "./breadcrumbSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
