import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";
import { Grid } from "@mui/material";

export const CharacterCardContainer = styled(
  Grid
)<ICustomizableStyledComponent>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  background-color: ${(props) => props.bgColor};
`;
