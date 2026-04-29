// import { poster } from "animePoster";
import { Children, useContext } from "react";
import './App.css'
import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Filler from './assets/SakuraAnime/animePoster.jpg'
import Filler2 from './assets/SakuraAnime/animePoster2.jpeg'
import AnimeSelector from "./AnimeSelector";
import { AnimeContext } from "./Components/AnimeContext";


function SelectionContainer() {
  const {anime1, anime2, setAnime1, setAnime2} = useContext(AnimeContext);

  // const [searchTerm, setSearchTerm] = useState("");
  const [search1, setSearch1] = useState(""); //seperate states for each individual search bar (shoutout to my lectuere Talya <3)
const [search2, setSearch2] = useState("");
// const [anime1, setAnime1] = useState("");
//  const [anime2, setAnime2] = useState("");

  
return(
  <div>        

          <Container fluid className="selectionContainer">

          <Row className="selections">

            <Col sm={4} className="selectionCol">
            <AnimeSelector searchTerm={search1} setSearchTerm={setSearch1} onSelectAnime={setAnime1} />
              <Image src={anime1?.main_picture?.large || Filler} rounded className="firstSelection selection"/>
            </Col>

            <Col sm={4} className="selectionCol">
            <AnimeSelector searchTerm={search2} setSearchTerm={setSearch2} onSelectAnime={setAnime2}/>
            <Image src={anime2?.main_picture?.large ||  Filler2} rounded className="secondSelection selection"/>
            </Col>
          </Row>

            <Col className="vsText">
              <h1  style={{ color: "#ACC063" }}>
                V
              </h1>
              <h1 style={{ color: "#D98086" }}>
                S
              </h1>
            </Col>
            
        </Container>
  </div> 
        );
    };
    

export default SelectionContainer;