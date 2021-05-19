import { createActions, createReducer } from "reduxsauce";
import {
  CityTypes,
  ILoadCitiesSuccess,
  CityState,
  CityActionsTypes,
  CityActions,
  CityData,
  ISetModelCity,
  ISetFilterData,
} from "./types";

const INITIAL_STATE: CityState = {
  dataList: { currentPage: 0, list: [], totalItems: 0, size: 0, totalPage: 0 },
  filters: { ativo: undefined, nome: undefined },
  model: {} as CityData,
};

export const { Types, Creators } = createActions<CityActionsTypes, CityActions>(
  {
    loadCitiesRequest: ["params"],
    loadCitiesSuccess: ["data"],
    createCityRequest: ["nome"],
    changeStatusCityRequest: ["request"],
    clearModelCity: [],
    setModelCity: ["model"],
    loadCityByIdRequest: ["id"],
    updateCityRequest: ["id", "nome"],
    setFilterData: ["propertie", "value"],
  }
);

export const loadCitiesSuccess = (
  state: CityState = INITIAL_STATE,
  { data }: ILoadCitiesSuccess
): CityState => {
  return { ...state, dataList: data };
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
export const setFilterData = (
  state: CityState = INITIAL_STATE,
  { propertie, value }: ISetFilterData
): CityState => {
  return { ...state, filters: { ...state.filters, [propertie]: value } };
};

// type IActions = ILoadCitiesSuccess;

const handlers = {
  [CityTypes.LOAD_CITIES_SUCCESS]: loadCitiesSuccess,
  [CityTypes.CLEAR_MODEL_CITY]: clearModelCity,
  [CityTypes.SET_MODEL_CITY]: setModelCity,
  [CityTypes.SET_FILTER_DATA]: setFilterData,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createReducer<CityState, any>(INITIAL_STATE, handlers);
