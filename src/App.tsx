import { FC } from "react";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StoreProvider } from "src/store/StoreProvider";
import { SnackbarProvider } from "src/hooks/SnackbarProvider";

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
