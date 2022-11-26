import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HikesContainer from "../components/HikesContainer";
import NationalParksList from "../components/NationalParksList";
import Footer from "../components/Footer";

const Map = () => {
  return (
    <>
      <Hero hero="hikesHero">
        <Banner title="Map">
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </Banner>
      </Hero>
      <HikesContainer />
      <NationalParksList />
      <Footer />
    </>
  );
};

export default Map;
