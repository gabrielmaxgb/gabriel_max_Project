import { createTheme } from "@mui/material";
import "@fontsource/alegreya-sc";

declare module "@mui/material/styles" {
  export interface Theme {
    extraColors: {
      liblab: string;
      white: string;
      black: string;
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    extraColors?: {
      liblab?: string;
      white?: string;
      black?: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  extraColors: {
    liblab: "#5de8fc",
    white: "#ffffff",
    black: "#000000",
  },
  palette: {
    primary: {
      main: "#ff7300",
    },
    secondary: {
      main: "#000000",
      // main: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "#ff7300",
    },
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
