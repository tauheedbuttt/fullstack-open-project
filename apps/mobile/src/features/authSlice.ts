import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserRole } from "shared";

export interface AuthState {
  role?: IUserRole;
}

const initialState: AuthState = {
  role: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: IUserRole }>) => {
      state.role = action.payload?.role ?? null;
    },
    logout: (state) => {
      state.role = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
