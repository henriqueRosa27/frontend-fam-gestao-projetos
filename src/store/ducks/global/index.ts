import { createActions, createReducer } from "reduxsauce";

import {
  GlobalState,
  GlobalActionsTypes,
  GlobalActions,
  GlobalTypes,
} from "./types";

const INITIAL_STATE: GlobalState = {
  loading: false,
};

export const { Types, Creators } = createActions<
  GlobalActionsTypes,
  GlobalActions
>({
  openLoading: [],
  closeLoading: [],
});

export const openLoading = (
  state: GlobalState = INITIAL_STATE
): GlobalState => {
  return { ...state, loading: true };
};

export const closeLoading = (
  state: GlobalState = INITIAL_STATE
): GlobalState => {
  return { ...state, loading: false };
};

const handlers = {
  [GlobalTypes.OPEN_LOADING]: openLoading,
  [GlobalTypes.CLOSE_LOADING]: closeLoading,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createReducer<GlobalState, any>(INITIAL_STATE, handlers);
