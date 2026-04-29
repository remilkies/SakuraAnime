
import React, { useState} from "react";
import "../App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph({ anime1, anime2 }) {

  //set state for toggle
  const [activeProperty, setActiveProperty] = useState("mean");

  if (!anime1 || !anime2) {
    return <p>Loading...</p>
  }

  const getYear = (dataString) => {
    if (!dataString) return "TBD";
    return new Date(dataString).getFullYear();
};

const year1 = getYear(anime1?.aired?.from || anime1?.start_date); //some anime have the date in aired.from and some have it in start_date so i just check both and use whatever one is available, neccicary? no but i feel better having this fallback (alot of defensive programming in this project T-T)
const year2 = getYear(anime2?.aired?.from || anime2?.start_date);

// const labels = [...new Set([year1, year2])].sort((a, b) => a - b); //get unique years and sort them in ascending/chronological order (and set() prevents duplicate labels if both anime came out in the same year)

// 1. Find the oldest and newest years, then pad them to make a real timeline
const minYear = Math.min(year1, year2) - 3; // Starts 3 years before
const maxYear = Math.max(year1, year2) + 3; // Ends 3 years after the newest anime

// array of all the years in between
const labels = [];
for (let i = minYear; i <= maxYear; i++) {
  labels.push(i);
}


// const dataset1Data = labels.map(year => year === year1 ? anime1[activeProperty] : null); //if the label matches the anime's year, use the anime's property value, otherwise use null (so it doesnt draw a dot there)
// const dataset2Data = labels.map(year => year === year2 ? anime2[activeProperty] : null);

const dataset1Data = labels.map(() => anime1[activeProperty]);
const dataset2Data = labels.map(() => anime2[activeProperty]);


const data = {
  labels: labels,
  datasets: [
    {
    label: anime1.title,
    data: dataset1Data,
    fill: false,
    borderColor: 'rgba(172, 192, 99, 1)',
    backgroundColor: 'rgba(172, 192, 99, 0.5)',
    pointRadius: 5,
    pointHoverRadius: 7,
    // spanGaps: true, // this allows the line to break when there is a null value, so not dot :D
  },
  {
    label: anime2.title,
    data: dataset2Data,
    fill: false,
    borderColor: 'rgba(217,128,134, 1)',
    backgroundColor: 'rgba(217,128,134, 0.5)',
    pointRadius: 5,
    pointHoverRadius: 7,
    // spanGaps: true,
  },
]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      reverse: activeProperty === "rank" || activeProperty === "popularity", //Rank or Popularity, reverse the axis so #1 is at the top >:D
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: { //ARROW FUNCTION MEANS YOU DONT HAVE TO PUT THE WORD FUNTION FOR THE CODE BLOCK ALSO
        label:(context) => {
          let prefix = "";
          let suffix = "";

          if (activeProperty === "rank" || activeProperty === "popularity") {
            prefix = "#";
          }

          if (activeProperty === "mean") {
            suffix = " / 10";
          }
          return `${context.dataset.label}: ${prefix}${context.raw}${suffix}`
        }
      }
    },
  },
};

const toggleOptions =[
  { name: "Rating", value: "mean" },
  { name: "Rank", value: "rank" },
  { name: "Popularity", value: "popularity" },
  { name: "Episodes", value: "num_episodes" },
  { name: "Score", value: "num_scoring_users" },
];

return(

  <div className="lineGraphContainer" style={{ position: "relative", zIndex: 99 }}>
<div style={{ marginBottom: "2em" }}>
        {toggleOptions.map((option, idx) => (
          <label key={idx} className="radioLabel" style={{ marginRight: "15px", cursor: "pointer" }}>
            <input 
              type="radio" 
              name="timelineStat" 
              value={option.value} 
              checked={activeProperty === option.value} 
              onChange={(e) => setActiveProperty(e.target.value)} 
              style={{ accentColor: "#D98086", transform: "scale(1.2)", marginRight: "8px" }}
            />
            {option.name}
          </label>
        ))}
       </div>

     <div className="lineGraphWrapper">
      <Line options={options} data={data} />
     </div>
  </div>
);
}
  
