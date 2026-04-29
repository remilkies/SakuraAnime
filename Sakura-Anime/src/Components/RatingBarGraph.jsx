import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"; //OH and i downloaded these node_modules beacuse you can't use css to do the the thing that i wanted to do for the labels so i have to be extra and use thiiiiiiis T-T
//    Explanation:
//    CategoryScale = X-axis labels
//    LinearScale = Y-axis numbers
//    PointElement = draws points
//    Line = React component to render the chart

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels, Tooltip, Legend);



const RatingBarGraph = ({ anime1, anime2}) => {
  if (!anime1 || !anime2) {
    return <p>Loading...</p>
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            grid: {
              display: false
            },
            yAxisID: 'Rating Numbers',
            beginAtZero: true,
            labels: {
                font: {
                    family: '"Caveat", cursive',
                    size: 16
                },
                color: "#5A514C",
            }
        }
    },
    plugins: {
      legend: {
          display: false
      },
  
      datalabels: {
          anchor: "end",
          align: "top",
  
          font: {
              family: '"Caveat", cursive',
              size: 18,
              weight: "bold"
          },
  
          color: "#5A514C"
      }
  }
  };
  
  const labels = [anime1.title, anime2.title];
  const data = {
    labels: labels,
    datasets: [
      {
        label: [anime1.title + ' Rating', anime2.title + ' Rating'],
        data: [anime1.mean, anime2.mean],
        backgroundColor: ["rgb(172, 192, 99)", "rgb(217,128,134)"],
        borderColor: ["rgb(172, 192, 99)", "rgb(217,128,134)"],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="individualBar" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className="titleBadge" style={{ fontSize: "24px", marginBottom: "15px" }}>Rating vs Rating</p>
      {/* This traps the chart! */}
      <div style={{ position: "relative", width: "90%", height: "500px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RatingBarGraph;
