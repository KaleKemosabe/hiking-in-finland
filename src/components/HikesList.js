import React from "react";
import Hike from "./Hike";

export default function HikesList({ hikes }) {
  if (hikes.length === 0) {
    return (
      <div className="empty-search">
        <h3>Pahoittelut, ei tuloksia.</h3>
      </div>
    );
  }

  return (
    <section className="hikeslist">
      <div className="section-title">
        <h4>Stories</h4>
        <div className="section-line"></div>
      </div>
      <div className="hikeslist-center">
        {hikes.map((item) => {
          return <Hike key={item.id} hike={item} />;
        })}
      </div>
    </section>
  );
}
