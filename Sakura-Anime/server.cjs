console.log("STARTING SERVER...")

const express = require('express');
console.log("EXPRESS BREACHED...")

// const fetch = require('node-fetch');
// console.log("FETCH BREACHED...")

const cors = require('cors');
console.log("CORS BREACHED...")

const app = express(); 
console.log("EXPRESS APP BREACHED...")

app.use(cors());

//move that CLIENT_ID into a .env file so hackers don't steal your API key
const CLIENT_ID = process.env.CLIENT_ID; 

// ROUTE 1: to let user pick from a list
app.get('/search', async (req, res) => { //create own backend endpoint (BECUASE OF THE STUPID API NOT ALLOWING BROWSER REQUESTS DIRECTLY)
  //   // let's my server fetch the data, then React talks to my server AKA React → MY server → MyAnimeList
  const q = req.query.q;
  const fields = req.query.fields;
  try {
      const response = await fetch(
          `https://api.myanimelist.net/v2/anime?q=${q}&fields=${fields}`,
          { headers: { 'X-MAL-CLIENT-ID': CLIENT_ID } }
      );
      const data = await response.json();
      res.json(data);
  } catch (error) {
      res.status(500).json({ error: 'Search failed' });
  }
});

// Get specific data for Chart.js
app.get('/anime/:id', async (req, res) => {
  const animeId = req.params.id;
  // We add the ?fields= parameter here so the API actually sends the chart data
  const fields = "id,title,main_picture,mean,rank,popularity,num_episodes,start_date,genres,num_scoring_users";
  
  try {
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
app.listen(5050, () => console.log('Server running on port 5050'));

