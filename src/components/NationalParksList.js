import React, { useState } from "react";
import { data } from "../data/finnish-np.json";

function NationalParksList() {
  //   const [nationalParks, setNationalParks] = useState(data);
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-center mt-4">List of National Parks</h1>
      <input
        type="text"
        placeholder="Search national parks"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.location.address.locality}</td>
                <td>{item.info_url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default NationalParksList;
