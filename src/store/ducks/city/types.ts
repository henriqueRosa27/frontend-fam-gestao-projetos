import { Action } from "redux";

/**
 * Action types
 */
export enum CityTypes {
  LOAD_CITIES_REQUEST = "LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
  CREATE_CITY_REQUEST = "CREATE_CITY_REQUEST",
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
  nome: string;
  ativo: boolean;
}

/**
 * Interfaces
 */
export type ILoadCitiesRequest = Action<CityTypes.LOAD_CITIES_REQUEST>;

export interface ILoadCitiesSuccess
  extends Action<CityTypes.LOAD_CITIES_SUCCESS> {
  data: CityData[];
}

export interface ICreateCityRequest
  extends Action<CityTypes.LOAD_CITIES_SUCCESS> {
  nome: string;
}

export interface CityActionsTypes {
  [CityTypes.LOAD_CITIES_REQUEST]: string;
  [CityTypes.LOAD_CITIES_SUCCESS]: string;
  [CityTypes.CREATE_CITY_REQUEST]: string;
}

export interface CityActions {
  loadCitiesRequest: () => ILoadCitiesRequest;
  loadCitiesSuccess: (data: CityData[]) => ILoadCitiesSuccess;
  createCityRequest: (nome: string) => ICreateCityRequest;
}
