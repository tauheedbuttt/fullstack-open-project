import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

export interface ModalState<T> {
  key: string;
  open: boolean;
  data?: T;
}

const initialState = <T>(): ModalState<T> => ({
  key: "",
  open: false,
  data: undefined,
});

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState(),
  reducers: {
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
      if (state.open === false) state.key = "";
    },
    setModal: <T>(
      state: ModalState<T>,
      action: PayloadAction<ModalState<T>>
    ) => {
      state.key = action.payload.key;
      state.open = action.payload.open;
      state.data = action.payload.data;
    },
  },
});

export const setKey = (key: string) => async (dispatch: AppDispatch) => {
  dispatch(setKeyAction(key));
};

export const setOpen = (open: boolean) => async (dispatch: AppDispatch) => {
  dispatch(setOpenAction(open));
};

export const setModal =
  <T>(modal: T) =>
  async (dispatch: AppDispatch) => {
    dispatch(setModalAction(modal as ModalState<T>));
  };

// Action creators are generated for each case reducer function
export const {
  setKey: setKeyAction,
  setOpen: setOpenAction,
  setModal: setModalAction,
} = modalSlice.actions;
