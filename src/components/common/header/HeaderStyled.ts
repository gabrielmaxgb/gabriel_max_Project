import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const HeaderContainer = styled.header<ICustomizableStyledComponent>`
  display: flex;
  justify-content: end;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  min-width: 100vw;
  height: auto;
  transition: 2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    background-image: ${(props) => `url(${props.bgimageonhover})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30%;
  }
`;
