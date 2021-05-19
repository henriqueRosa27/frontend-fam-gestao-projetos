import { FC } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import {
  CheckCircleRounded as CheckCircleRoundedIcon,
  WarningRounded as WarningRoundedIcon,
  ErrorRounded as ErrorRoundedIcon,
  InfoRounded as InfoRoundedIcon,
  Close as CloseIcon,
} from "@material-ui/icons/";
import { Box, IconButton } from "@material-ui/core";
import { SnackbarContent, SnackbarKey, useSnackbar } from "notistack";
import clsx from "clsx";

import { Creators as notificationCreators } from "../../store/ducks/notification";
import { useStyles } from "./styles";

interface SnackbarComponentProps {
  snackbarKey: SnackbarKey;
  storeKey: SnackbarKey;
  message: {
    title: string;
    content: string | string[];
  };
  type: "success" | "error" | "warning" | "info";
}

interface DataAlert {
  style: string;
  icon: JSX.Element;
}

type Type = FC<SnackbarComponentProps>;

const SnackbarComponent: Type = ({ snackbarKey, message, type, storeKey }) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const dataAlert: DataAlert = {} as DataAlert;

  switch (type) {
    case "success":
      dataAlert.style = classes.successAlert;
      dataAlert.icon = <CheckCircleRoundedIcon fontSize="inherit" />;
      break;
    case "warning":
      dataAlert.style = classes.warningAlert;
      dataAlert.icon = <ErrorRoundedIcon fontSize="inherit" />;
      break;
    case "error":
      dataAlert.style = classes.errorAlert;
      dataAlert.icon = <WarningRoundedIcon fontSize="inherit" />;
      break;
    default:
      dataAlert.style = classes.infoAlert;
      dataAlert.icon = <InfoRoundedIcon fontSize="inherit" />;
      break;
  }

  const renderContent = (): JSX.Element | JSX.Element[] => {
    if (typeof message.content === "string") {
      return <span>{message.content}</span>;
    }
    return message.content.map(data => {
      return <span key={Math.random() + Date.now()}>{data}</span>;
    });
  };

  return (
    <SnackbarContent className={classes.root} key={snackbarKey}>
      <Box boxShadow={3} style={{ width: "100%" }}>
        <Alert
          className={clsx(classes.alert, dataAlert.style)}
          severity={type}
          icon={dataAlert.icon}
          action={
            <IconButton
              aria-label="close"
              size="medium"
              onClick={() => {
                dispatch(notificationCreators.closeNotification(storeKey));
                closeSnackbar(snackbarKey);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          {message.title && (
            <AlertTitle className={classes.alertTitle}>
              {message.title}
            </AlertTitle>
          )}
          <div className={classes.alertMessage}>{renderContent()}</div>
        </Alert>
      </Box>
    </SnackbarContent>
  );
};

export { SnackbarComponent };
