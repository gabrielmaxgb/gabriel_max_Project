import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const ActionAreaContainer = styled.div<ICustomizableStyledComponent>`
  .action-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: 100vw;
    height: 55vh;
    opacity: 0;
    background-image: ${(props) =>
      `linear-gradient(transparent, ${props.linearGradientColor || "black"})`};
    transition: 1s;
  }
  .action-area:hover {
    opacity: 1;
    background-image: ${(props) =>
      `linear-gradient(transparent, ${props.linearGradientColor || "black"})`};
  }
`;
