import styled from "@emotion/styled";
import { ICustomizableStyledComponent } from "../../../types/style/stylingTypes";
import { Grid } from "@mui/material";

export const RecordsContainer = styled(Grid)<ICustomizableStyledComponent>`
  margin-bottom: 3rem;
  height: 60vh;
  overflow-y: auto;
  width: 100vw;

  .search-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgcolor};
    width: 100%;

    #clear-search-btn {
      margin-left: 1rem;
    }
  }
`;

export const RecordContainer = styled(Grid)<ICustomizableStyledComponent>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: 1s;

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
