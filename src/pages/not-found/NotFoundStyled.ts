import styled from "@emotion/styled";
import { INotFoundContainer } from "./types";
import { ICustomizableStyledComponent } from "../../types/style/stylingTypes";

export const NotFoundContainer = styled.main<ICustomizableStyledComponent>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.bgimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
