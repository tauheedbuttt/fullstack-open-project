import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token?: string;
}

const initialState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload?.token ?? null;
    },
    logout: (state) => {
      state.token = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
