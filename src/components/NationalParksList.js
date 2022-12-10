import React, { useState } from "react";
import Title from "./Title";
import { data } from "../data/finnish-np.json";

function NationalParksList() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Title title="List of National Parks" />
      <input
        className="parks-search-input"
        type="text"
        placeholder="Filter list"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="parks-table">
        <thead>
          <tr className="parks-fields">
            <th>Name</th>
            <th>Short Description</th>
          </tr>
        </thead>
        <tbody className="parks-body">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <tr key={index} className="parks-fields">
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default NationalParksList;
