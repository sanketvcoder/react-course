import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './Components/index.jsx'


createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>
)
