import { connectRouter } from "connected-react-router";
import { History } from "history";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CityReducer from "./city";
import GlobalReducer from "./global";
import NotificationReducer from "./notification";

export default (history: History<unknown>) =>
  persistCombineReducers(
    {
      key: "fam-gestao-projetos",
      storage,
      blacklist: ["global", "notification"],
    },
    {
      city: CityReducer,
      global: GlobalReducer,
      notification: NotificationReducer,
      router: connectRouter(history),
    }
  );
