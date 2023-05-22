import { ThemeOptions } from "@mui/material";

export interface ICustomizableStyledComponent extends ThemeOptions {
  bgcolor?: string;
  bgimage?: string;
  linearGradientColor?: string;
  border?: string;
  bgColorOnHover?: string;
  bgimageonhover?: string;
  textColor?: string;
}
