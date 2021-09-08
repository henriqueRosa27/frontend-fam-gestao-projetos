/**
 * Action types
 */
export enum GlobalTypes {
  OPEN_LOADING = "@@Global/OPEN_LOADING",
  CLOSE_LOADING = "@@Glocal/CLOSE_LOADING",
}

/**
 * State type
 */
export interface GlobalState {
  loading: boolean;
}
