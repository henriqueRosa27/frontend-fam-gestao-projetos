import { Action } from "redux";

/**
 * Action types
 */
export enum CityTypes {
  LOAD_CITIES_REQUEST = "LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
  CREATE_CITY_REQUEST = "CREATE_CITY_REQUEST",
  CHANGE_STATUS_CITY_REQUEST = "CHANGE_STATUS_CITY_REQUEST",
  CLEAR_MODEL_CITY = "CLEAR_MODEL_CITY",
  SET_MODEL_CITY = "SET_MODEL_CITY",
  LOAD_CITY_BY_ID_REQUEST = "LOAD_CITY_BY_ID_REQUEST",
  UPDATE_CITY_REQUEST = "UPDATE_CITY_REQUEST",
}

/**
 * State type
 */
export interface CityState {
  readonly data: CityData[];
  readonly model: CityData;
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
  extends Action<CityTypes.CREATE_CITY_REQUEST> {
  nome: string;
}

export interface IChangeStatusCityRequest
  extends Action<CityTypes.CHANGE_STATUS_CITY_REQUEST> {
  request: { id: string; status: boolean };
}

export type IClearModelCity = Action<CityTypes.CLEAR_MODEL_CITY>;

export interface ISetModelCity extends Action<CityTypes.SET_MODEL_CITY> {
  model: CityData;
}

export interface ILoadCityByIdRequest extends Action<CityTypes.SET_MODEL_CITY> {
  id: string;
}

export interface IUpdateCityRequest
  extends Action<CityTypes.LOAD_CITIES_SUCCESS> {
  id: string;
  nome: string;
}

export interface CityActionsTypes {
  [CityTypes.LOAD_CITIES_REQUEST]: string;
  [CityTypes.LOAD_CITIES_SUCCESS]: string;
  [CityTypes.CREATE_CITY_REQUEST]: string;
  [CityTypes.CHANGE_STATUS_CITY_REQUEST]: string;
  [CityTypes.CLEAR_MODEL_CITY]: string;
  [CityTypes.SET_MODEL_CITY]: string;
  [CityTypes.LOAD_CITY_BY_ID_REQUEST]: string;
  [CityTypes.UPDATE_CITY_REQUEST]: string;
}

export interface CityActions {
  loadCitiesRequest: () => ILoadCitiesRequest;
  loadCitiesSuccess: (data: CityData[]) => ILoadCitiesSuccess;
  createCityRequest: (nome: string) => ICreateCityRequest;
  changeStatusCityRequest: (request: {
    id: string;
    status: boolean;
  }) => ICreateCityRequest;
  clearModelCity: () => IClearModelCity;
  setModelCity: (model: CityData) => ISetModelCity;
  loadCityByIdRequest: (id: string) => ILoadCityByIdRequest;
  updateCityRequest: (id: string, nome: string) => ILoadCityByIdRequest;
}
