import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import "./main.css"

import Portfolio from "./pages/portfolio"
import Docs from './pages/Docs'


const Main = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/docs/:doc' element={<Docs />} />
            <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
}
createRoot(document.getElementById('root')).render(
    <Main />
)
