import { takeLatest, put, all, call } from "redux-saga/effects";

import { getAllCitiesService } from "src/services/cidade";
import { Creators as cityCreators } from "./index";
import { Creators as notificationCreators } from "../notification";
import { Creators as globalCreators } from "../global";
import { CityTypes } from "./types";

function* getAllCities() {
  try {
    yield put(globalCreators.openLoading());

    const { data } = yield call(getAllCitiesService);

    yield put(cityCreators.loadCitiesSuccess(data));
  } catch (e) {
    yield put(
      notificationCreators.pushNotification({
        type: "error",
        content: "sdivdsoyfvd",
      })
    );
  } finally {
    yield put(globalCreators.closeLoading());
  }
}

export default function* Cities() {
  yield all([takeLatest(CityTypes.LOAD_CITIES_REQUEST, getAllCities)]);
}
