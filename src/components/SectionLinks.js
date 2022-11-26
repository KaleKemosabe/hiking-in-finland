import React from "react";
import Title from "./Title";
import { Container, Row, Col } from "react-grid-system";

function Links() {
  return (
    <section className="description">
      <Title title="Useful Links" />
      <Container>
        <Row>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
          <Col sm={4}>Link goes here</Col>
        </Row>
      </Container>
    </section>
  );
}

export default Links;
