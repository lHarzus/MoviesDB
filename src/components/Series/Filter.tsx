import React, { useState } from "react";

export const Filter = ({ submitSorter }: { submitSorter: any }) => {
  const [sorter, setSorter] = useState({
    sortType: "vote_count",
    sort: "desc",
    adult: "false",
    video: "false",
  });

  const onChange = (type: string) => {
    if (type === "video") {
      if (sorter.video === "false") setSorter({ ...sorter, video: "true" });
      else setSorter({ ...sorter, video: "false" });
    }
    if (type === "adult") {
      if (sorter.adult === "false") setSorter({ ...sorter, adult: "true" });
      else setSorter({ ...sorter, adult: "false" });
    }
  };
  return (
    <div>
      <form className="form-sorter" onSubmit={(e) => submitSorter(e, sorter)}>
        <div className="form-sort">
          <div className="sort-types">
            <h1>Sort Types</h1>
            <div>
              <input
                type="checkbox"
                name="revenue"
                checked={sorter.sortType === "revenue"}
                onChange={() => setSorter({ ...sorter, sortType: "revenue" })}
              />
              <label htmlFor="revenue">Revenue</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="popularity"
                checked={sorter.sortType === "popularity"}
                onChange={() =>
                  setSorter({ ...sorter, sortType: "popularity" })
                }
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="primary_release_date"
                checked={sorter.sortType === "primary_release_date"}
                onChange={() =>
                  setSorter({ ...sorter, sortType: "primary_release_date" })
                }
              />
              <label htmlFor="primary_release_date">Date</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="vote_average"
                checked={sorter.sortType === "vote_average"}
                onChange={() =>
                  setSorter({ ...sorter, sortType: "vote_average" })
                }
              />
              <label htmlFor="vote_average">Vote Average</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="vote_count"
                checked={sorter.sortType === "vote_count"}
                onChange={() =>
                  setSorter({ ...sorter, sortType: "vote_count" })
                }
              />
              <label htmlFor="vote_count">Vote Count</label>
            </div>
          </div>
          <div className="sort">
            <h1>Sort</h1>
            <div>
              <input
                type="checkbox"
                name="ascending"
                checked={sorter.sort === "asc"}
                onChange={() => setSorter({ ...sorter, sort: "asc" })}
              />
              <label htmlFor="ascending">Ascending</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="descending"
                checked={sorter.sort === "desc"}
                onChange={() => setSorter({ ...sorter, sort: "desc" })}
              />
              <label htmlFor="descending">Descending</label>
            </div>
          </div>
          <div>
            <h1>Adult Movies?</h1>
            <input
              type="checkbox"
              name="adult"
              checked={sorter.adult === "true"}
              onChange={() => onChange("adult")}
            />
            <label htmlFor="adult">Adult</label>
          </div>
          <div>
            <h1>Include Video?</h1>
            <input
              type="checkbox"
              name="video"
              checked={sorter.video === "true"}
              onChange={() => onChange("video")}
            />
            <label htmlFor="video">Video</label>
          </div>
        </div>

        <input value="Search" type="submit" className="btn"></input>
      </form>
    </div>
  );
};
