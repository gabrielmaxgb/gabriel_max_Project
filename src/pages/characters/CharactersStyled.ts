import { Grid } from "@mui/material";
import { ICustomizableStyledComponent } from "../../types/style/stylingTypes";
import styled from "@emotion/styled";

export const CharactersContainer = styled(Grid)<ICustomizableStyledComponent>`
  height: 100vh;
  padding: 1rem 0;

  #characters-page-title {
    margin-bottom: 1rem;
  }

  .search-input-action-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgcolor};
    width: 100%;

    #input-field-and-button {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  #clear-search-btn {
    margin-top: 1rem;
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
