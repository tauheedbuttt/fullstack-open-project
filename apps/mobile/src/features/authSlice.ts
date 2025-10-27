import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserRole } from "shared";

export interface AuthState {
  role?: IUserRole;
  token?: string;
}

const initialState: AuthState = {
  role: undefined,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ role: IUserRole; token: string }>
    ) => {
      state.role = action.payload?.role ?? null;
      state.token = action.payload?.token ?? null;
    },
    logout: (state) => {
      state.role = undefined;
      state.token = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
