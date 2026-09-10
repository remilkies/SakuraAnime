import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "../App.css";

import Filler from '../assets/SakuraAnime/animePoster.jpg';
import Filler2 from '../assets/SakuraAnime/animePoster2.jpeg';
import { AnimeContext } from "./AnimeContext";

function DisplayContainer() {
  // CONTEXT TIME
  // ONLY grab anime1 and anime2
  // or the search state here because we are only reading the data, not changing it :P
  const { anime1, anime2 } = useContext(AnimeContext);

  return (
    <div>        
      <Container fluid className="selectionContainer">
        <Row className="selections">


          <Col sm={4} className="selectionCol">
            <Image 
              src={anime1?.main_picture?.large || Filler} 
              rounded 
              className="firstSelection selection"
            />
          </Col>


          <Col className="vsText">
            <h1 style={{ color: "#ACC063" }}>V</h1>
            <h1 style={{ color: "#D98086" }}>S</h1>
          </Col>

          <Col sm={4} className="selectionCol">
            <Image 
              src={anime2?.main_picture?.large || Filler2} 
              rounded 
              className="secondSelection selection"
            />
          </Col>

        </Row>
      </Container>
    </div> 
  );
}
    
export default DisplayContainer;