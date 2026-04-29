import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import "../App.css";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

function normalizeAnime(anime) {

  const MAX_RANK = 20000;
  const MAX_POPULARITY = 20000;
  const MAX_EPISODES = 1000;
  const MAX_USERS = 1000000;

  const mean = anime.mean ?? 0;

  const popularity = anime.popularity ?? MAX_POPULARITY;
  const rank = anime.rank ?? MAX_RANK;
  const episodes = anime.num_episodes ?? 0;
  const users = anime.num_scoring_users ?? 0;

  return [
    (mean / 10) * 100,

    Math.max(0, 100 - (popularity / MAX_POPULARITY) * 100),

    Math.max(0, 100 - (rank / MAX_RANK) * 100),

    Math.min(100, (episodes / MAX_EPISODES) * 100),

    Math.min(100, (users / MAX_USERS) * 100)
  ];
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: "rgba(255,192,203,0.25)",
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      backgroundColor: "rgba(255,192,203,0.25)",
  
      ticks: {
        stepSize: 20,
        display: false
      },
  
      grid: {
        color: "rgba(255,255,255,0.35)"
      },
  
      angleLines: {
        color: "rgba(255,255,255,0.35)"
      },
  
      pointLabels: {
        font: {
          family: '"Caveat", cursive',
          size: 20,
          weight: "bold"
        },
        padding: 12,
        color: "#5A514C",
      }
    }
  },
  elements: {
    line: {
      borderWidth: 3
    },
  },
};
const RadarChart = ({ anime1, anime2 }) => {
  if (!anime1 || !anime2 ){
    return <p>Select teo animes to see their strength profile :3 </p>
  }
const data = {
  labels: ["Rating", "Popularity", "Rank", "Episodes", "Engagement"],
  datasets: [

    {
      label: anime1.title,
      data: normalizeAnime(anime1),
      fill: true,
      backgroundColor: "rgba(217,128,134, 0.5)",
      borderColor: "rgb(217,128,134)",
      pointBackgroundColor: "rgb(217,128,134)",
      pointBorderColor: "#D98086",
      pointHoverBackgroundColor: "#D98086",
      pointHoverBorderColor: "rgb(217,128,134)",
      pointRadius: 4,
      pointHoverRadius: 7,
      borderWidth: 8,
      pointBorderWidth: 10,
    },
    
    {
      label: anime2.title,
      data: normalizeAnime(anime2),
      fill: true,
      backgroundColor: "rgba(172, 192, 99, 0.5)",
      borderColor: "rgb(172, 192, 99)",
      pointBackgroundColor: "rgb(172, 192, 99)",
      pointBorderColor: "#acc063",
      pointHoverBackgroundColor: "#acc063",
      pointHoverBorderColor: "rgb(172, 192, 99)",
      pointRadius: 4,
      pointHoverRadius: 7,
      borderWidth: 8,
      pointBorderWidth: 10,
    },
  ],
};

return (
  <div className="radarContainer">
  <Radar data={data} options={options} />
  {/*this componenet replaces type=chartType  */}
</div>
)

}



export default RadarChart;
