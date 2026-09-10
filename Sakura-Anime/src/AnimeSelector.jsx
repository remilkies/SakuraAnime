import React from "react";
import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "./App.css";

// onSelectAnime → A function passed from the parent. This lets the parent know which anime was selected.
// searchTerm → A string passed from the search bar. Whatever the user types in the search bar will be received here so we can filter the anime list.
function AnimeSelector({ searchTerm, setSearchTerm, onSelectAnime }) {
  //  animes → This is the full array of anime objects fetched from your API.
  // setAnimes → Function to update animes when data is fetched.
  // Initial value is [] → empty array, because we haven’t fetched anything yet.
  // const [animes, setAnimes] = useState([]); //hold list of anime from API

  // selectedAnime → This stores the anime object the user currently selected from the dropdown.
  // setSelectedAnime → Function to update the selected anime.
  // Initial value is null → nothing is selected when the component first renders.
  // const [selectedAnime, setSelectedAnime] = useState(null); //state to hold currently selscted anime

  const [results, setResults] = useState([]);
  // const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

//   const [activeSlot, setActiveSlot] = useState(1); //filled slots

const [selectedAnime, setSelectedAnime] = useState(null);
  // searchTerm → what user typed to filter them

  useEffect(() => {
    //useEffect is a React Hook that runs ocde after the component renders
    //Fetch data from MyAnimeList API
    if (!searchTerm || searchTerm.trim() === "" || searchTerm.length < 2) { // check if searchTerm exists BEFORE trying to .trim()
        setResults([]);
        return;
    }
    //store anime data in state

    
    const fetchAnime = async () => {
        try {
          const fields = "id,title,main_picture,mean,popularity,rank,num_episodes,num_scoring_users,genres,start_date"; //specify which fields we want to fetch from the API to save bandwidth and speed up response time
          const safeSearchTerm = encodeURIComponent(searchTerm);
          
          const res = await fetch(`http://localhost:5050/search?q=${safeSearchTerm}&fields=${fields}`);
          
        if (!res.ok) throw new Error (`💥 NANI?! HTTP ERROR, status: ${res.status}`); 

        const data = await res.json();
        setResults(data.data || []);
        console.log("✨ FRONTEND TREASURE SECURED:", data);
      
        } catch(err) {
        console.error("😭 I CAN'T FETCH ANYTHING AHHHH:", err);
      }
    };

      //to avoid api spamming
      const timer = setTimeout(fetchAnime, 300);
      return () => clearTimeout(timer);
  }, [searchTerm]); //Empty dependancy array means it onlu runs once, this is not empty so it runs multiple times >:D

  // animes is an array of all the anime objects you fetched from your API.
  // .filter() is a JavaScript array method that creates a new array containing only the items that meet a condition.
  // The condition is specified in the function inside .filter(). eg. [1,2,3,4].filter(n => n > 2); // returns [3,4]
//   const filteredAnimes = anime.filter((a) =>
//     // arrow function that gets called for every anime object {a} in the array.
//     // a.title is the title of the anime.
//     // .toLowerCase() converts both the anime title and the search term to lowercase.
//     // Whyyy? To make the search case-insensitive. So "Naruto" matches "naruto" or "NARUTO".
//     // .includes(...) checks if the anime title contains the string typed in the search bar.
//     a.title.toLowerCase().includes((searchTerm || "").toLowerCase())
//   ); // filteredAnimes is a new array that only contains anime whose title includes the search term.
  // If the search bar is empty (searchTerm = ""), .includes("") returns true for all titles, so all anime are shown.

  // handleChange is an arrow function.
  // It takes one parameter e, which is the event object that gets passed automatically when the user changes the <select> dropdown.
  // e.target is the HTML element that triggered the event — in this case, the <select> element.
  // e.target.value is the value of the selected <option>, which you set as the anime’s id in your dropdown.
  // const handleChange = (e) => { //function to handle when the user selescts an anime

  // //     animes is the array of all anime objects you fetched from your API.
  // // .find() is an array method that returns the first item in the array that meets a condition.
  // // The condition here is:
  // // a.id === Number(e.target.value)
  // // a.id is the numeric ID of the anime object.
  // // e.target.value is a string, so we convert it to a number with Number()
  // const anime = animes.find(a => a.id === Number(e.target.value)); //find the selected object based on the id

  // // selectedAnime is a React state variable.
  // // This updates your component’s state to the selected anime object.
  // // When state updates, React re-renders the component so you can display the selected anime info elsewhere.
  // setSelectedAnime(anime); //update the selectedAnime state to display its data

  // // callback function passed as a prop from a parent component.
  // // If it exists, we call it and pass the selected anime object.
  // // This allows the parent component to react to the selection, e.g., show anime details in another part of the page.
  // if (onSelectAnime) onSelectAnime(anime); //notify the parent function/component;
  // };

  const handleSelectAnime = (anime) => {

    if (onSelectAnime) onSelectAnime(anime); //contecxt
    setSearchTerm(anime.title); //Puts name in searchbar
 //fills input with selection :D
    setShowDropdown(false);

    setResults([]);

    
  };

  return (
    <>
    <Container fluid className="searchBarContainer">
            <Form>
                <Row>
                <Col xs="auto" style={{ width: "100%", maxWidth: "500px" }}> 
                        <div style={{ position: "relative", width: "100%" }}>
                            <Form.Control
                                type="text"
                                placeholder={selectedAnime?.title || "Search Anime..." }
                                value={selectedAnime?.title || searchTerm || ""} 
                                onClick={(e) => e.stopPropagation()} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                                onFocus={() => setShowDropdown(true)} 
                                className="searchBar"
                            />

                            {showDropdown && results.length > 0 && (
                                <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                                    {results.map((anime) => (
                                        <div
                                            key={anime.node.id}
                                            className="dropdown-item"
                                            onClick={() => handleSelectAnime(anime.node)}
                                        >
                                            {anime.node.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>

      {/* Every time the user selects a different option, the handleChange function is called.*/}
      {/* <select onChange={handleChange} style={{width: "100%", padding: "10px", fontSize: "16px"}}> */}
      {/* <div style={{ position: "relative" }}>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onFocus={() => setShowDropdown(true)}
    placeholder="Search anime..."
  />

{showDropdown && results.length > 0 && (
    <div className="dropdown">
      {results.map((anime) => (
        <div
          key={anime.node.id}
          className="dropdown-item"
          onClick={() => handleSelectAnime(anime.node)}
        >
          {anime.node.title}
        </div>
      ))}
    </div>
  )}
</div> */}

      {/* Default option */}
      {/* <option value="">Choose an Anime</option> */}

      {/* filteredAnimes = search-filtered array of anime objects
.map() creates an <option> element for each anime.
key={a.id} → React requires a unique key for each item in a list for  rendering.
value={a.id} →  what e.target.value will be when the user selects it.
{a.title} →  what the user actually sees in the dropdown. */}
      {/* map through the array and create and option for each anime */}
      {/* {filteredAnimes.map(a => (
            <option key={a.id} value={a.id}>
                {a.title}
            </option>
        ))} */}
    </>
  );
}

export default AnimeSelector;
