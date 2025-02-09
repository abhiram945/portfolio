import React, { useState } from 'react'
import "./styles/header.css"
function Header() {
    const [activeLink, setActiveLink]=useState("home");

  return (
    <header className=''>
        <h1 className=''>A.</h1>
        <nav className=''>
            {["home","skills","websites","apps","projects","about","contact"].map((link,index)=>
                <a key={index} href={`#${link}`} className={link===activeLink ? "active":""} onClick={()=>setActiveLink(link)}>{link.toUpperCase()}</a>
            )}
        </nav>
    </header>
  )
}

export default Header