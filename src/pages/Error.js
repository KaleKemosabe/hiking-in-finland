import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner
        title="404"
        subtitle="The website got lost in the Finnish forest."
      >
        <Link to="/" className="btn-primary">
          Back to homepage
        </Link>
      </Banner>
    </Hero>
  );
}
