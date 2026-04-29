import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import AnimeSelector from "../AnimeSelector";
ChartJS.register(ArcElement, Tooltip, Legend);



function PieChart({ anime }) {
    if (!anime) return <p>Loading Tasty Pot Pie...</p>

const options = {
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                font: {
                    family: '"Caveat", cursive',
                    size: 16,
                },
                color: "#5A514C",
            },
        },
        datalabels: {
            display: false,
        },
    },
}

const labels = anime.genres ? anime.genres.map((g) => g.name) : []; //get genre names + a little fallback in case the anime doesn't have genres (which is very unlikely but hey better safe than sorry)

//EQUAL WEIGHT DISTRIBUTIOBN FOR EACH GENRE
const dataValues = labels.map(() => 1);

const data = {
    labels: labels,
    datasets: [
        {
            label: "Genres",
            data: dataValues, // equal slices
            backgroundColor: [
                "rgb(255, 213, 214)",
                "rgb(255, 121, 119)",
                "rgb(255, 176, 98)",
                "rgb(255, 198, 142)",
                "rgb(252, 228, 79)",
                "rgb(203, 243, 158)",
                "rgb(121,219,146)",
                "rgb(150, 208, 246)",
                "rgb(116, 175, 237)",
                "rgb(173, 175, 244)",
                "rgb(211, 181, 243)",
                "rgb(255, 216, 238)",
                "rgb(255, 100, 149)",
            ],
            borderWidth: 2
        },
    ],
};
    return (
        <div className="pieContainer">
            

            <h4> {anime.title}'s Pot Pie</h4>
            <Pie data={data} options={options} />
            {/*this componenet replaces type=chartType  */}
        </div>
    );
};

export default PieChart;
