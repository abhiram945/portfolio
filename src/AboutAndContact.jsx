import React from 'react'
import "./styles/aboutAndContact.css"
import CustomSwiper from "./CustomSwiper"
import useInView from "./useInView";
const AboutAndContact = () => {
    // About section elements
    const [aboutHeadingRef, aboutHeadingVisible] = useInView(0.2);
    const [aboutP1Ref, aboutP1Visible] = useInView(0.2);
    const [aboutP2Ref, aboutP2Visible] = useInView(0.2);
    const [aboutP3Ref, aboutP3Visible] = useInView(0.2);
    const [aboutSwiperRef, aboutSwiperVisible] = useInView(0.2);
    // Contact section elements
    const [contactHeadingRef, contactHeadingVisible] = useInView(0.2);
    const [contactP1Ref, contactP1Visible] = useInView(0.2);
    const [contactP2Ref, contactP2Visible] = useInView(0.2);
    const [contactLinksRef, contactLinksVisible] = useInView(0.2);
    return (<>
        <div className='aboutSectionContainer' id='about'>
            <h2 ref={aboutHeadingRef} className={`heading fade-in-up${aboutHeadingVisible ? ' animate' : ''}`}>About <span>Me</span></h2>
            <p ref={aboutP1Ref} className={`description fade-in-up${aboutP1Visible ? ' animate' : ''}`}>
                Hey, I'm <span>Abhiram</span> — a B.Tech CSE (AI & ML) graduate from Kalasalingam University, Tamil Nadu.
                I work mostly with the <b>MERN stack</b> for web apps and <b>React Native (Expo)</b> for mobile.
            </p>
            <p ref={aboutP2Ref} className={`description fade-in-up${aboutP2Visible ? ' animate' : ''}`}>
                I’m solid with <b>Java</b>, and also comfortable with <b>C</b>, <b>Python</b>, and <b>SQL</b>.
                I enjoy solving tricky problems, making things run faster, and building apps that feel smooth to use.
            </p>
            <p ref={aboutP3Ref} className={`description fade-in-up${aboutP3Visible ? ' animate' : ''}`}>
                Right now I’m focused on building <b>real-time applications</b> that can automate everyday stuff — while
                keeping an eye on the latest tools and frameworks in tech. 🚀
            </p>

            <div ref={aboutSwiperRef} className={`customSwiperContainer fade-in-up${aboutSwiperVisible ? ' animate' : ''}`}>
                <CustomSwiper imagesArray={["ieee", "ieee2", "MS-365-fundamentals", "coursera_ibm", "oracle"]} location="about" auto={true} />
            </div>
        </div>
        <div className='contactSectionContainer' id='contact'>
            <h2 ref={contactHeadingRef} className={`heading fade-in-up${contactHeadingVisible ? ' animate' : ''}`}>Get In Touch</h2>
            <p ref={contactP1Ref} className={`subHeading fade-in-up${contactP1Visible ? ' animate' : ''}`}>Liked my Profile & Work...?</p>
            <p ref={contactP2Ref} className={`subHeading fade-in-up${contactP2Visible ? ' animate' : ''}`}>Take a Coffee & Connect with me...</p>
            <div ref={contactLinksRef} className={`linksContainer fade-in-up${contactLinksVisible ? ' animate' : ''}`}>
                <a className='linkedIn' href='https://www.linkedin.com/in/s-abhiramreddy/' target='_blank'><p className=''>Linked </p><img src='/images/hero/linkedIn.svg' alt='linked In' /></a>
                <a className='gmail' href='mailto:abhiramdev945@gmail.com' target='_blank'><p>Mail</p><img src='/images/about/gmail.svg' alt='gmail' /></a>
            </div>
        </div>
    </>
    )
}

export default AboutAndContact