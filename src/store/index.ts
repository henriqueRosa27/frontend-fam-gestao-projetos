import { CityState } from "./ducks/city/types";
import { GlobalState } from "./ducks/global/types";

export interface IApplicationState {
  city: CityState;
  global: GlobalState;
}
