import React from "react";

export const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: any;
}) => {
  const onClick = (side) => {
    if (side === "right") {
      setPage(page + 1);
    }
    if (side === "left") {
      setPage(page - 1);
    }
  };
  return (
    <div className="pagination">
      <i
        className={
          page === 1
            ? "bi bi-arrow-left-square block"
            : "bi bi-arrow-left-square"
        }
        onClick={() => onClick("left")}
      ></i>
      <span className={page === 1 ? "selected" : ""}>1</span>
      <span className={page === 2 ? "selected" : ""}>2</span>
      <span className={page === 3 ? "selected" : ""}>3</span>
      <span className={page === 4 ? "selected" : ""}>4</span>
      <span className={page === 5 ? "selected" : ""}>5</span>
      <span className={page === 6 ? "selected" : ""}>6</span>
      <span className={page === 7 ? "selected" : ""}>7</span>
      <span className={page === 8 ? "selected" : ""}>8</span>
      <span className={page === 9 ? "selected" : ""}>9</span>
      <span className={page === 10 ? "selected" : ""}>10</span>
      <i
        className={
          page === 10
            ? "bi bi-arrow-right-square block"
            : "bi bi-arrow-right-square"
        }
        onClick={() => onClick("right")}
      ></i>
    </div>
  );
};
