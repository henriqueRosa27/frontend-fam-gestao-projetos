import { CityState } from "./ducks/city/types";
import { GlobalState } from "./ducks/global/types";
import { NotificationState } from "./ducks/notification/types";

export interface IApplicationState {
  city: CityState;
  global: GlobalState;
  notification: NotificationState;
}
