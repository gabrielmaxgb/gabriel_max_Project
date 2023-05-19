import styled from "@emotion/styled";

export const CharacterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  cursor: pointer;

  #pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
