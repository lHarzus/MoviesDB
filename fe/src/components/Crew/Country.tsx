import React from "react";

export const Country = ({ country }: { country: any }) => {
  return (
    <div className="crew">
      <img src={`https://flagsapi.com/${country.iso_3166_1}/flat/64.png`}></img>

      <p>{country.name}</p>
    </div>
  );
};
