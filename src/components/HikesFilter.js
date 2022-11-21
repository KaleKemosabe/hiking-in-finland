import React from "react";
import Title from "./Title";
import Map from "../components/Map/Map";

export function HikesFilter() {
  return (
    <>
      <section className="filter-container">
        <Title title="National Parks" />
        <Map />
      </section>
    </>
  );
}

export default HikesFilter;
