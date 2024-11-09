import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/main.css'
import './styles/indicators.css'

createRoot( document.getElementById( 'root' ) ).render(
    <StrictMode>
        <App/>
    </StrictMode>
)