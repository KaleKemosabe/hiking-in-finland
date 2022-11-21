import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import bgPhotoMap from "../images/quiz-bg.jpg";

function SectionMap() {
  return (
    <section
      className="homepage-map"
      style={{
        backgroundImage: `url(${bgPhotoMap})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "right",
        width: "100%",
        color: "#ffffff",
      }}
    >
      <Title title="Map" />
      <div className="section-map-container">
        <div className="section-map-text">
          <p>
            There are 41 amazing national parks in Finland that offer an easy
            starting point to start exploring Finnish nature. Some of them are
            easily reachable from Helsinki, such as Nuuksio and Sipoonkorpi,
            while e.g. Käsivarren erämaa is all the way up north and requires a
            14-hour drive from Helsinki. Services vary but all the parks are
            taken care of by a state-owned enterprise called Metsähallitus. Some
            of the parks even have free huts to use.
          </p>
          <Link to="/mappage" className="btn-primary">
            Go to map
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionMap;
