import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { COLORS } from "./colors";

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.main.hex,
      dark: "#473906",
    },
    error: {
      main: COLORS.error.hex,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
