// LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// GLOBAL STYLE WITH TAILWIND CSS
import './styles/index.css'

// PAGES
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
