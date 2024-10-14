import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'


// PAGES
import Wellcome from './domain/Wellcome'


// ROOT
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wellcome />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
