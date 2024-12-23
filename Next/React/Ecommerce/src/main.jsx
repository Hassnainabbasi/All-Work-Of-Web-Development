import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UsernameProvider from './firebase/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsernameProvider>
    <App />
    </UsernameProvider>
  </StrictMode>,
)
