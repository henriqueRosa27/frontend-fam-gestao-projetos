import { all } from "redux-saga/effects";

import SagaCity from "./city/saga";
// import SagaGlobal from "./global/saga";

export default function* sagas() {
  yield all([
    SagaCity(),
    // SagaGlobal()
  ]);
}
