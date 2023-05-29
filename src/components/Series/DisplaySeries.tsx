import React from "react";
import { SeriesCard } from "./SeriesCard";
import { Pagination } from "../Functional/Pagination";
import { Filter } from "./Filter";

export const DisplaySeries = ({
  series,
  filter,
  page,
  setPage,
  submitSorter,
}: {
  series: any;
  filter: boolean;
  page: number;
  setPage: any;
  submitSorter: any;
}) => {
  if (series.isEmpty) return <p>Loading</p>;
  return (
    <div>
      {filter ? <Filter submitSorter={submitSorter} /> : "notFilter"}
      <div className="display-series">
        {series.map((s: any, i: number) => (
          <SeriesCard series={s} key={i} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
