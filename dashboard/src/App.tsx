// LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// GLOBAL STYLE WITH TAILWIND CSS
import './styles/index.css'

// AUTH PAGE
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'

// ADMIN PAGE
import DashboardPage from './pages/DashboardPage'

// ERROR PAGE
import NotFound from './pages/Errors/NotFound'
import Unauthorized from './pages/Errors/Unauthorized'
import Maintenance from './pages/Errors/Maintenance'

// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/dashboard" element={<DashboardPage/>} />

                <Route path="/unauthorized" element={<Unauthorized/>}/>
                <Route path="/maintenance" element={<Maintenance/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
