// LIBS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// GLOBAL CSS
import './styles/index.css'

// PAGES
import HomePage from './pages/HomePage'

// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
