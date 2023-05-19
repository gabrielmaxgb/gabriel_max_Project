import AnimatedPage from "../../layout/animations/AnimatedPage";
import { InputField, RecordsContainer } from "./RecordsStyled";
import { useEffect, useState } from "react";
import { CharacterDTO } from "../../../services/types";
import { IRecordsProps } from "./types";
import Record from "./record/Record";
import { useTheme, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Records = ({ currentRecords, allRecords }: IRecordsProps) => {
  const theme = useTheme();
  const [records, setRecords] = useState<CharacterDTO[]>();
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    setRecords(currentRecords);
  }, [currentRecords]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    if (e.key === "Enter") {
      console.log("enter pressed", e.target.value);
      setSearchParam(e.target.value);
    }
  };

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
        justifyContent={"center"}
      >
        <div className="search-input-container">
          <InputField
            textColor={theme.palette.primary.main}
            type="text"
            color={theme.palette.primary.main}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Button variant="contained">
            <SearchIcon fontSize="large" color="secondary" />
          </Button>
          <Button
            onClick={() => setSearchParam("")}
            id="clear-search-btn"
            variant="outlined"
          >
            <Typography variant="h6">Clear search</Typography>
          </Button>
        </div>
        {renderRecords()}
      </RecordsContainer>
    </AnimatedPage>
  );
};

export default Records;
