import { SnackbarKey } from "notistack";
import { Action } from "redux";

/**
 * Action types
 */
export enum NotificationTypes {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION",
}

/**
 * State type
 */
interface INotification {
  key?: SnackbarKey;
  type: "success" | "error" | "warning" | "info";
  content: string | string[];
}
interface IMessage extends INotification {
  key: SnackbarKey;
}
export interface NotificationState {
  readonly notifications: IMessage[];
}

/**
 * Interfaces
 */
export interface IPushNotification
  extends Action<NotificationTypes.PUSH_NOTIFICATION> {
  data: IMessage;
}

export interface IRemoveNotification
  extends Action<NotificationTypes.CLOSE_NOTIFICATION> {
  key: SnackbarKey;
}

export interface NotificationActionsTypes {
  [NotificationTypes.PUSH_NOTIFICATION]: string;
  [NotificationTypes.CLOSE_NOTIFICATION]: string;
}

export interface NotificationActions {
  pushNotification: (data: INotification) => IPushNotification;
  closeNotification: (key: SnackbarKey) => IRemoveNotification;
}
