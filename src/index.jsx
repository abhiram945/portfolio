import React, { useState, useEffect, useMemo } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import './App.css';
import Imageslider from './swiper';
import ReactDOM from 'react-dom/client';

const Nav = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [menu, setMenu] = useState(0);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenu(menu + 1);
        document.querySelector('nav').classList.remove('active-nav');
    };

    useEffect(() => {
        handleLinkClick('#home');
    }, []);

    return (
        <header>
            <div className='logo-container'>
                <h2>A<span>.</span></h2>
            </div>
            <nav>
                <a href='#home' className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a>
                <a href='#projects' className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleLinkClick('#projects')}>Projects</a>
                <a href='#websites' className={activeLink === '#websites' ? 'active' : ''} onClick={() => handleLinkClick('#websites')}>Websites</a>
                <a href='#apps' className={activeLink === '#apps' ? 'active' : ''} onClick={() => handleLinkClick('#apps')}>Apps</a>
                <a href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => handleLinkClick('#about')}>About</a>
                <a href='#contact' className={activeLink === '#contact' ? 'active' : ''} onClick={() => handleLinkClick('#contact')}>Contact</a>
            </nav>
            <div className='menu-icon-container'>
                <i className={`fa-solid fa-${menu % 2 === 0 ? 'x' : 'bars'}`} onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('nav').classList.toggle('active-nav');
                    setMenu(menu + 1);
                }}></i>
            </div>
        </header>
    );
};

const Main = () => {
    const typewriterConfig = useMemo(() => ({
        words: ['Web Developer', 'App Developer', 'Music Mixer', 'DSA Enthusiast'],
        loop: true, 
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    }), []);
    const [typedText] = useTypewriter(typewriterConfig);

    const [lefts,setLefts]=useState(Array.from({length:25}).map((i,j)=>Math.floor(Math.random()*95)));
    const [tops, setTops] = useState(Array.from({length:25}).map((i,j)=>Math.floor(Math.random()*50)));
    useEffect(()=>{
        const timer = setInterval(() => {
            setTops(prevTops => 
                prevTops.map(top => (top >= 99 ? Math.floor(Math.random() * 40) : top + 1))
            );
        }, 25);
        setInterval(() => {
            setLefts(Array.from({length:10}).map((i,j)=>Math.floor(Math.random()*95)));
        }, 2000);
        return ()=>clearInterval(timer);
    },[]);
    

    return (
        <main id='home'>
            {Array.from({length:25}).map((l,i)=><div key={i} className='lineContainer' style={{left:lefts[i]+'vw',top:tops[i]+'%', opacity:tops[i]<=10 ? '0':'1'}}></div>)}
            <div className='hero-details-container'>
                <p>Hello, I Am</p>
                <h1>ABHIRAM</h1>
                <p>And I'm a <span>{typedText}</span></p>
                <button onClick={() => window.open('images/abhiram1.pdf')}>Download Resume</button>
            </div>
            <div className="hero-image-container">
                <img src='images/heroImage.png' alt='hero'></img>
            </div>
        </main>
    );
}

const Projects = () => {
    useEffect(() => {
        const handleScroll = () => {
            const projects = document.querySelectorAll('.project');
            projects.forEach((project) => {
                const bounds = project.getBoundingClientRect();
                let innerWindowWidth = window.innerWidth;
                innerWindowWidth = innerWindowWidth < 450 ? 350 : 200
                if (bounds.bottom < window.innerHeight + innerWindowWidth) {
                    project.classList.add('project-translatex');
                } else {
                    project.classList.remove('project-translatex');
                }
            });
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="projects-container" id="projects">
            <p>Explore through</p>
            <h2>My projects that I've developed so far</h2>
            <div className="projects">
                <div className="project">
                    <h2>Airport 3D Visualization</h2>
                    <p>Category: 3D Designing & Visualization</p>
                    <img src="images/airport.jpg" alt='airport' />
                    <a href='https://cad.onshape.com/documents/8af3ba8dc3b1da7105360cc5/w/9814d83c236429d7c5a1aebf/e/2bc07a74a5f5cbe81fdf7b89?renderMode=0&uiState=663903c22caa37506675e682' className='goTo'>View Live &#8599;</a>
                </div>
                <div className="project">
                    <h2>Eye Controlled Mouse</h2>
                    <p>Category: <b>Machine Learning</b></p>
                    <img src="images/eyeMouse.jpg" alt='etemouse' />
                    <a href='https://github.com/abhiram945/projects/blob/main/Eye-controlled-mouse.py' className='goTo'>View on Github &#8599;</a>
                </div>
                <div className="project">
                    <h2>Automatic fire alert & prevention system</h2>
                    <p>Category: Internet Of Things</p>
                    <img src="images/fireAlert.jpg" alt='firealert' />
                    <a href='https://www.tinkercad.com/things/doYp9ArymjV-fire-alert-and-prevention?sharecode=rL59rs00GOusw3Peacb9iFmX94w7YBoDk8-PCxZRsJQ' className='goTo'>View Live &#8599;</a>
                </div>
                <div className="project">
                    <h2>Image Forgery Detection</h2>
                    <p>Category: <b>Machine Learning</b></p>
                    <img src="images/imageForgery.jpg" alt='imageforgery' />
                    <a href='https://github.com/abhiram945/projects-cse/blob/main/Image-forgery-detection.py' className='goTo'>View on Github &#8599;</a>
                </div>
                <div className="project">
                    <h2>Line Following Robot</h2>
                    <p>Category: Robotics</p>
                    <img src="images/lineFollowing.jpg" alt='linefollowingrobot' />
                    <a href='https://github.com/abhiram945/projects-cse/blob/main/Automatic%20Line%20Following%20Robot%20for%20border%20surveillance.pdf' className='goTo'>View on Github &#8599;</a>
                </div>
                <div className="project">
                    <h2>Solar Energy Prediction</h2>
                    <p>Category: <b>Machine Learning</b></p>
                    <img src="images/solarEnergy.jpg" alt='solarenergy' />
                    <a href='https://github.com/abhiram945/projects-cse/blob/main/Solar-energy-prediction-from-solar-pannels.py' className='goTo'>View on Github &#8599;</a>
                </div>
                <div className="project">
                    <h2>Live Image Describer</h2>
                    <p>Category: <b>Deep Learning</b></p>
                    <img src="images/imagedescriber.jpg" alt='solarenergy' />
                    <a href='https://github.com/abhiram945/projects-cse/blob/main/Live-image-describer.py' className='goTo'>View on Github &#8599;</a>
                </div>
                <div className="project">
                    <h2>Protein Structure Prediction</h2>
                    <p>Category: <b>Deep Learning</b></p>
                    <img src="images/proteinStructure.jpg" alt='protein structure' />
                    <a href='https://github.com/abhiram945/projects-cse/blob/main/Protein-structure-prediction-using-RNN.py' className='goTo'>View on Github &#8599;</a>
                </div>
            </div>
            <div className="websites-container" id='websites'>
                <h2>MERN Projects</h2>
                <div className="websites">
                    <div className="website">
                        <img src="images/finbook1.png" alt="finbook1" />
                        <hr />
                        <img src="images/finbook2.png" alt="finbook2" />
                        <a href="https://finbook.vercel.app" target='_blank' rel="noopener noreferrer">Visit FinBook &#8599;</a>
                    </div>
                    <div className="website">
                        <img src='images/dimera.png' alt='dimera' />
                        <a href='https://dimera.vercel.app' target='_blank' rel="noopener noreferrer">Visit Dimera &#8599;</a>
                    </div>
                </div>
            </div>
            <div className='appsContainer' id='apps'>
                <h2>Apps that I've developed</h2>
                <p>Check out the <span>DIMERA</span> app developed using REACT NATIVE with EXPO</p>
                <div className='appImagesContainer'>
                    <img src='https://dimera.vercel.app/assets/app1.jpg' alt='Dimera-app-1' />
                    <a href='https://dimera.vercel.app/app' target='_blank' rel="noopener noreferrer">Download now</a>
                    <img src='https://dimera.vercel.app/assets/app2.jpg' alt='Dimera-app-2' />
                </div>
            </div>
        </div>
    );
}

const About = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutbox = document.querySelectorAll('.about-box');
            aboutbox.forEach((box) => {
                const bounds = box.getBoundingClientRect();
                if (bounds.bottom < window.innerHeight + 175) {
                    box.classList.add('zoom');
                } else {
                    box.classList.remove('zoom');
                }
            });
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="about-container" id="about">
            <p>Get to know more</p>
            <h2>About Me</h2>
            <div className='aboutMe'>
                <p>
                    I'm Abhiram from Andhra Pradesh, currently pursuing a B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning at Kalasalingam University.
                    I've presented a Research Paper at IEEE 6th International Conference on IMOUSE.
                    Proficient in Java, DSA with JAVA and WebScraping using PYTHON with a focus on web development using MERN stack.
                    Skilled in communication, multitasking, and team management, I aim to contribute to innovative projects as a developer.
                    Beyond tech, I enjoy music and I create multi dimensional music, also stay updated on emerging trends in technology.
                </p>
            </div>
            <Imageslider />
            <div className="about-details-container">
                <div className="about-box">
                    <h3>Programming in</h3><br />
                    <p className="language"><span>&#10004;</span><b>DSA in Java</b></p>
                    <p className="language"><span>&#10004;</span><b>Web Scraping with Python</b></p>
                    <p className="language"><span>&#10004;</span><b>C (intermediate)</b></p>
                </div>
                <div className="about-box">
                    <h3>Development in</h3><br />
                    <p className="language"><span>&#10004;</span><b>Html, CSS and JavaScript</b></p>
                    <p className="language"><span>&#10004;</span><b>MERN Stack</b></p>
                    <p className="language"><span>&#10004;</span><b>React Native with Expo</b></p>
                </div>
            </div>
        </div>
    );
}

const Contact = () => {
    return (
        <footer id='contact'>
            <div className="footer-container" id="contact">
                <h2 >Get in touch</h2>
                <div className="footer-links-container">
                    <a href="https://www.linkedin.com/in/s-abhiramreddy" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    <a href="https://github.com/abhiram945" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
                    <a href="mailto:abhiram94567@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
                </div>
                <p>Made by Abhi with React Js</p>
            </div>
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Nav />
        <Main />
        <Projects />
        <About />
        <Contact />
    </>
);
