// LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// PAGES
import Login from './pages/Login/Index'
import Register from './pages/Register/Index'

import Dashboard from './pages/Dashboard/Index'

// GLOBAL STYLE WITH TAILWIND CSS
import './styles/index.css'


// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>

                {/* AUTH */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* ADMIN */}
                <Route path="/" element={<Dashboard />} />

            </Routes>
        </BrowserRouter>
    </StrictMode>
)
