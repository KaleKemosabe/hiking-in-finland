import React, { Component } from "react";
import { FaStreetView, FaHiking, FaMapSigns } from "react-icons/fa";
import Title from "./Title";

export default class Description extends Component {
  state = {
    description: [
      {
        icon: <FaMapSigns />,
        title: "Map",
        info: "In the map section, you can find locations of all 40+ Finnish national parks with a list and short description of each one.",
      },
      {
        icon: <FaStreetView />,
        title: "Info",
        info: "Brief descriptions about all of the national parks and links to make finding information easier.",
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
      <section id="section-about" className="description">
        <Title title="About this page" />
        <div className="section-text">
          This website contains information about Finnish national parks and
          introduces some random stories written by eager hikers and travellers.
          Sometimes travel distances are quite remarkable so if you're not all
          that sure about Finnish geography, hopefully the map section gives you
          a better idea of suitable travel locations to fit your visit.
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
