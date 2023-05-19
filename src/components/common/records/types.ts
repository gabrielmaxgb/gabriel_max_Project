import { MouseEventHandler } from "react";
import { CharacterDTO } from "../../../services/types";

export interface IRecordsProps {
  currentRecords: CharacterDTO[];
}

export interface IRecordProps {
  record: CharacterDTO;
}
