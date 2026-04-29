import React, { createContext, useState} from "react";
// import { Children, use, useState } from "react"; //old code/future code

//The AimeContext is like the Big Boss of the company. The Boss holds the official folders for anime1 and anime2 and shares them with all the workers (Home.jsx, Compare.jsx, AnimeSelector.jsx). 
//React Context make data stored gloabally so you can access it anywhere in the app 
export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {

    const [anime1, setAnime1] = useState(null);
    const [anime2, setAnime2] = useState(null);

    // const [anime1, setAnime1] = useState(() => { //I'm moving on from this for now bc the clear button isn't neccicary if we include that refreashing the page clears the data, but I'll come back to this after submission o7
    //     const storedAnime1 = localStorage.getItem("anime1");
    //     return storedAnime1 ? JSON.parse(storedAnime1) : null;
    // });
    // const [anime2, setAnime2] = useState(() => {
    //     const storedAnime2 = localStorage.getItem("anime2");
    //     return storedAnime2 ? JSON.parse(storedAnime2) : null;
    // });


    // useEffect(() => {
    //     if (anime1) {
    //         localStorage.setItem("anime1", JSON.stringify(anime1));
    //     } else {
    //         localStorage.removeItem("anime1");
    //     }
    // }, [anime1]);

    // useEffect(() => {
    //     if (anime2) {
    //         localStorage.setItem("anime2", JSON.stringify(anime2));
    //     } else {
    //         localStorage.removeItem("anime2");
    //     }
    // }, [anime2]);

    return (
        <AnimeContext.Provider value={{ anime1, setAnime1, anime2, setAnime2}}>
            {children}
        </AnimeContext.Provider>

    );
};