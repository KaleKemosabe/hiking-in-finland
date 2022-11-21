import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Description from "../components/SectionAbout";
import SectionMap from "../components/SectionMap";
import SectionEvents from "../components/SectionEvents";
import FeaturedHikes from "../components/FeaturedHikes";
import Contact from "../components/SectionContact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Hiking in Finland"
          subtitle="This website contains information about Finnish nature and national parks."
        >
          <Link to="/hikes" className="btn-primary">
            Read more
          </Link>
        </Banner>
      </Hero>
      <Description />
      <SectionMap />
      <SectionEvents />
      <FeaturedHikes />
      <Contact />
      <Footer />
    </>
  );
}
