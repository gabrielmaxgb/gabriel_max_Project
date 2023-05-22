import AnimatedPage from "../../layout/animations/AnimatedPage";
import { RecordsContainer } from "./RecordsStyled";
import { useEffect, useState } from "react";
import { CharacterDTO } from "../../../services/types";
import { IRecordsProps } from "./types";
import Record from "./record/Record";

const Records = ({
  charactersPerPage,
  allRecords,
  searchParam,
}: IRecordsProps) => {
  const [records, setRecords] = useState<CharacterDTO[]>(charactersPerPage);

  useEffect(() => {
    setRecords(charactersPerPage);
  }, [charactersPerPage]);

  const renderRecords = () => {
    if (searchParam === "") {
      return records?.map((record: CharacterDTO) => {
        return <Record key={record._id} record={record} />;
      });
    }
    const filteredRecords = allRecords?.filter((record) =>
      record.name.toUpperCase().includes(searchParam.toUpperCase())
    );
    return filteredRecords?.map((record: CharacterDTO) => {
      return <Record key={record._id} record={record} />;
    });
  };

  return (
    <AnimatedPage>
      <RecordsContainer
        item
        container
        xs={12}
        alignItems={"start"}
        justifyContent={"start"}
      >
        {renderRecords()}
      </RecordsContainer>
    </AnimatedPage>
  );
};

export default Records;
