import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";

function Pagination({ page, total_pages }) {
  const { dispatch } = useContext(AppContext);

  const handleNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch({
        type: "PREV_PAGE",
      });
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
