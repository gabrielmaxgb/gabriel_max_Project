import { useQuery } from "react-query";
import { getData } from "../../services/get/getData";
import { Grid } from "@mui/material";
import { CharactersAndQuotesContainer } from "./CharactersAndQuotesStyled";

function CharactersAndQuotes() {
  const charactersQuery = useQuery("lotr_characters", () =>
    getData("character")
  );
  const quotesQuery = useQuery("lotr_quotes", () =>
    getData("quote?page=1?offset=5")
  );

  // console.log("charactersQuery", charactersQuery);
  console.log("quotesQuery", quotesQuery);

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (isError) {
  //   console.log(error);
  // }

  return (
    <CharactersAndQuotesContainer
      item
      container
      xs={12}
      sx={{ backgroundColor: "red" }}
    >
      main
    </CharactersAndQuotesContainer>
  );
}

export default CharactersAndQuotes;
