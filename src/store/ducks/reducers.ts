import { connectRouter } from "connected-react-router";
import { History } from "history";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CityReducer from "./city";
import GlobalReducer from "./global";

export default (history: History<unknown>) =>
  persistCombineReducers(
    {
      key: "fam-gestao-projetos",
      storage,
      blacklist: ["global"],
    },
    {
      city: CityReducer,
      global: GlobalReducer,
      router: connectRouter(history),
    }
  );
