import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels, Tooltip, Legend);

const EpisodesBarGraph = ({ anime1, anime2 }) => {
    if (!anime1 || !anime2) {
        return <p>Loading...</p>;
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
                labels: {
                    font: {
                        family: '"Caveat", cursive',
                        size: 16,
                    },
                    color: "#5A514C",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                anchor: "end",
                align: "top",
                font: {
                    family: '"Caveat", cursive',
                    size: 18,
                    weight: "bold",
                },
                color: "#5A514C",
            },
        },
    };

    const labels = [anime1.title, anime2.title];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Episodes", // FIX: Changed from `labels` array to a string
                data: [anime1.num_episodes, anime2.num_episodes],
                backgroundColor: ["rgb(172, 192, 99)", "rgb(217,128,134)"],
                borderColor: ["rgb(172, 192, 99)", "rgb(217,128,134)"],
                borderWidth: 1,
            },
        ],
    };

    return (

        <div className="individualBar">
            <p className="titleBadge" style={{ fontSize: "24px", marginBottom: "15px" }}>Episodes vs Episodes</p>
            
            
            <div style={{ position: "relative", width: "100%", height: "400px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default EpisodesBarGraph;