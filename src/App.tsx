import { FC } from "react";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StoreProvider } from "src/store/StoreProvider";
import { SnackbarProvider } from "src/hooks/SnackbarProvider";

import theme from "src/styles/theme";
import { Routes } from "src/routes";

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
