import { takeLatest, put, all } from "redux-saga/effects";

import { Creators as cityCreators } from "./index";
import { Creators as notificationCreators } from "../notification/index";
import { CityTypes } from "./types";

const data = [
  {
    id: "1",
    name: "adopgbsa",
    status: true,
  },
  {
    id: "2",
    name: "adopasdasdgbsa",
    status: true,
  },
  {
    id: "3",
    name: "adopdasdgbsa",
    status: true,
  },
];

function* getAllCities() {
  try {
    yield put(cityCreators.loadCitiesSuccess(data));
    yield put(
      notificationCreators.pushNotification({
        type: "success",
        content: "sdivdsoyfvd",
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export default function* Cities() {
  yield all([takeLatest(CityTypes.LOAD_CITIES_REQUEST, getAllCities)]);
}
