import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityState, CityData, CityTypes, DataList } from "./types";

const initialState: CityState = {
  dataList: { currentPage: 0, list: [], totalItems: 0, size: 0, totalPage: 0 },
  filters: { ativo: undefined, nome: undefined },
  model: {} as CityData,
};

/**
 * Actions
 */
const loadCitiesRequest = createAction<{
  pagina?: number;
  tamanho?: number;
}>(CityTypes.LOAD_CITIES_REQUEST);
const loadCitiesSuccess = createAction<DataList>(CityTypes.LOAD_CITIES_SUCCESS);
const createCityRequest = createAction<{ nome: string }>(
  CityTypes.CREATE_CITY_REQUEST
);
const changeStatusCityRequest = createAction<{ id: string; status: boolean }>(
  CityTypes.CHANGE_STATUS_CITY_REQUEST
);
const clearModelCity = createAction(CityTypes.CLEAR_MODEL_CITY);
const setModelCity = createAction<CityData>(CityTypes.SET_MODEL_CITY);
const loadCityByIdRequest = createAction<{ id: string }>(
  CityTypes.LOAD_CITY_BY_ID_REQUEST
);
const updateCityRequest = createAction<{ id: string; nome: string }>(
  CityTypes.UPDATE_CITY_REQUEST
);
const setFilterData = createAction<{
  propertie: "nome" | "ativo";
  value: string | number | undefined;
}>(CityTypes.SET_FILTER_DATA);

/**
 * Changes state
 */
const loadCitiesSuccessAction = (
  state: CityState,
  { payload }: PayloadAction<DataList>
): CityState => ({
  ...state,
  dataList: payload,
});

const clearModelCityAction = (state: CityState): CityState => ({
  ...state,
  model: initialState.model,
});

const setModelCityAction = (
  state: CityState,
  { payload }: PayloadAction<CityData>
): CityState => ({
  ...state,
  model: payload,
});

const setFilterDataAction = (
  state: CityState,
  {
    payload,
  }: PayloadAction<{
    propertie: "nome" | "ativo";
    value: string | number | undefined;
  }>
): CityState => ({
  ...state,
  filters: { ...state.filters, [payload.propertie]: payload.value },
});

/**
 * Slice
 */
export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: {
    [CityTypes.LOAD_CITIES_SUCCESS]: loadCitiesSuccessAction,
    [CityTypes.CLEAR_MODEL_CITY]: clearModelCityAction,
    [CityTypes.SET_MODEL_CITY]: setModelCityAction,
    [CityTypes.SET_FILTER_DATA]: setFilterDataAction,
  },
});

export const actions = {
  loadCitiesRequest,
  loadCitiesSuccess,
  createCityRequest,
  changeStatusCityRequest,
  clearModelCity,
  setModelCity,
  loadCityByIdRequest,
  updateCityRequest,
  setFilterData,
};

export default citySlice.reducer;
