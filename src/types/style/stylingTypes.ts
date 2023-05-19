import { ThemeOptions } from "@mui/material";

export interface ICustomizableStyledComponent extends ThemeOptions {
  bgColor?: string;
  bgimage?: string;
  linearGradientColor?: string;
  border?: string;
  bgColorOnHover?: string;
  bgimageonhover?: string;
}
