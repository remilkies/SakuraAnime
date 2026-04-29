//home.jsx

import "./App.css";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import sakuraLogo from "./assets/SakuraAnime/logo.png";
import PetalRain from "./Components/SakuraPetalRain";

import Button from "./Buttons";
import sakuraBranch from "./assets/SakuraAnime/sakuraBranch.png";
import SelectionContainer from "./SelectionContainer";
import Compare from "./Compare";

import { AnimeContext } from "./Components/AnimeContext";

function Home() {
  const navigate = useNavigate();
  //  const [anime1, setAnime1] = useState(null);
  //  const [anime2, setAnime2] = useState(null);
  //  console.log("Anime 1:", anime1);
  //  console.log("Anime 2:", anime2);

  //use context instead of local UseState
  const { anime1, anime2, setAnime1, setAnime2 } = useContext(AnimeContext)


  return (
    <div>
      <Container fluid className="p-0">
        <Container fluid className="headerContainer p-0">
          <Row className="header m-0">
            <Col className="d-flex justify-content-center align-items-center p-0">
              <Image className="logo" src={sakuraLogo}></Image>
            </Col>
          </Row>
          <h3 className="headerLabel">Spirited Away (2001)</h3>
        </Container>

        <Container fluid className="branchContainer">
          <Row>
            <Col>
              <Image className="sakuraBranch2" src={sakuraBranch} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image className="sakuraBranch3" src={sakuraBranch} />
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ position: "relative", minheight: "100vh" }}>
          <div style={{ position: "absolute", inset: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none" }}>
          <PetalRain count={50} />
          </div>
          <Container fluid className="mainContainer">
            <Container fluid className="mainContent">
              <Container className="descriptionContainer">
                <Row>
                  <Col>
                    <h3>
                      Sakura Anime is a kawaii data-visualisation platform that
                      lets you explore anime statistics through interactive
                      charts and timelines. Discover trends, compare rankings,
                      and see how your favourite animes shine over time.
                      <br></br>
                      <p className="caption">
                        Data is sourced from MyAnimeList's API
                      </p>
                    </h3>
                    <h3>All thats left now is to</h3>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Container>

          <Container fluid className="searchContainer">
            <Row>
              <Col className="searchContainer">
                <h2>Choose Your Anime</h2>
              </Col>
            </Row>
          </Container>

          <Container fluid className="indexSelectionContainer">
              <div className="selection-wrapper">
                <SelectionContainer />
                <Button onClick={() => navigate("Compare")} className="compareButton">Compare</Button>
                </div>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
export default Home;
