import { useQuery } from "react-query";
import { getData } from "../../../services/get/getData";
import Pagination from "../pagination/Pagination";
import { CHARACTERS_QUERY_KEY } from "../../../services/consts";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { CharacterListContainer } from "./CharacterListStyled";
import Records from "../records/Records";

const CharactersList = () => {
  const query = "character";
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(27);
  const { data, isLoading, isError, error } = useQuery(
    [CHARACTERS_QUERY_KEY, query],
    () => getData(query)
  );

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    console.log(error);
    alert(error);
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data?.docs?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(data?.docs?.length / recordsPerPage);

  return (
    <>
      <CharacterListContainer>
        <Records currentRecords={currentRecords} allRecords={data?.docs} />
        <div id="pagination">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </CharacterListContainer>
    </>
  );
};

export default CharactersList;
