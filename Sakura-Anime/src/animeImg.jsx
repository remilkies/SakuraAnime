import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Option2 from './assets/SakuraAnime/animePoster.jpg'
import Option1 from './assets/SakuraAnime/animePoster2.jpeg'
import Poster from 'animePoster'

function getPoster(){
    // put some api shit here

    var availbleSelections = ["Pikachu", "Squirtle", "Charzard", "JigglyPuff"]
    [firstSelection, secondSelection] = availbleSelections
    
    return(

        <>
        <Image src={Option1}></Image>

        <Image src={Option2}></Image>

{anime.main_picture.length > 0 && (
    <Image 
    src={anime.main_picture[0]} alt={anime.name} style={{
      width: "100%", 
      maxHeight: "200px", 
      objectFit: "cover", 
      borderRadius: "8px", 
      marginBottom: "15px"
      }}
      />
    
  )}
        </>
    )
}

