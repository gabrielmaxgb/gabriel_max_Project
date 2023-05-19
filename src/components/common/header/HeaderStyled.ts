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

    .liblab-text {
      color: darkorange;
      opacity: 0.5;
    }
  }

  .liblab-text {
    transition: 2s;
    opacity: 0;
    text-shadow: 2px 2px white;
  }
`;
