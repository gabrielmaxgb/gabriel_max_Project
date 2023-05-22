import { useEffect, useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(1);
  const [indexOfLastRecord, setIndexOfLastRecord] = useState(
    currentPage * recordsPerPage
  );
  const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(
    indexOfLastRecord - recordsPerPage
  );

  useEffect(() => {
    setIndexOfLastRecord(currentPage * recordsPerPage);
  }, [currentPage, recordsPerPage]);

  useEffect(() => {
    setIndexOfFirstRecord(indexOfLastRecord - recordsPerPage);
  }, [indexOfLastRecord, recordsPerPage]);

  return {
    currentPage,
    indexOfFirstRecord,
    indexOfLastRecord,
    recordsPerPage,
    setCurrentPage,
    setRecordsPerPage,
  };
};

export default usePagination;
