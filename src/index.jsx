import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
        <div className='menuBarcontainer'>
          <h2>Abhiram</h2>
          <i class="fa-solid fa-bars" onClick={()=>{document.querySelector('.anchorTagscontainer').classList.toggle('anchorTagscontainerActive')}}></i>
        </div>
        <div className='anchorTagscontainer'>
          <a key='home' href='#home' className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a>
          <a key='projects' href='#projects' className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleLinkClick('#projects')}>Projects</a>
          <a key='about' href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => handleLinkClick('#about')}>About</a>
          <a key='contact' href='#contact' className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleLinkClick('#contact')}>Contact</a>
        </div>
    </header>
  );
};

const Home = () =>{
  return(
    <>
      <Nav/>
      <main id='home'>
        <div className = "hero-container">
          <div className="hero-image">
            <img src='images/coding.jpg' alt='hero'></img>
          </div>
          <div className="hero-details-container">
            <img src='images/hero-laptop.jpg' alt='hero-laptop'></img>
            <div className='hero-details'>
              <p>Hi! I Am</p>
              <h1>ABHIRAM</h1>
              <p>Aiming to become an AIML Engineer</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const Projects = () =>{
  return(
    <div className="projects-container" id="projects">
        <p>Explore through</p>
        <h2>My projects</h2>
        <div className="projects">
            <div className="project">
                <h2>Airport 3D Visualization</h2>
                <p>Category: Engineering Visualization</p>
                <img src="images/airport.jpg" alt='airport'/>
            </div>
            <div className="project">
                <h2>Eye Controlled Mouse</h2>
                <p>Category: <b>Machine Learning</b></p>
                <img src="images/eyeMouse.jpg" alt='etemouse'/>
            </div>
            <div className="project">
                <h2>Automatic fire alert and prevention system</h2>
                <p>Category: Internet Of Things</p>
                <img src="images/fireAlert.jpg" alt='firealert'/>
            </div>
            <div className="project">
                <h2>Image Forgery Detection</h2>
                <p>Category: <b>Machine Learning</b></p>
                <img src="images/imageForgery.jpg" alt='imageforgery'/>
            </div>
            <div className="project">
                <h2>Line Following Robot</h2>
                <p>Category: Robotics</p>
                <img src="images/lineFollowing.jpg" alt='linefollowingrobot'/>
            </div>
            <div className="project">
                <h2>Solar Energy Prediction</h2>
                <p>Category: <b>Machine Learning</b></p>
                <img src="images/solarEnergy.jpg" alt='solarenergy'/>
            </div>
            <div className="project">
                <h2>Live Image describer</h2>
                <p>Category: <b>Deep Learning</b></p>
                <img src="images/imagedescriber.jpg" alt='solarenergy'/>
            </div>
        </div>
        <div className="websites-container">
            <h2>React Js Projects</h2>
            <div className="websites">
              <a className="website " href="https://abhiram945.github.io/8d" target='_blank' rel="noopener noreferrer">
                <img src="images/8dsongs.png" alt="8dsongs"/>
              </a>
              <a className="website todo" href="https://www.github.com/abhiram945" target='_blank' rel="noopener noreferrer">
                <img src="images/todo.png" alt="todo"/>
              </a>
            </div>
        </div>
    </div>
  );
}
const About = () =>{
  return(
    <div className="about-container" id="about">
      <p>Get to know more</p>
      <h2>About Me</h2>
      <div className='certificates-container'>
        <div className='scroll-container'>
          <img src='images/coursera_ibm.png' alt='IBM certification on coursera'/>
          <img src='images/daa_codechef.png' alt='DAA_CodeChef'/>
          <img src='images/ieee.png' alt='IEEE publication'/>
          <img src='images/oracle.png' alt='oracle_DB foundations'/>
          <img src='images/webdevelopment_internship.jpg' alt='webdevelopment internship'/>
          <img src='images/MS-365-fundamentals.png' alt='MS 365 fundamentals'/>
        </div>
      </div>
      <div className="about-details-container">
        <div className="box">
          <h3>Education</h3><br/>
          <p><b>Pursuing B.Tech CSE AIML stream</b></p>
        </div>
        <div className="box">
          <h3>Goal</h3><br/>
          <p><b>Aiming to become an AIML Engineer</b></p>
        </div>
        <div className="box">
          <h3>Programming in</h3><br/>
          <p className="language"><span>&#10004;</span><b>C</b></p>
          <p className="language"><span>&#10004;</span><b>Python</b></p>
          <p className="language"><span>&#10004;</span><b>Java</b></p>
        </div>
        <div className="box">
          <h3>Web Suite</h3><br/>
          <p className="language"><span>&#10004;</span><b>Html</b></p>
          <p className="language"><span>&#10004;</span><b>CSS - Bootsrap</b></p>
          <p className="language"><span>&#10004;</span><b>Js - React Js</b></p>
        </div>
      </div>
    </div>
  );
}

const Contact = () =>{
  return(
    <footer id='contact'>
      <div className="footer-container" id="contact">
        <h2 >Contact Me</h2>
        <div className="footer-links-container">
          <a href="https://www.linkedin.com/in/s-abhiramreddy-597346260" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
          <a href="https://github.com/webdev4644" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
          <a href="mailto:1137339.s.abhiramreddy@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
        </div>
        <p>Made by Abhi with React Js</p>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home/>
    <Projects/>
    <About/>
    <Contact/>
  </>
);