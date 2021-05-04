import { FC } from "react";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StoreProvider } from "@app/store/StoreProvider";
import { SnackbarProvider } from "@app/hooks/SnackbarProvider";

import { Routes } from "./routes";
import theme from "./theme";

const App: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
