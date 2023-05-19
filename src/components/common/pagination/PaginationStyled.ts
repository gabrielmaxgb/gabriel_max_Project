import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const PaginationContainer = styled.div<ICustomizableStyledComponent>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border-radius: 12px;
  /* background-color: ${(props) => props.bgColor}; */
  background-color: rgb(164, 74, 8, 0.8);
`;
