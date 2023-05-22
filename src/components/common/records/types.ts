import { CharacterDTO } from "../../../services/types";

export interface IRecordsProps {
  charactersPerPage: CharacterDTO[];
  allRecords?: CharacterDTO[];
  searchParam: string;
}

export interface IRecordProps {
  record: CharacterDTO;
}
