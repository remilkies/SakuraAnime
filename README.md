# 🌸 Sakura Anime

> *A delicate blend of data and design — where anime meets elegant interaction.*

---

<img src="/Sakura-Anime/src/assets/SakuraAnime/sakuraBranch.png" align="left" width="70%" height="auto">
## ✨ Overview

**Sakura Anime** is a visually immersive web application that transforms anime data into an interactive experience. Inspired by the softness and flow of falling sakura petals, this project combines **real-time search**, **data visualisation**, and **clean UI design** into one cohesive platform.

It's not just about finding anime - it’s about *experiencing* it >:D

---

## 🌺 Core Features

### 🔍  Search

Search for anime titles in real time through a custom backend connected to the MyAnimeList API.

### 🥧 Genre Visualisation

Beautiful pie charts dynamically display genre distributions, turning raw data into meaningful visuals.

### ⚔️ Anime Comparison *(In Progress)*

Compare multiple anime across ratings, popularity, and structure.

### 🎨 Sakura-Inspired Design

Soft, aesthetic visuals inspired by cherry blossoms, focusing on user experience and visual harmony.

---

## 🛠️ Tech Stack

### 🌸 Frontend

* React (Vite)
* Chart.js / react-chartjs-2
* Custom CSS Styling

### 🌿 Backend

* Node.js
* Express
* CORS
* node-fetch

### 🌐 API

* MyAnimeList API (via secure backend routing)

---

## 🧠 Application Flow

```text
User Input → React Frontend → Express Backend → MyAnimeList API
                                                      ↓
                                    (Raw JSON Data Returned)
                                                      ↓
                              Express Backend (Proxy & Forwarding)
                                                      ↓
                              React Frontend (Data Processing in Context)
                                                      ↓
                                Visual Rendering (Chart.js & UI)
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sakura-anime.git
cd sakura-anime
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start backend server

```bash
node server.js
```

Server runs on:

```
http://localhost:5050
```

---

### 4. Start frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.cjs` file:

```env
MAL_CLIENT_ID=your_client_id_here
```

---

## 📊 Example API Request

```bash
GET http://localhost:5050/anime?q=naruto
```

---

## 🎯 Purpose of the Project

* Explore **full-stack development** (React + Express)
* Safely integrate external APIs using a backend
* Transform data into **interactive visual storytelling**
* Develop a strong **UI/UX design identity**

---

🌸 The REMByte Protocol

The REMByte Protocol (REMByte) represents a design-forward approach to development where:

Code is structured with intention
Interfaces are crafted as experiences
There will definitly be no Syntax errors

REMByte is not just about building applications — it’s about engineering atmosphere >:D


---

## 👩‍💻 Author

Created by **REMByte** <3
*Blending UX, development, and storytelling through code.*

---

## 🌸 Closing Note

> *Like sakura petals, great experiences are light, beautiful, and memorable.*

---
