import { createRoot } from 'react-dom/client'
import "./main.css"
import Portfolio from "./pages/portfolio"
import Docs from './pages/Docs'


const Main = () => {
    const pathName = window.location.pathname
    return pathName==="/" ? <Portfolio/> : pathName.startsWith("/docs") ? <Docs docName={pathName.split("/")[2]}/> : window.location="/"
}

createRoot(document.getElementById('root')).render(
    <Main />
)
