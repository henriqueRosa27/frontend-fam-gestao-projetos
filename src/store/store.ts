import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import history from "../routes/history";
import { reducers, sagas } from "./ducks";

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, historyMiddleware];

const store = configureStore({
  reducer: reducers(history),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
  ],
});

sagaMiddleware.run(sagas);

export default store;
