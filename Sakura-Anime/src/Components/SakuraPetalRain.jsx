// render many petals at once with random images and properties

import React from "react";

import Petal from "./SakuraPetals";
import petal1 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal1.png";
import petal2 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal2.png";
import petal3 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal3.png";
import petal4 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal4.png";
import petal5 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal5.png";
import petal6 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal6.png";
import petal7 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal7.png";
import petal8 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal8.png";
import petal9 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal9.png";
import petal10 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal10.png";
import petal11 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal11.png";
import petal12 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal12.png";
import petal13 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal13.png";
import petal14 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal14.png";
import petal15 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal15.png";
import petal16 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal16.png";
import petal17 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal17.png";
import petal18 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal18.png";
import petal19 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal19.png";
import petal20 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal20.png";
import petal21 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal21.png";
import petal22 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal22.png";
import petal23 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal23.png";
import petal24 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal24.png";
import petal25 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal25.png";
import petal26 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal26.png";
import petal27 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal27.png";
import petal28 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal28.png";
import petal29 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal29.png";
import petal30 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal30.png";
import petal31 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal31.png";
import petal32 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal32.png";
import petal33 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal33.png";
import petal34 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal34.png";
import petal35 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal35.png";
import petal36 from "../assets/SakuraAnime/sakuraPetal/sakuraPetal36.png";

const petals = [petal1, petal2, petal3, petal4, petal5, petal6, petal7, petal8, petal9, petal10, petal11, petal12, petal13, petal14, petal15, petal16, petal17, petal18, petal19, petal20, petal21, petal22, petal23, petal24, petal25, petal26, petal27, petal28, petal29, petal30, petal31, petal32, petal33, petal34, petal35, petal36];

function PetalRain({ count = 36 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const randomPetal = petals[Math.floor(Math.random() * petals.length)];
        return <Petal key={i} src={randomPetal} />;
      })}
    </>
  );
}

export default PetalRain;