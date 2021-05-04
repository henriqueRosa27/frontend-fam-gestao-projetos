import { SnackbarKey, useSnackbar } from "notistack";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { getNotificationState } from "@app/store/selectors";

let displayed: SnackbarKey[] = [];

const SnackbarContainer: FC = () => {
  const { notifications } = useSelector(getNotificationState);
  const { enqueueSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter(key => id !== key)];
  };
  useEffect(() => {
    notifications.forEach(notification => {
      if (displayed.includes(notification.key)) return;
      enqueueSnackbar({
        message: notification.content,
        variant: notification.type,
        key: notification.key,
        onExited: (_: unknown, key: SnackbarKey) => {
          removeDisplayed(key);
        },
      });

      storeDisplayed(notification.key);
    });
  }, [notifications, enqueueSnackbar]);
  return null;
};

export { SnackbarContainer };
