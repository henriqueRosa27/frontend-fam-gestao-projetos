import { createActions, createReducer } from "reduxsauce";

import {
  NotificationState,
  NotificationActionsTypes,
  NotificationActions,
  IPushNotification,
  IRemoveNotification,
  NotificationTypes,
} from "./types";

const INITIAL_STATE: NotificationState = {
  notifications: [],
};

export const { Types, Creators } = createActions<
  NotificationActionsTypes,
  NotificationActions
>({
  pushNotification: ["data"],
  closeNotification: ["key"],
});

export const pushNotification = (
  state: NotificationState = INITIAL_STATE,
  { data }: IPushNotification
): NotificationState => {
  return {
    ...state,
    notifications: [
      ...state.notifications,
      { ...data, key: new Date().getTime() + Math.random() },
    ],
  };
};

export const closeNotification = (
  state: NotificationState = INITIAL_STATE,
  { key }: IRemoveNotification
): NotificationState => {
  return {
    ...state,
    notifications: state.notifications.filter(
      notification => notification.key !== key
    ),
  };
};

const handlers = {
  [NotificationTypes.PUSH_NOTIFICATION]: pushNotification,
  [NotificationTypes.CLOSE_NOTIFICATION]: closeNotification,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createReducer<NotificationState, any>(INITIAL_STATE, handlers);
