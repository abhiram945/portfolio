import React, { useState, useEffect, useRef } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import ReactDOM from 'react-dom/client';
import './App.css';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [menu, setMenu] = useState(0);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
        <div className='logo-container'>
          <h2>Abhi<span>.</span></h2>
        </div>
        <nav>
          <a key='home' href='#home' className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a>
          <a key='projects' href='#projects' className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleLinkClick('#projects')}>Projects</a>
          <a key='about' href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => handleLinkClick('#about')}>About</a>
          <a key='contact' href='#contact' className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleLinkClick('#contact')}>Contact</a>
        </nav>
        <div className='menu-icon-container'>
          <i className={`fa-solid fa-${menu%2 === 0 ? 'bars' : 'x'}`} onClick={(e)=>{
            e.preventDefault();
            document.querySelector('nav').classList.toggle('active-nav');
            setMenu(menu+1);
            }}></i>
        </div>
    </header>
  );
};

const Main = () =>{
    const [typedText] = useTypewriter({
      words:['Frontend Developer','Youtuber','Music creator','Tech enthusiast'],
      loop:{},
      typeSpeed:100,
      delaySpeed:1000,
    });
  return(
    <main id='home'>
      <div className='hero-details-container'>
        <p>Hello, I Am</p>
        <h1>ABHIRAM</h1>
        <p>And I'm a <span>{typedText}</span></p>
        <p>I'm passionate about WebDevelopment and AI&ML, Committed learner,
          deadline-driven, Love teaching, Thrive on collaboration,Music enthusiast and mixer,
          Ready to contribute a dynamic skill set for innovation.
        </p>
        <button>Download Resume</button>
      </div>
      <div className="hero-image-container">
        <img src='images/heroImage.png' alt='hero'></img>
      </div>
    </main>
  );
}

const Projects = () =>{
  useEffect(() => {
    const projects = document.querySelectorAll('.project');
    document.addEventListener('scroll', () => {
      projects.forEach((project) => {
        const bounds = project.getBoundingClientRect();
        if (bounds.bottom < window.innerHeight+300) {
          project.classList.add('project-translatex');
        } else {
          project.classList.remove('project-translatex');
        }
      });
    });
    return () => {};
  }, []);
  return(
    <div className="projects-container" id="projects">
        <p>Explore through</p>
        <h2>My projects</h2>
        <div className="projects">
            <div className="project">
                <h2>Airport 3D Visualization</h2>
                <p>Category: 3D Designing & Visualization</p>
                <img src="images/airport.jpg" alt='airport'/>
            </div>
            <div className="project">
                <h2>Eye Controlled Mouse</h2>
                <p>Category: <b>Machine Learning</b></p>
                <img src="images/eyeMouse.jpg" alt='etemouse'/>
            </div>
            <div className="project">
                <h2>Automatic fire alert & prevention system</h2>
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
                <h2>Live Image Describer</h2>
                <p>Category: <b>Deep Learning</b></p>
                <img src="images/imagedescriber.jpg" alt='solarenergy'/>
            </div>
            <div className="project">
                <h2>Protein Structure Prediction</h2>
                <p>Category: <b>Deep Learning</b></p>
                <img src="images/proteinStructure.jpg" alt='protein structure'/>
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
  useEffect(() => {
    const aboutbox = document.querySelectorAll('.about-box');
    document.addEventListener('scroll', () => {
      aboutbox.forEach((box) => {
        const bounds = box.getBoundingClientRect();
        if (bounds.bottom < window.innerHeight+175) {
          box.classList.add('zoom');
        } else {
          box.classList.remove('zoom');
        }
      });
    });
    scrollRef.current.addEventListener('wheel', (event) => {
      event.preventDefault(); // Prevent scrolling
    });
    return () => {};
  }, []);
  const scrollRef = useRef(null);
  
  const scrollToLeft=()=>{
    const scrollAmount = document.querySelector(".scroll-container img").width;
    scrollRef.current.scrollLeft -=scrollAmount;
  }
  const scrollToRight=()=>{
    const scrollAmount = document.querySelector(".scroll-container img").width;
    scrollRef.current.scrollLeft +=scrollAmount;
  }
  return(
    <div className="about-container" id="about">
      <p>Get to know more</p>
      <h2>About Me</h2>
      <div className='aboutMe'>
        <p>
          I'm Abhiram from Andhra Pradesh, currently pursuing a B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning at Kalasalingam University.
          I recently earned a 5-star gold badge in Java on Hackerrank and presented a paper at IEEE 6th International Conference.
          Proficient in C, Python, and Java, with a focus on web development using HTML, CSS, JavaScript, and React Js.
          Skilled in communication, multitasking, and team management, I aim to contribute to innovative projects as a developer.
          Beyond tech, I enjoy music and stay updated on emerging trends in technology.
        </p>
      </div>
      <div className='certificates-container'>
        <img src='images/leftScroll.svg' className='leftArrow' alt='leftScroll' onClick={()=>{scrollToLeft()}}/>
        <div className='scroll-container' ref={scrollRef}>
          <img src='images/ieee.png' alt='IEEE publication'/>
          <img src='images/coursera_ibm.png' alt='IBM certification on coursera'/>
          <img src='images/daa_codechef.png' alt='DAA_CodeChef'/>
          <img src='images/oracle.png' alt='oracle_DB foundations'/>
          <img src='images/MS-365-fundamentals.png' alt='MS 365 fundamentals'/>
          <img src='images/webdevelopment_internship.jpg' alt='webdevelopment internship'/>
        </div>
        <img src='images/rightScroll.svg' className='rightArrow' alt='rightScroll' onClick={()=>{scrollToRight()}}/>
      </div>
      <div className="about-details-container">
        <div className="about-box">
          <h3>Programming in</h3><br/>
          <p className="language"><span>&#10004;</span><b>C (intermediate)</b></p>
          <p className="language"><span>&#10004;</span><b>ML in Python</b></p>
          <p className="language"><span>&#10004;</span><b>DSA in Java</b></p>
        </div>
        <div className="about-box">
          <h3>Development in</h3><br/>
          <p className="language"><span>&#10004;</span><b>Html</b></p>
          <p className="language"><span>&#10004;</span><b>CSS & Bootsrap</b></p>
          <p className="language"><span>&#10004;</span><b>JavaScript</b></p>
          <p className="language"><span>&#10004;</span><b>MERN (currently learning)</b></p>
        </div>
      </div>
    </div>
  );
}

const Contact = () =>{
  return(
    <footer id='contact'>
      <div className="footer-container" id="contact">
        <h2 >Get in touch</h2>
        <div className="footer-links-container">
          <a href="https://www.linkedin.com/in/s-abhiramreddy-597346260" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
          <a href="https://github.com/abhiram945" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
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
    <Nav/>
    <Main/>
    <Projects/>
    <About/>
    <Contact/>
  </>
);