import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { SnackbarKey } from "notistack";

import {
  IMessage,
  INotification,
  NotificationState,
  NotificationTypes,
} from "./types";

const initialState: NotificationState = {
  notifications: [],
};

/**
 * Actions
 */
const pushNotification = createAction<INotification>(
  NotificationTypes.PUSH_NOTIFICATION
);
const closeNotification = createAction<{ key: SnackbarKey }>(
  NotificationTypes.CLOSE_NOTIFICATION
);

/**
 * Changes state
 */
export const pushNotificationAction = (
  state: NotificationState,
  { payload }: PayloadAction<IMessage>
): NotificationState => {
  const notification = {
    ...payload,
    key: (new Date().getTime() + Math.random()) as SnackbarKey,
  };
  return {
    ...state,
    notifications: [...state.notifications, notification],
  };
};

export const closeNotificationAction = (
  state: NotificationState,
  { payload }: PayloadAction<{ key: SnackbarKey }>
): NotificationState => ({
  ...state,
  notifications: state.notifications.filter(
    notification => notification.key !== payload.key
  ),
});

/**
 * Slice
 */
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    [NotificationTypes.PUSH_NOTIFICATION]: pushNotificationAction,
    [NotificationTypes.CLOSE_NOTIFICATION]: closeNotificationAction,
  },
});

export const actions = {
  pushNotification,
  closeNotification,
};

export default notificationSlice.reducer;
