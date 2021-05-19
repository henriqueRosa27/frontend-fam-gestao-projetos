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
import { Creators as cityCreators } from "./index";
import { Creators as notificationCreators } from "../notification";
import { Creators as globalCreators } from "../global";
import {
  CityTypes,
  ICreateCityRequest,
  IChangeStatusCityRequest,
  ILoadCityByIdRequest,
  IUpdateCityRequest,
  ILoadCitiesRequest,
} from "./types";

function* getAllCities({ params }: ILoadCitiesRequest) {
  try {
    yield put(globalCreators.openLoading());

    const { dataList, filters }: CityState = yield select(getCityState);

    const ativo =
      filters.ativo === undefined || filters.ativo === -1
        ? undefined
        : Boolean(filters.ativo);
    const { data } = yield call(getAllCitiesService, {
      page: params?.pagina || dataList.currentPage,
      size: params?.tamanho || dataList.size,
      nome: filters.nome,
      ativo,
    });

    yield put(
      cityCreators.loadCitiesSuccess({
        list: data.items,
        currentPage: data.current_page,
        totalPage: data.total_pages,
        size: data.size,
        totalItems: data.total_items,
      })
    );
  } catch (e) {
    yield put(
      notificationCreators.pushNotification({
        type: "error",
        content: {
          title: "Erro inesperado",
          content: "Tente novamente em alguns instantes",
        },
      })
    );
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

function* createCity({ nome }: ICreateCityRequest) {
  try {
    yield put(globalCreators.openLoading());
    const data = { nome };
    yield call(createCityService, data);

    yield put(
      notificationCreators.pushNotification({
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
        notificationCreators.pushNotification({
          type: "error",
          content: { title: "Erro", content: e.response.data.Erros },
        })
      );
    } else {
      yield put(
        notificationCreators.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

function* changeStatusCity({ request }: IChangeStatusCityRequest) {
  try {
    yield put(globalCreators.openLoading());
    if (request.status) {
      yield call(inactivateCitiesService, request.id);
    } else {
      yield call(activateCityService, request.id);
    }

    yield put(cityCreators.loadCitiesRequest());
  } catch (e) {
    yield put(
      notificationCreators.pushNotification({
        type: "error",
        content: {
          title: "Erro inesperado",
          content: "Tente novamente em alguns instantes",
        },
      })
    );
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

function* loadCityById({ id }: ILoadCityByIdRequest) {
  try {
    yield put(globalCreators.openLoading());
    const { data } = yield call(getCityById, id);
    yield put(cityCreators.setModelCity(data));
  } catch (e) {
    if (e?.response && e.response?.status === 404) {
      yield put(
        notificationCreators.pushNotification({
          type: "error",
          content: { title: "Erro", content: "Cidade não existe" },
        })
      );
      history.push("/cidades");
    } else {
      yield put(
        notificationCreators.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

function* updateCity({ id, nome }: IUpdateCityRequest) {
  try {
    yield put(globalCreators.openLoading());
    const data = { nome };
    yield call(updateCityService, id, data);

    yield put(
      notificationCreators.pushNotification({
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
        notificationCreators.pushNotification({
          type: "error",
          content: { title: "Erro", content: e.response.data.Erros },
        })
      );
    } else {
      yield put(
        notificationCreators.pushNotification({
          type: "error",
          content: {
            title: "Erro inesperado",
            content: "Tente novamente em alguns instantes",
          },
        })
      );
    }
  } finally {
    yield put(globalCreators.closeLoading());
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
