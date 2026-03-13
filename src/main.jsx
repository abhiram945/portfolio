import { createRoot } from 'react-dom/client'
import "./main.css"
import Header from './sections/Header'
import Hero from "./sections/Hero"
import Skills from './sections/Skills'
import Websites from './sections/Websites'
import Apps from './sections/Apps'
import AboutAndContact from './sections/AboutAndContact'
import DocumentRender from './components/DocumentRender'


const Main = () => {
    const search = window.location.search;
    const param = new URLSearchParams(search);
    const documentName = param.get('doc')
    return documentName ? <DocumentRender documentName={documentName}/>:<>
        <Header />
        <Hero />
        <Skills />
        <Websites />
        <Apps />
        <AboutAndContact />
    </>
}

createRoot(document.getElementById('root')).render(
    <Main />
)
