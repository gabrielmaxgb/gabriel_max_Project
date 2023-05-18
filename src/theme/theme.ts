import { createTheme } from "@mui/material";
import "@fontsource/alegreya-sc";

declare module "@mui/material/styles" {
  export interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e9a807",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    // fontFamily: "Alegreya SC, serif",
    fontFamily: [
      "Alegreya SC, serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
