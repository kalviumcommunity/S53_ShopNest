import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Components/i18n.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <React.Suspense fallback="loading...">
        <App />
      </React.Suspense>
    </React.StrictMode>
  </BrowserRouter>
)
