import React from "react";

export const Company = ({ company }: { company: any }) => {
  return (
    <div className="crew">
      <img src={"https://image.tmdb.org/t/p/w500/" + company.logo_path}></img>

      <p>{company.name}</p>
      <p>{company.origin_country}</p>
    </div>
  );
};
