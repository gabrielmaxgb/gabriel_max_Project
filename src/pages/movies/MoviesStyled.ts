import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ICustomizableStyledComponent } from "../../types/style/stylingTypes";

export const MoviesContainer = styled(Grid)<ICustomizableStyledComponent>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  min-width: 100vw;
  min-height: 100vh;
  background-image: ${(props) => `url(${props.bgimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .more-button {
    font-size: 2rem;
    color: black;
    background-color: ${(props) => `url(${props.bgColor})`};
    transition: 1s;
  }

  .more-button:hover {
    /* transition: 1s; */
    background-image: ${(props) => `url(${props.bgimageonhover})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 3rem 0;
    color: transparent;
  }
`;
