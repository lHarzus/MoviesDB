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
      if (page !== 10) setPage(page + 1);
    }
    if (side === "left") {
      if (page !== 1) setPage(page - 1);
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
      <span
        className={page === 1 ? "selected" : ""}
        onClick={() => {
          setPage(1);
        }}
      >
        1
      </span>
      <span
        className={page === 2 ? "selected" : ""}
        onClick={() => {
          setPage(2);
        }}
      >
        2
      </span>
      <span
        className={page === 3 ? "selected" : ""}
        onClick={() => {
          setPage(3);
        }}
      >
        3
      </span>
      <span
        className={page === 4 ? "selected" : ""}
        onClick={() => {
          setPage(4);
        }}
      >
        4
      </span>
      <span
        className={page === 5 ? "selected" : ""}
        onClick={() => {
          setPage(5);
        }}
      >
        5
      </span>
      <span
        className={page === 6 ? "selected" : ""}
        onClick={() => {
          setPage(6);
        }}
      >
        6
      </span>
      <span
        className={page === 7 ? "selected" : ""}
        onClick={() => {
          setPage(7);
        }}
      >
        7
      </span>
      <span
        className={page === 8 ? "selected" : ""}
        onClick={() => {
          setPage(8);
        }}
      >
        8
      </span>
      <span
        className={page === 9 ? "selected" : ""}
        onClick={() => {
          setPage(9);
        }}
      >
        9
      </span>
      <span
        className={page === 10 ? "selected" : ""}
        onClick={() => {
          setPage(10);
        }}
      >
        10
      </span>
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
