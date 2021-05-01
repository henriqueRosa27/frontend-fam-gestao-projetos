import { FC } from "react";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StoreProvider } from "./store/StoreProvider";

import { Routes } from "./routes";
import theme from "./theme";

const App: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
