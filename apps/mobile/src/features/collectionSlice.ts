import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CollectionState {
  collected: number;
  total: number;
  amount: number;
}

const initialState: CollectionState = {
  collected: 245,
  total: 324,
  amount: 76527,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setCollected: (state, action: PayloadAction<number>) => {
      state.collected = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setCollection: <T>(
      state: CollectionState,
      action: PayloadAction<CollectionState>
    ) => {
      state.total = action.payload.total;
      state.collected = action.payload.collected;
      state.amount = action.payload.amount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTotal, setCollected, setCollection } =
  collectionSlice.actions;

export const collectionReducer = collectionSlice.reducer;
