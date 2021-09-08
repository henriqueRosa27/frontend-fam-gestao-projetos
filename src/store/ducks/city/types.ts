// import { Action } from "redux";

import { PayloadAction } from "@reduxjs/toolkit";

/**
 * Action types
 */
export enum CityTypes {
  LOAD_CITIES_REQUEST = "@@CITY/LOAD_CITIES_REQUEST",
  LOAD_CITIES_SUCCESS = "@@CITY/LOAD_CITIES_SUCCESS",
  CREATE_CITY_REQUEST = "@@CITY/CREATE_CITY_REQUEST",
  CHANGE_STATUS_CITY_REQUEST = "@@CITY/CHANGE_STATUS_CITY_REQUEST",
  CLEAR_MODEL_CITY = "@@CITY/CLEAR_MODEL_CITY",
  SET_MODEL_CITY = "@@CITY/SET_MODEL_CITY",
  LOAD_CITY_BY_ID_REQUEST = "@@CITY/LOAD_CITY_BY_ID_REQUEST",
  UPDATE_CITY_REQUEST = "@@CITY/UPDATE_CITY_REQUEST",
  SET_FILTER_DATA = "@@CITY/SET_FILTER_DATA",
}

// /**
//  * State type
//  */
export interface CityState {
  dataList: DataList;
  filters: FilterData;
  model: CityData;
}

/**
 * Data types
 */
export interface CityData {
  id: string;
  nome: string;
  ativo: boolean;
}

export interface DataList {
  list: CityData[];
  size: number;
  totalItems: number;
  totalPage: number;
  currentPage: number;
}

export interface FilterData {
  nome?: string;
  ativo?: number;
}

/**
 * Interfaces
 */
export type ILoadCitiesRequest = PayloadAction<{
  pagina?: number;
  tamanho?: number;
}>;

export type ICreateCityRequest = PayloadAction<{
  nome: string;
}>;

export type IChangeStatusCityRequest = PayloadAction<{
  id: string;
  status: boolean;
}>;

export type ILoadCityByIdRequest = PayloadAction<{
  id: string;
}>;

export type IUpdateCityRequest = PayloadAction<{
  id: string;
  nome: string;
}>;
