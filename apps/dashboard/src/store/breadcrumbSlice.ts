import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import { Action } from "../types";

export interface BreadcrumbState {
  title: string;
  subtitle: string;
}

const initialState: BreadcrumbState = {
  title: "Dashboard",
  subtitle: "Welcome back! Here's what's happening in D-12.",
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSubtitle: (state, action: PayloadAction<string>) => {
      state.subtitle = action.payload;
    },
    setBreadcrumb: (state, action: PayloadAction<BreadcrumbState>) => {
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
    },
  },
});

export const setTitle = (title: string) => async (dispatch: AppDispatch) => {
  dispatch(setTitleAction(title));
};

export const setSubtitle =
  (subtitle: string) => async (dispatch: AppDispatch) => {
    dispatch(setSubtitleAction(subtitle));
  };

export const setBreadcrumb =
  (breadcrumb: BreadcrumbState) => async (dispatch: AppDispatch) => {
    dispatch(setBreadcrumbAction(breadcrumb));
  };

// Action creators are generated for each case reducer function
export const {
  setTitle: setTitleAction,
  setSubtitle: setSubtitleAction,
  setBreadcrumb: setBreadcrumbAction,
} = breadcrumbSlice.actions;
