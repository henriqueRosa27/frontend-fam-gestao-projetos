import { createActions, createReducer } from "reduxsauce";
import {
  CityTypes,
  ILoadCitiesSuccess,
  CityState,
  CityActionsTypes,
  CityActions,
} from "./types";

const INITIAL_STATE: CityState = {
  data: [],
};

export const { Types, Creators } = createActions<CityActionsTypes, CityActions>(
  {
    loadCitiesRequest: [],
    loadCitiesSuccess: ["data"],
  }
);

export const loadCitiesSuccess = (
  state: CityState = INITIAL_STATE,
  { data }: ILoadCitiesSuccess
): CityState => {
  return { ...state, data };
};

// type IActions = ILoadCitiesSuccess;

const handlers = {
  [CityTypes.LOAD_CITIES_SUCCESS]: loadCitiesSuccess,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createReducer<CityState, any>(INITIAL_STATE, handlers);
