import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { RecordContainer } from "../RecordsStyled";
import { IRecordProps } from "../types";
import GenericModal from "../../generic-modal/GenericModal";

function Record({ record }: IRecordProps) {
  const theme = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <RecordContainer
        item
        container
        xs={10}
        sm={6}
        md={4}
        bgcolor={theme.extraColors.black}
        key={record._id}
        onClick={() => setModalOpen(true)}
      >
        <Typography className="character" variant="h5">
          .{record.name}
        </Typography>
      </RecordContainer>

      {isModalOpen && (
        <GenericModal
          open={isModalOpen}
          handleClose={() => setModalOpen(false)}
          modalData={record}
        />
      )}
    </>
  );
}

export default Record;
