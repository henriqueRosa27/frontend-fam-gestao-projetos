import { connectRouter } from "connected-react-router";
import { History } from "history";

import CityReducer from "./city";
import GlobalReducer from "./global";
import NotificationReducer from "./notification";

export default (history: History<unknown>) => ({
  city: CityReducer,
  global: GlobalReducer,
  notification: NotificationReducer,
  router: connectRouter(history),
});
