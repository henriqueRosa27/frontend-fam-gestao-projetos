import { createActions, createReducer } from "reduxsauce";
import {
  CityTypes,
  ILoadCitiesSuccess,
  CityState,
  CityActionsTypes,
  CityActions,
  CityData,
  ISetModelCity,
} from "./types";

const INITIAL_STATE: CityState = {
  data: [],
  model: {} as CityData,
};

export const { Types, Creators } = createActions<CityActionsTypes, CityActions>(
  {
    loadCitiesRequest: [],
    loadCitiesSuccess: ["data"],
    createCityRequest: ["nome"],
    changeStatusCityRequest: ["request"],
    clearModelCity: [],
    setModelCity: ["model"],
    loadCityByIdRequest: ["id"],
    updateCityRequest: ["id", "nome"],
  }
);

export const loadCitiesSuccess = (
  state: CityState = INITIAL_STATE,
  { data }: ILoadCitiesSuccess
): CityState => {
  return { ...state, data };
};

export const clearModelCity = (state: CityState = INITIAL_STATE): CityState => {
  return { ...state, model: INITIAL_STATE.model };
};

export const setModelCity = (
  state: CityState = INITIAL_STATE,
  { model }: ISetModelCity
): CityState => {
  return { ...state, model };
};

// type IActions = ILoadCitiesSuccess;

const handlers = {
  [CityTypes.LOAD_CITIES_SUCCESS]: loadCitiesSuccess,
  [CityTypes.CLEAR_MODEL_CITY]: clearModelCity,
  [CityTypes.SET_MODEL_CITY]: setModelCity,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createReducer<CityState, any>(INITIAL_STATE, handlers);
