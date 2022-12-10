import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { HashLink as Link } from "react-router-hash-link";
import Description from "../components/SectionAbout";
import SectionMap from "../components/SectionMap";
import FeaturedHikes from "../components/FeaturedHikes";
import Links from "../components/SectionLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Hiking in Finland"
          subtitle="This website contains information about Finnish nature and national parks."
        >
          <Link to="#section-about" className="btn-primary">
            Read more
          </Link>
        </Banner>
      </Hero>
      <Description />
      <SectionMap />
      <FeaturedHikes />
      <Links />
      <Footer />
    </>
  );
}
