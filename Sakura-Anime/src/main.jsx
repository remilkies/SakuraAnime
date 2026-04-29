import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AnimeProvider } from './Components/AnimeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </StrictMode>,
)

