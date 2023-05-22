import React from "react";
import { FullWidthLoadingContainer } from "./FullWidthLoadingStyled";
import { CircularProgress } from "@mui/material";

function FullWidthLoading() {
  return (
    <FullWidthLoadingContainer>
      <CircularProgress />
    </FullWidthLoadingContainer>
  );
}

export default FullWidthLoading;
