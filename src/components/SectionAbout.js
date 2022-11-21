import React, { Component } from "react";
import { FaStreetView, FaHiking, FaMapSigns } from "react-icons/fa";
import Title from "./Title";

export default class Description extends Component {
  state = {
    description: [
      {
        icon: <FaMapSigns />,
        title: "Map",
        info: "In the map section, you can find locations of all 40+ Finnish national parks and more info about each and every one of them.",
      },
      {
        icon: <FaStreetView />,
        title: "Events",
        info: "Just some ideas of what to do and where to go. Listing a bunch of random nature-related events.",
      },
      {
        icon: <FaHiking />,
        title: "Stories",
        info: "Hiking and biking stories written by a group of friends. Original Finnish versions published on a website called Etureppu.",
      },
    ],
  };

  render() {
    return (
      <section className="description">
        <Title title="About this page" />
        <div className="section-text">
          This website contains information about Finnish national parks and
          introduces some random stories written by eager hikers and travellers.
          Sometimes travel distances are quite remarkable so if you're not all
          that sure about Finnish geography, hopefully the map section gives you
          a better idea of suitable travel locations to fit your visit. Also,
          event calendar is included for giving ideas about what's going on in
          this country.
        </div>
        <div className="description-center">
          {this.state.description.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}