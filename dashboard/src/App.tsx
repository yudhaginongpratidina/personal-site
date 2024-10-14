import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'


// PAGES
import Wellcome from './domain/Wellcome'

// AUTH PAGE
import Register from './domain/auth/Register'
import Login from './domain/auth/Login'


// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wellcome />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
