import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
      <Hero hero="hikesHero">
        <Banner title="Event calendar">
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </>
  );
};

export default Events;
