import React from "react";
import { CharacterCardContainer } from "./CharacterCardStyled";
import { useTheme } from "@mui/material";

const CharacterCard = () => {
  const theme = useTheme();

  return (
    <CharacterCardContainer bgcolor={theme.palette.primary.light}>
      CharacterCard
    </CharacterCardContainer>
  );
};

export default CharacterCard;
