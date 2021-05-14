import { takeLatest, put, all, call } from "redux-saga/effects";

import { getAllCitiesService, createCityService } from "src/services/cidade";
import { Creators as cityCreators } from "./index";
import { Creators as notificationCreators } from "../notification";
import { Creators as globalCreators } from "../global";
import { CityTypes, ICreateCityRequest } from "./types";

function* getAllCities() {
  try {
    yield put(globalCreators.openLoading());

    // const { data } = yield call(getAllCitiesService);
    const data = [
      { id: "1", nome: "Santa Maria", ativo: true },
      { id: "2", nome: "Santa Maria", ativo: false },
    ];
    yield put(cityCreators.loadCitiesSuccess(data));
  } catch (e) {
    yield put(
      notificationCreators.pushNotification({
        type: "error",
        content: "Algum Erro ocorreu",
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
  } catch (e) {
    yield put(
      notificationCreators.pushNotification({
        type: "error",
        content: "Algum Erro ocorreu",
      })
    );
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

export default function* Cities() {
  yield all([
    takeLatest(CityTypes.LOAD_CITIES_REQUEST, getAllCities),
    takeLatest(CityTypes.CREATE_CITY_REQUEST, createCity),
  ]);
}
