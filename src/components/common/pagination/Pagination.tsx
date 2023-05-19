import React from "react";
import { IPaginationProps } from "./types";
import { PaginationContainer } from "./PaginationStyled";
import {
  Stack,
  Pagination as MuiPagination,
  useTheme,
  Button,
  Typography,
} from "@mui/material";

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
        <Button variant="contained" color="primary" onClick={prevPage}>
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
        <Button variant="contained" color="primary" onClick={nextPage}>
          Next page
        </Button>
        {/* <Stack spacing={2}>
          <MuiPagination
            count={nPages}
            variant="outlined"
            shape="rounded"
            color={"secondary"}
            page={currentPage}
            onChange={handlePaginationChange}
          />
        </Stack> */}
      </PaginationContainer>
    </>
  );
};

export default Pagination;
