import { useState } from "react";
import {
  CircularProgress,
  Modal,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import { IGenericModal } from "./types";
import { Content, QuoteContainer } from "./GenericModalStyled";
import hobbitVillage from "../../../assets/images/hobbitVillage.jpg";
import { useQuery } from "react-query";
import { getData } from "../../../services/get/getData";
import { QUOTES_BY_CHARACTER_QUERY_KEY } from "../../../services/consts";

const GenericModal = ({ open, handleClose, modalData }: IGenericModal) => {
  const query = `character/${modalData._id}/quote`;
  const theme = useTheme();
  const [quoteFinder, setQuoteFinder] = useState(0);
  const { data, isLoading, isError, error } = useQuery(
    [QUOTES_BY_CHARACTER_QUERY_KEY, query],
    () => getData(query)
  );

  console.log("modalData", modalData);

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "black",
          padding: "2rem",
        }}
      >
        <CircularProgress />;
      </div>
    );
  }
  if (isError) {
    console.log(error);
    alert(error);
  }

  console.log("data", data);

  return (
    <Modal open={open} onClose={handleClose}>
      <Content bgColor={theme.extraColors.black} bgimage={hobbitVillage}>
        <QuoteContainer>
          <div>
            <Typography variant="h2">
              &apos;&apos;&nbsp;
              {data?.docs?.length !== 0
                ? data?.docs[quoteFinder].dialog
                : "no quotes"}
              &nbsp;&apos;&apos;
            </Typography>
            {data?.docs?.length !== 0 && (
              <Typography variant="body1">- {modalData?.name}</Typography>
            )}
          </div>
          <div className="action-area">
            <Button
              size="large"
              className="action-button"
              variant="contained"
              disabled={data?.docs?.length === 0 || quoteFinder === 0}
              onClick={() => {
                setQuoteFinder(quoteFinder - 1);
              }}
            >
              Previous
            </Button>
            <Button
              size="large"
              className="action-button"
              variant="contained"
              disabled={
                data?.docs?.length === 0 ||
                quoteFinder === data?.docs?.length - 1
              }
              onClick={() => {
                setQuoteFinder(quoteFinder + 1);
              }}
            >
              Nex
            </Button>
          </div>
        </QuoteContainer>
      </Content>
    </Modal>
  );
};

export default GenericModal;
