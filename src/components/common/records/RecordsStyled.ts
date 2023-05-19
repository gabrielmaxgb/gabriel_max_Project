import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";

export const RecordsContainer = styled.div<ICustomizableStyledComponent>`
  margin-bottom: 3rem;

  .search-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor};
  }
`;

export const RecordContainer = styled.div<ICustomizableStyledComponent>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.5rem 1rem;
  transition: 1s;
  /* background-color: ${(props) => props.bgColor}; */

  &:hover {
    background-color: rgba(162, 162, 162, 0.2);
  }
`;

export const InputField = styled.input<ICustomizableStyledComponent>`
  background-color: rgb(164, 74, 8, 0.2);
  border: none;
  border-radius: 12px;
  color: ${(props) => props.textColor};
  font-size: 1.5rem;
  padding: 0.5rem;
  outline: none;
  margin-right: 1rem;
`;
