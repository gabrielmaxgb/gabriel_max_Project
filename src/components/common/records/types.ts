import { MouseEventHandler } from "react";
import { CharacterDTO } from "../../../services/types";

export interface IRecordsProps {
  currentRecords: CharacterDTO[];
  allRecords?: CharacterDTO[];
  // setSearchCharacters: React.Dispatch<React.SetStateAction<string>>;
}

export interface IRecordProps {
  record: CharacterDTO;
}
