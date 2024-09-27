import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/i18n.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from './components/ui/tooltip.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <TooltipProvider>
    <BrowserRouter>
        <React.Suspense fallback="loading...">
          <App />
        </React.Suspense>
    </BrowserRouter>
  </TooltipProvider>
)
