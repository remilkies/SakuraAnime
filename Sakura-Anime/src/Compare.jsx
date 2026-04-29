//compare.jsx

import React, { useState } from "react";
import { useContext } from "react";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import SelectionContainer from "./selectionContainer";
import RatingBarGraph from "./Components/RatingBarGraph";
import RadarChart from "./Components/RadarChart";
import sakuraBranch from "./assets/SakuraAnime/sakuraBranch.png";
import EpisodesBarGraph from "./Components/EpisodesBarGraph";
import PieChart from "./Components/GenrePieChart";
import PetalRain from "./Components/SakuraPetalRain";
import { AnimeContext } from "./Components/AnimeContext";
import Button from "./Buttons";

function Compare() {
  const { anime1, anime2, setAnime1, setAnime2 } = useContext(AnimeContext);
  console.log("Anime 1:", anime1);
  console.log("Anime 2:", anime2);

  // const handleClearData = () => { //COMING SOON
  //   setAnime1(null);
  //   setAnime2(null);

  // };

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
            <Container fluid className="splashSelectionContainer">
              <div className="selection-wrapper">
                <SelectionContainer
                  anime1={anime1}
                  anime2={anime2}
                  setAnime1={setAnime1}
                  setAnime2={setAnime2}
                ></SelectionContainer>
                {/* <Button onClick={handleClearData} className="clearButton">Clear Selection</Button> */}
              </div>
            </Container>

            <Container fluid className="branchContainer">
              <Row>
                <Col>
                  <Image className="sakuraBranch2" src={sakuraBranch} />
                </Col>
              </Row>
            </Container>

            <Container fluid className="dataContainer">
            <div style={{ position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
              <PetalRain count={50} />
              </div>
              <Row className="dataRowTop">
                <Col md={6}>
                  <h1 className="titleBadge strengthLabel">Overall Strength Profile</h1>
                  <RadarChart anime1={anime1} anime2={anime2}></RadarChart>
                </Col>

                <Col md={6} className="barGraphContainer">
                  <RatingBarGraph
                    anime1={anime1}
                    anime2={anime2}
                  ></RatingBarGraph>
                  <EpisodesBarGraph
                    anime1={anime1}
                    anime2={anime2}
                  ></EpisodesBarGraph>
                </Col>
              </Row>

              <Row className="genrePotPie">
                <h1 className="titleBadge">Genre Pot Pie</h1>
                <h3 className="genreCaption" style={{ fontSize: 25 }}>
                  Cheak out who has more diversity and your favorite flavor of genre
                  flavours{" "}
                </h3>
                <div className="dataRowBottom">
                  <Col md={6}>
                    <PieChart anime={anime1}></PieChart>
                  </Col>
                  <Col md={6}>
                    <PieChart anime={anime2}></PieChart>
                  </Col>
                </div>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Compare;
