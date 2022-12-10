import React from "react";
import Title from "./Title";
import { Container, Row, Col } from "react-grid-system";

function Links() {
  return (
    <section className="description">
      <Title title="Useful Links" />
      <Container>
        <Row style={{ height: "10rem" }}>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.nationalparks.fi/"
              target="_blank"
              rel="noreferrer"
            >
              Metsähallitus
            </a>
          </Col>

          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.visitfinland.com/en/places-to-go/nature/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Finland
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://etureppu.fi/"
              target="_blank"
              rel="noreferrer"
            >
              Etureppu
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.sll.fi/en/?cn-reloaded=1"
              target="_blank"
              rel="noreferrer"
            >
              Finnish Nature Conservation
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.nationalparks.fi/everymansright"
              target="_blank"
              rel="noreferrer"
            >
              Everyman's Right Info
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.outdooractive.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              Outdooractive
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.finnair.com/fi-en"
              target="_blank"
              rel="noreferrer"
            >
              Domestic Flights
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.matkahuolto.fi/en"
              target="_blank"
              rel="noreferrer"
            >
              Bus Travel
            </a>
          </Col>
          <Col sm={4}>
            <a
              className="external-link"
              href="https://www.vr.fi/en"
              target="_blank"
              rel="noreferrer"
            >
              Train Travel
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Links;
