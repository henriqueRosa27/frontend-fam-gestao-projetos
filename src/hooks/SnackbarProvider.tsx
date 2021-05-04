import { FC } from "react";
import {
  SnackbarProvider as SnackbarProviderComponent,
  SnackbarKey,
} from "notistack";
import { SnackbarComponent } from "../components/Snackbar";

interface SnackbarProvider {
  children: JSX.Element;
}

interface Message {
  message: string;
  variant: "success" | "error" | "warning" | "info";
  key: SnackbarKey;
}

export const SnackbarProvider: FC<SnackbarProvider> = ({
  children,
}: SnackbarProvider) => {
  return (
    <SnackbarProviderComponent
      maxSnack={3}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      dense
      content={(key, data: Message) => {
        return (
          <div>
            <SnackbarComponent
              snackbarKey={key}
              storeKey={data.key}
              message={data.message}
              type={data.variant}
            />
          </div>
        );
      }}>
      {children}
    </SnackbarProviderComponent>
  );
};
