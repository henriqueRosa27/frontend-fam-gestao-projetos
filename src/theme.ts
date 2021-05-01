import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({});

theme = responsiveFontSizes(theme);

export default theme;
