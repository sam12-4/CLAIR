import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    {/* <StrictMode> */}
      <App />
      <Toaster  closeButton richColors position="bottom-right"/>
    {/* </StrictMode>, */}
  </BrowserRouter>
)
