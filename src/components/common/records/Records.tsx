import AnimatedPage from "../../layout/animations/AnimatedPage";
import { InputField, RecordsContainer } from "./RecordsStyled";
import { useEffect, useState, useCallback } from "react";
import { CharacterDTO } from "../../../services/types";
import { IRecordsProps } from "./types";
import Record from "./record/Record";
import {
  TextField,
  Typography,
  useTheme,
  Button,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Records = ({
  currentRecords,
  allRecords,
}: // setSearchCharacters,
IRecordsProps) => {
  const theme = useTheme();
  const [records, setRecords] = useState<CharacterDTO[]>();

  useEffect(() => {
    setRecords(currentRecords);
  }, []);

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
  //   if (e.key === "Enter") {
  //     setSearchCharacters(e.target.value);
  //   }
  // };

  return (
    <AnimatedPage>
      <RecordsContainer>
        {/* <div className="search-input-container">
          <InputField
            textColor={theme.palette.primary.main}
            type="text"
            color={theme.palette.primary.main}
            // onKeyDown={(e) => handleKeyDown(e)}
          />
          <Button variant="contained">
            <SearchIcon fontSize="large" color="secondary" />
          </Button>
        </div> */}
        {records?.map((record: CharacterDTO) => {
          return <Record key={record._id} record={record} />;
        })}
      </RecordsContainer>
    </AnimatedPage>
  );
};

export default Records;
