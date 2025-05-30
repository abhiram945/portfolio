import React from 'react'
import "./styles/aboutAndContact.css"
import CustomSwiper from "./CustomSwiper"
const AboutAndContact = () => {
    return (<>
        <div className='aboutSectionContainer' id='about'>
            <h2 className='heading'>About <span>Me</span></h2>
            <p className="description">
                I'm <span>Abhiram</span>, a B.Tech CSE (AI & ML) graduate from Kalasalingam University, Tamil Nadu, passionate about MERN stack web development and React Native (Expo) app development.
            </p>
            <p className="description">
                Strong in Java and familiar with C, Python, and SQL, I love solving complex problems and optimizing performance. Excited to explore and create innovative digital solutions! 🚀
            </p>
            <p className='description'>
                I specialize in building real-time applications to automate daily tasks while staying updated with the latest tech trends.
            </p>
            <div className="customSwiperContainer">
                <CustomSwiper imagesArray={["ieee","ieee2", "MS-365-fundamentals", "coursera_ibm", "oracle"]} location="about" auto={true} />
            </div>
        </div>
        <div className='contactSectionContainer' id='contact'>
            <h2 className='heading'>Get In Touch</h2>
            <p className='subHeading'>Liked my Profile & Work...?</p>
            <p className='subHeading'>Take a Coffee & Connect with me...</p>
            <div className='linksContainer'>
                <a className='linkedIn' href='https://www.linkedin.com/in/s-abhiramreddy/' target='_blank'><p className=''>Linked </p><img src='/images/hero/linkedIn.svg' alt='linked In' /></a>
                <a className='gmail' href='mailto:abhiramdev945@gmail.com' target='_blank'><p>Mail</p><img src='/images/about/gmail.svg' alt='gmail' /></a>
            </div>
        </div>

    </>
    )
}

export default AboutAndContact