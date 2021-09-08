import { SnackbarKey } from "notistack";

/**
 * Action types
 */
export enum NotificationTypes {
  PUSH_NOTIFICATION = "@@Notification/PUSH_NOTIFICATION",
  CLOSE_NOTIFICATION = "@@Notification/CLOSE_NOTIFICATION",
}

/**
 * State type
 */
export interface INotification {
  key?: SnackbarKey;
  type: "success" | "error" | "warning" | "info";
  content: { title: string; content: string | string[] };
}
export interface IMessage extends INotification {
  key: SnackbarKey;
}
export interface NotificationState {
  notifications: IMessage[];
}
