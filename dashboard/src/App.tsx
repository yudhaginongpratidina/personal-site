// LIBRARY
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// PAGES
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Account/Profile'
import UpdatePassword from './pages/Account/UpdatePassword'


// GLOBAL STYLE WITH TAILWIND CSS
import './styles/index.css'


// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>

                {/* AUTH */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* ACCOUNT */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/update-password" element={<UpdatePassword />} />

            </Routes>
        </BrowserRouter>
    </StrictMode>
)
