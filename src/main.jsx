import { createRoot } from 'react-dom/client'
import "./main.css"
import Header from './Header'
import Hero from "./Hero"
import Skills from './Skills'
import Websites from './Websites'


const Main=()=>{
    return <>
    <Header/>
    <Hero/>
    <Skills/>
    <Websites/>
    </>
}

createRoot(document.getElementById('root')).render(
    <Main/>
)
