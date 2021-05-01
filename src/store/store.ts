import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { persistStore } from "redux-persist";
import history from "../routes/history";
import { reducers, sagas } from "./ducks";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: any = createStore(
  reducers(history),
  composeEnhancer(applyMiddleware(...middlewares))
);

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(sagas);

const persist = persistStore(store);

export { persist };
export default store;
