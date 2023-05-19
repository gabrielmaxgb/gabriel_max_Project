import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const CardContainer = styled.div<ICustomizableStyledComponent>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 0.5rem 1.4rem;
  border-radius: 8px;
  background-color: ${(props) => `${props.bgColor}`};
  box-sizing: border-box;
  width: 100%;
  /* transition: 1s; */

  &:hover {
    /* background-color: ${(props) => props.bgColorOnHover}; */
    /* background-color: none; */
    background-image: ${(props) => `url(${props.bgimageonhover})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .title {
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.5rem;
    border-radius: 12px;
    text-align: center;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: start;

    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    padding: 0 0.5rem;
    border-radius: 12px;

    .awards {
      margin-right: 1rem;
      box-sizing: border-box;
      padding: 0.5rem;
      border-radius: 12px;
    }
  }
`;
