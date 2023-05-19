import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../types/style/stylingTypes";
import { Button, Grid } from "@mui/material";

export const WelcomeContainer = styled(Grid)<ICustomizableStyledComponent>`
  min-width: 100vw;
  min-height: 100vh;
`;

export const ImgContainer = styled(Grid)<ICustomizableStyledComponent>`
  display: flex;
  align-items: end;
  justify-content: center;

  background-image: ${(props) => `url(${props.bgimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .action-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .button {
    opacity: 1;
    font-size: 3rem;
  }
`;
