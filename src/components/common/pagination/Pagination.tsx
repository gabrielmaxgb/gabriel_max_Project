import { IPaginationProps } from "./types";
import { PaginationContainer } from "./PaginationStyled";
import { useTheme, Button, Typography } from "@mui/material";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const theme = useTheme();
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <PaginationContainer bgColor={theme.palette.primary.main}>
        <Button variant="contained" onClick={prevPage}>
          Previous page
        </Button>
        <Typography m={"0 2rem"} variant="h4" color={theme.extraColors.black}>
          {currentPage}/{nPages}
        </Typography>
        {/* {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))} */}
        <Button variant="contained" onClick={nextPage}>
          Next page
        </Button>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
