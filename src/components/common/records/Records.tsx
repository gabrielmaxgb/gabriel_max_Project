import AnimatedPage from "../../layout/animations/AnimatedPage";
import { InputField, RecordsContainer } from "./RecordsStyled";
import { useState } from "react";
import { CharacterDTO } from "../../../services/types";
import { IRecordsProps } from "./types";
import Record from "./record/Record";
import { TextField, Typography, useTheme, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Records = ({ currentRecords }: IRecordsProps) => {
  const theme = useTheme();
  const [records, setRecords] = useState(currentRecords);

  return (
    <AnimatedPage>
      <RecordsContainer>
        <div className="search-input-container">
          <InputField
            textColor={theme.palette.primary.main}
            type="text"
            color={theme.palette.primary.main}
          />
          <Button variant="contained">
            <SearchIcon fontSize="large" color="secondary" />
          </Button>
          {/* <KeyboardBackspaceIcon fontSize="large" color="primary" />
          <Typography variant="body1">
            Search for your favorite character
          </Typography> */}
          {/* <TextField
            sx={{ backgroundColor: "white" }}
            variant="standard"
            label="Character name"
            // color="secondary"
            helperText="Search for your favorite character"
          /> */}
        </div>
        {records.map((record: CharacterDTO) => {
          return <Record key={record._id} record={record} />;
        })}
      </RecordsContainer>
    </AnimatedPage>
  );
};

export default Records;
