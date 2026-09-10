
require('dotenv').config(); //REMEBER node.js doesn't automatically read .env files, you need to install the dotenv package to inject those varable into process.env (bash npm install dotenv)
console.log("STARTING SERVER...")

const express = require('express');
console.log("WALL MARIA (EXPRESS) BREECHED...")

// const fetch = require('node-fetch');
// console.log("FETCH BREACHED...")

const cors = require('cors');
console.log("WALL ROSE (CORS) BREACHED")

const app = express(); 
console.log("WALL SINA (EXPRESS APP) BREACHED...")

app.use(cors());

//move that CLIENT_ID into a .env file so hackers don't steal your API key
const CLIENT_ID = process.env.CLIENT_ID; 
console.log("MAL-SENPAI CHECK:", 
  CLIENT_ID 
  ? "MAL-senpai noticed us! CLIENT_ID loaded successfully >:D" 
  : "BAKA! CLIENT_ID IS UNDEFINED! Cheak .env file T-T")

// ROUTE 1: to let user pick from a list
app.get('/search', async (req, res) => { //create own backend endpoint (BECUASE OF THE STUPID API NOT ALLOWING BROWSER REQUESTS DIRECTLY)
  //   // let's my server fetch the data, then React talks to my server AKA React → MY server → MyAnimeList
  const q = req.query.q;
  const fields = req.query.fields;

  if (!CLIENT_ID) {
    console.log("NANI?! No Client ID fround in .env!");
    return res.status(500).json({error: "CLIENT_ID is missing from server domain"})
  }
  try {
    console.log(`STONE MODEL OF THE WORLD, QUERY: "${q}"...`);
      const response = await fetch(
          `https://api.myanimelist.net/v2/anime?q=${encodeURIComponent(q)}&fields=${fields}`, //raw spaces directly in the url query will break the fetch request so we use encodeURI for no bad requests (hopefully)
          { headers: { 'X-MAL-CLIENT-ID': CLIENT_ID } }
      );
      const data = await response.json();
      console.log("DATA'S MANA SIGNAL HAS BEEN LOCATED...");
      res.json(data);
  } catch (error) {
    console.error("NANI?! SEARCH ROUTE EXPLODED:", error);
      res.status(500).json({ error: 'Search failed' });
  }
});

// Get specific data for Chart.js
app.get('/anime/:id', async (req, res) => {
  const animeId = req.params.id;
  // We add the ?fields= parameter here so the API actually sends the chart data
  const fields = "id,title,main_picture,mean,rank,popularity,num_episodes,start_date,genres,num_scoring_users";
  
  try {
    console.log(`🔮 RETRIEVING DATA FOR ANIME ID: ${animeId}...`);
      const response = await fetch(
          `https://api.myanimelist.net/v2/anime/${animeId}?fields=${fields}`,
          { headers: { 'X-MAL-CLIENT-ID': CLIENT_ID } }
      );
      const data = await response.json();
      res.json(data);
  } catch (error) {
    console.error('ERROR ERROR SEARCH ROUTE ERROR:', error);
      res.status(500).json({ error: 'Failed to fetch anime details' });
  }
});

//   // let's my server fetch the data, then React talks to my server AKA React → MY server → MyAnimeList
//   const query = req.query.q || "naruto"; // default search

//   try {
//     const response = await fetch(
//       `https://api.myanimelist.net/v2/anime?q=${query}&limit=10`,
//       {
//                 headers: {
//                     'X-MAL-CLIENT-ID': CLIENT_ID
//                 }
//             }
//         );

//         const data = await response.json();
//         res.json(data);

//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch anime' });
//     }
// });

app.get('/', (req, res) => res.send("Don't worry Mom, I'm breathing and you should too. In through the nose, out through the mouth. YOU GOT THIS BABE"));

console.log("RUNNING SERVER...")
app.listen(5050, () => console.log('SERVER IS STANDING PROUD ON PORT 5050! Ready for battle! >:D'));

