import React, { useState } from "react";
import { SeriesCard } from "./SeriesCard";
import { Pagination } from "../Functional/Pagination";

export const DisplaySeries = ({
  series,
  filter,
}: {
  series: any;
  filter: boolean;
}) => {
  const [page, setPage] = useState(1);

  console.log(page);

  if (series.isEmpty) return <p>Loading</p>;
  return (
    <div>
      {filter ? "filter" : "notFilter"}
      <div className="display-series">
        {series.map((s: any, i: number) => (
          <SeriesCard series={s} key={i} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
