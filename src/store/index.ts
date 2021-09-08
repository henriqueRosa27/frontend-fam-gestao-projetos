import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { CityState } from "./ducks/city/types";
import { GlobalState } from "./ducks/global/types";
import { NotificationState } from "./ducks/notification/types";

export interface IApplicationState {
  city: CityState;
  global: GlobalState;
  notification: NotificationState;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
