import { createSlice, createAction } from "@reduxjs/toolkit";

import { GlobalState, GlobalTypes } from "./types";

const initialState: GlobalState = {
  loading: false,
};

/**
 * Actions
 */
const openLoading = createAction(GlobalTypes.OPEN_LOADING);
const closeLoading = createAction(GlobalTypes.CLOSE_LOADING);

/**
 * Changes state
 */
export const openLoadingAction = (state: GlobalState): GlobalState => ({
  ...state,
  loading: true,
});

export const closeLoadingAction = (state: GlobalState): GlobalState => ({
  ...state,
  loading: false,
});

/**
 * Slice
 */
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: {
    [GlobalTypes.OPEN_LOADING]: openLoadingAction,
    [GlobalTypes.CLOSE_LOADING]: closeLoadingAction,
  },
});

export const actions = {
  openLoading,
  closeLoading,
};

export default globalSlice.reducer;
