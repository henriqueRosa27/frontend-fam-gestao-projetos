import { Action } from "redux";

/**
 * Action types
 */
export enum CityTypes {
  LOAD_CITIES_REQUEST = "LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
  CREATE_CITY_REQUEST = "CREATE_CITY_REQUEST",
  CHANGE_STATUS_CITY_REQUEST = "CHANGE_STATUS_CITY_REQUEST",
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

export interface IChangeStatusCityRequest
  extends Action<CityTypes.LOAD_CITIES_SUCCESS> {
  request: { id: string; status: boolean };
}

export interface CityActionsTypes {
  [CityTypes.LOAD_CITIES_REQUEST]: string;
  [CityTypes.LOAD_CITIES_SUCCESS]: string;
  [CityTypes.CREATE_CITY_REQUEST]: string;
  [CityTypes.CHANGE_STATUS_CITY_REQUEST]: string;
}

export interface CityActions {
  loadCitiesRequest: () => ILoadCitiesRequest;
  loadCitiesSuccess: (data: CityData[]) => ILoadCitiesSuccess;
  createCityRequest: (nome: string) => ICreateCityRequest;
  changeStatusCityRequest: (request: {
    id: string;
    status: boolean;
  }) => ICreateCityRequest;
}
