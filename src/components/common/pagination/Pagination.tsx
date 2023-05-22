import { IPaginationProps } from "./types";
import { PaginationContainer } from "./PaginationStyled";
import { useTheme, Button, Typography } from "@mui/material";

const Pagination = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const theme = useTheme();

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <PaginationContainer bgcolor={theme.palette.primary.main}>
        <Button
          disabled={currentPage === 1}
          variant="contained"
          onClick={prevPage}
        >
          Previous page
        </Button>
        <Typography m={"0 2rem"} variant="h4" color={theme.extraColors.black}>
          {currentPage}/{numberOfPages}
        </Typography>
        <Button
          disabled={currentPage === numberOfPages}
          variant="contained"
          onClick={nextPage}
        >
          Next page
        </Button>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
