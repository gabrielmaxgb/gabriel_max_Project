import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const Content = styled.div<ICustomizableStyledComponent>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 80vw;
  height: 70vh;
  background-color: ${(props) => props.bgColor || "black"};
  background-image: ${(props) => `url(${props.bgimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 12px;
  border: none;
  padding: 2rem;
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 12px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  overflow-y: auto;

  .action-area {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 2rem;

    .action-button {
      margin: 0 1rem;
    }
  }
`;
