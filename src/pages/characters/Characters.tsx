import { Button, CircularProgress, Typography, useTheme } from "@mui/material";
import { CharactersContainer, InputField } from "./CharactersStyled";
import AnimatedPage from "../../components/layout/animations/AnimatedPage";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { IRecordsUseRefObject } from "./types";
import { CHARACTERS_QUERY_KEY } from "../../services/consts";
import { useQuery } from "react-query";
import { getData } from "../../services/get/getData";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/common/pagination/Pagination";
import FullWidthLoading from "../../components/common/full-width-loading/FullWidthLoading";
import Records from "../../components/common/records/Records";

function Characters() {
  const query = "character";
  const theme = useTheme();
  const {
    currentPage,
    indexOfFirstRecord,
    indexOfLastRecord,
    recordsPerPage,
    setCurrentPage,
    setRecordsPerPage,
  } = usePagination();
  const [searchParam, setSearchParam] = useState("");
  const ref: React.MutableRefObject<IRecordsUseRefObject> = useRef({
    characterSearch: "",
  });
  const { data, isLoading, isError, error } = useQuery(
    [CHARACTERS_QUERY_KEY, query],
    () => getData(query)
  );

  useEffect(() => {
    setCurrentPage(1);
    setRecordsPerPage(27);
  }, [setCurrentPage, setRecordsPerPage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    if (e.key === "Enter") {
      setSearchParam(e.target.value);
    }
  };

  const handleSearch = () => {
    setSearchParam(ref.current.characterSearch);
  };

  if (isLoading) {
    return <FullWidthLoading />;
  }
  if (isError) {
    console.log(error);
    alert(error);
  }
  const charactersPerPage = data?.docs?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(data?.docs?.length / recordsPerPage);

  return (
    <AnimatedPage>
      <CharactersContainer
        item
        container
        xs={12}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography id="characters-page-title" variant="h1">
          Characters
        </Typography>
        <div className="search-input-action-area">
          <div id="input-field-and-button">
            <InputField
              textColor={theme.palette.primary.main}
              type="text"
              color={theme.palette.primary.main}
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(e) => (ref.current.characterSearch = e.target.value)}
            />
            <SearchIcon
              fontSize="large"
              color="primary"
              onClick={handleSearch}
            />
          </div>
          <Button
            onClick={() => setSearchParam("")}
            id="clear-search-btn"
            variant="outlined"
          >
            <Typography variant="h6">Clear search</Typography>
          </Button>
        </div>
        <Records
          charactersPerPage={charactersPerPage}
          allRecords={data?.docs}
          searchParam={searchParam}
        />
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CharactersContainer>
    </AnimatedPage>
  );
}

export default Characters;
