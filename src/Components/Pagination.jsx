import React from "react";

function Pagination({ page, setPage, total_pages }) {
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage}>prev</button>
      <p>
        page {page} of {total_pages}
      </p>
      <button onClick={handleNextPage}>next</button>
    </div>
  );
}

export default Pagination;
