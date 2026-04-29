//timeline.jsx is the page that will display the timeline graph comparing the two selected anime.

import React from "react";
import "./App.css";

import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import SelectionContainer from "./selectionContainer";
import LineGraph from "./Components/LineGraph";
import sakuraBranch from "./assets/SakuraAnime/sakuraBranch.png";
import PetalRain from "./Components/SakuraPetalRain";
import { AnimeContext } from "./Components/AnimeContext";

function Timeline() {
  const { anime1, anime2 } = useContext(AnimeContext);

  return (
    <>
      <Container fluid>
        <Container fluid className="compareTitle">
          <Row>
            <Col>
              <h2 className="titleBadge">Comparison Complete</h2>
              {/* remeber to change to comparison complete, and maybe try to add a loading bar */}
            </Col>
          </Row>
        </Container>

        <Container fluid className="splashContainer">
          <Container fluid className="splashContent">
            <SelectionContainer></SelectionContainer>

            <Container fluid className="branchContainer">
              <Row>
                <Col>
                  <Image className="sakuraBranch2" src={sakuraBranch} />
                </Col>
              </Row>
            </Container>

            <Container fluid className="dataContainer">
              <PetalRain count={50} />


<Row className="timelineCol">
  <Col md={5} className="timelineText">
    <h1 className="titleBadge timelineTitle">Timeline</h1>
    <h3 style={{ fontSize: "32px", lineHeight: "1.4" }}>
      "Twining, intertwining... sometimes lingering, sometimes
      returning, sometimes breaking, and then connecting again.
      That is Musubi. That is Time." <br></br>
      — Hitoha Miyamizu (Your Name)
    </h3>

    <p className="caption">
      much like the coding for this app :D
    </p>
  </Col>

  <Col md={7}> 
  <LineGraph anime1={anime1} anime2={anime2} />
  </Col>
</Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Timeline;
