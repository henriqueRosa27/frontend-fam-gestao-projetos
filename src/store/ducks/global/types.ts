import { Action } from "redux";

/**
 * Action types
 */
export enum GlobalTypes {
  OPEN_LOADING = "@global/OPEN_LOADING",
  CLOSE_LOADING = "@global/CLOSE_LOADING",
}

/**
 * State type
 */
export interface GlobalState {
  readonly loading: boolean;
}

/**
 * Interfaces
 */
export type IOpenLoading = Action<GlobalTypes.OPEN_LOADING>;

export type ICloseLoading = Action<GlobalTypes.CLOSE_LOADING>;

export interface GlobalActionsTypes {
  [GlobalTypes.OPEN_LOADING]: string;
  [GlobalTypes.CLOSE_LOADING]: string;
}

export interface GlobalActions {
  openLoading: () => IOpenLoading;
  closeLoading: () => ICloseLoading;
}
