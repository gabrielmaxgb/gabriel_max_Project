import { CharacterDTO } from "../../../services/types";

export interface IGenericModal {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: CharacterDTO;
}
