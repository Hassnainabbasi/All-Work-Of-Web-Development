import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddToCartProvider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddToCartProvider>
    <App />

    </AddToCartProvider>
  </StrictMode>,
)
