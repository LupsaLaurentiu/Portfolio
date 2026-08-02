import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import "./index.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ReactLenis
    root
    options={{
      smoothWheel: true,
      wheelMultiplier: 0.9,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ReactLenis>
)
