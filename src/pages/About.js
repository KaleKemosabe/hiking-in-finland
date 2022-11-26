import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Hero hero="hikesHero">
        <Banner title="About this page">
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </Banner>
      </Hero>
      <Container className="about-page">
        <Row>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
