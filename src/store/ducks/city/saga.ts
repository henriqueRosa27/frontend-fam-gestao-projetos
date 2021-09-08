import { takeLatest, put, all, call, select } from "redux-saga/effects";

import {
  getAllCitiesService,
  createCityService,
  inactivateCitiesService,
  activateCityService,
  getCityById,
  updateCityService,
} from "src/services/cidade";
import { getCityState, CityState } from "src/store/selectors";
import history from "src/routes/history";
import { actions as cityActions } from "./index";
import { actions as notificationActions } from "../notification";
import { actions as globalActions } from "../global";
import {
  CityTypes,
  IChangeStatusCityRequest,
  ICreateCityRequest,
  ILoadCitiesRequest,
  ILoadCityByIdRequest,
  IUpdateCityRequest,
} from "./types";

function* getAllCities({ payload }: ILoadCitiesRequest) {
  try {
    yield put(globalActions.openLoading());

    const { dataList, filters }: CityState = yield select(getCityState);

    const ativo =
      filters.ativo === undefined || filters.ativo === -1
        ? undefined
        : Boolean(filters.ativo);
    const { data } = yield call(getAllCitiesService, {
      page: payload?.pagina || dataList.currentPage,
      size: payload?.tamanho || dataList.size,
      nome: filters.nome,
      ativo,
    });
    yield put(
      cityActions.loadCitiesSuccess({
        list: data,
        currentPage: 2,
        totalPage: 2,
        size: 2,
        totalItems: 2,
      })
    );
  } catch (e) {
    yield put(
      notificationActions.pushNotification({
        type: "error",
        content: {
          title: "Erro inesperado",
          content: "Tente novamente em alguns instantes",
        },
      })
    );
  } finally {
    yield put(globalActions.closeLoading());
  }
}

function* createCity({ payload: { nome } }: ICreateCityRequest) {
  try {
    yield put(globalActions.openLoading());
    const data = { nome };
    yield call(createCityService, data);

    yield put(
      notificationActions.pushNotification({
        type: "success",
        content: {
          title: "Sucesso",
          content: "Cidade cadastrada com sucesso",
        },
      })
    );
    history.push("/cidades");
  } catch (e) {
    if (e?.response && e.response?.status === 422) {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: { title: "Erro", content: e.response.data.Erros },
        })
      );
    } else {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalActions.closeLoading());
  }
}

function* changeStatusCity({
  payload: { id, status },
}: IChangeStatusCityRequest) {
  try {
    yield put(globalActions.openLoading());
    if (status) {
      yield call(inactivateCitiesService, id);
    } else {
      yield call(activateCityService, id);
    }

    yield put(cityActions.loadCitiesRequest({}));
  } catch (e) {
    yield put(
      notificationActions.pushNotification({
        type: "error",
        content: {
          title: "Erro inesperado",
          content: "Tente novamente em alguns instantes",
        },
      })
    );
  } finally {
    yield put(globalActions.closeLoading());
  }
}

function* loadCityById({ payload: { id } }: ILoadCityByIdRequest) {
  try {
    yield put(globalActions.openLoading());
    const { data } = yield call(getCityById, id);
    yield put(cityActions.setModelCity(data));
  } catch (e) {
    if (e?.response && e.response?.status === 404) {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: { title: "Erro", content: "Cidade não existe" },
        })
      );
      history.push("/cidades");
    } else {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalActions.closeLoading());
  }
}

function* updateCity({ payload: { id, nome } }: IUpdateCityRequest) {
  try {
    yield put(globalActions.openLoading());
    const data = { nome };
    yield call(updateCityService, id, data);

    yield put(
      notificationActions.pushNotification({
        type: "success",
        content: {
          title: "Sucesso",
          content: "Cidade alterada com sucesso",
        },
      })
    );
    history.push("/cidades");
  } catch (e) {
    if (e?.response && e.response?.status === 422) {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: { title: "Erro", content: e.response.data.Erros },
        })
      );
    } else {
      yield put(
        notificationActions.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalActions.closeLoading());
  }
}

export default function* Cities() {
  yield all([
    takeLatest(CityTypes.LOAD_CITIES_REQUEST, getAllCities),
    takeLatest(CityTypes.CREATE_CITY_REQUEST, createCity),
    takeLatest(CityTypes.CHANGE_STATUS_CITY_REQUEST, changeStatusCity),
    takeLatest(CityTypes.LOAD_CITY_BY_ID_REQUEST, loadCityById),
    takeLatest(CityTypes.UPDATE_CITY_REQUEST, updateCity),
  ]);
}
