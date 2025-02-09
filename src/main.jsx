import { createRoot } from 'react-dom/client'
import "./main.css"
import Header from './Header'
import Hero from "./Hero"
import Skills from './Skills'
import Websites from './Websites'
import Apps from './Apps'
import AboutAndContact from './AboutAndContact'


const Main=()=>{
    return <>
    <Header/>
    <Hero/>
    <Skills/>
    <Websites/>
    <Apps/>
    <AboutAndContact/>
    </>
}

createRoot(document.getElementById('root')).render(
    <Main/>
)
