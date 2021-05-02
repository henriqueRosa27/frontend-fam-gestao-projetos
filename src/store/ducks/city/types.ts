import { Action } from "redux";

/**
 * Action types
 */
export enum CityTypes {
  LOAD_CITIES_REQUEST = "LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
}

/**
 * State type
 */
export interface CityState {
  readonly data: CityData[];
}

/**
 * Data types
 */
export interface CityData {
  id: string;
  name: string;
  status: boolean;
}

/**
 * Interfaces
 */
export type ILoadCitiesRequest = Action<CityTypes.LOAD_CITIES_REQUEST>;

export interface ILoadCitiesSuccess
  extends Action<CityTypes.LOAD_CITIES_SUCCESS> {
  data: CityData[];
}

export interface CityActionsTypes {
  [CityTypes.LOAD_CITIES_REQUEST]: string;
  [CityTypes.LOAD_CITIES_SUCCESS]: string;
}

export interface CityActions {
  loadCitiesRequest: () => ILoadCitiesRequest;
  loadCitiesSuccess: (data: CityData[]) => ILoadCitiesSuccess;
}
