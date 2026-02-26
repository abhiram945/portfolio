import React from 'react';
import CustomSwiper from '../components/CustomSwiper';
import useInView from '../hooks/useInView';

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

  return (
    <>
      <div className="h-screen w-full bg-primary pt-[7vh] max-[769px]:pt-[2.5vh]" id="about">
        <h2
          ref={aboutHeadingRef}
          className={`text-center text-5xl font-bold ${
            aboutHeadingVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          About <span className="text-secondary">Me</span>
        </h2>
        <p
          ref={aboutP1Ref}
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0 ${
            aboutP1Visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          Hey, I'm <span className="text-2xl text-secondary">Abhiram</span> — a B.Tech CSE (AI & ML)
          graduate from Kalasalingam University, Tamil Nadu. I work mostly with the{' '}
          <b>MERN stack</b> for web apps and <b>React Native (Expo)</b> for mobile.
        </p>
        <p
          ref={aboutP2Ref}
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0 ${
            aboutP2Visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          I’m solid with <b>Java</b>, and also comfortable with <b>C</b>, <b>Python</b>, and{' '}
          <b>SQL</b>. I enjoy solving tricky problems, making things run faster, and building apps
          that feel smooth to use.
        </p>
        <p
          ref={aboutP3Ref}
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0 ${
            aboutP3Visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          Right now I’m focused on building <b>real-time applications</b> that can automate everyday
          stuff — while keeping an eye on the latest tools and frameworks in tech. 🚀
        </p>

        <div
          ref={aboutSwiperRef}
          className={`mx-auto mt-6 w-[40vw] max-[769px]:w-[90%] ${
            aboutSwiperVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          <CustomSwiper
            imagesArray={['ieee', 'ieee2', 'MS-365-fundamentals', 'coursera_ibm', 'oracle']}
            location="about"
            auto={true}
          />
        </div>
      </div>

      <div
        className="flex h-screen w-full flex-col justify-center bg-primary"
        id="contact"
      >
        <h2
          ref={contactHeadingRef}
          className={`text-center text-5xl font-bold text-secondary ${
            contactHeadingVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          Get In Touch
        </h2>
        <p
          ref={contactP1Ref}
          className={`my-4 text-center text-[2rem] text-brown ${
            contactP1Visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          Liked my Profile & Work...?
        </p>
        <p
          ref={contactP2Ref}
          className={`my-4 text-center text-[2rem] text-brown ${
            contactP2Visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          Take a Coffee & Connect with me...
        </p>
        <div
          ref={contactLinksRef}
          className={`flex items-center justify-center gap-4 ${
            contactLinksVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
          }`}
        >
          <a
            className="flex items-center gap-2 rounded-lg border-2 border-[#0077B5] p-2 px-4 font-bold text-[#0077B5] transition-colors hover:bg-[#0077B5] hover:text-white"
            href="https://www.linkedin.com/in/s-abhiramreddy/"
            target="_blank"
          >
            <p className="">Linked </p>
            <img
              src="/images/hero/linkedIn.svg"
              alt="linked In"
              className="w-5 rounded bg-primary"
            />
          </a>
          <a
            className="flex items-center gap-2 rounded-lg border-2 border-[#E75A4D] p-2 px-4 font-bold text-[#E75A4D] transition-colors hover:bg-[#E75A4D] hover:text-white"
            href="mailto:abhiramdev945@gmail.com"
            target="_blank"
          >
            <p>Mail</p>
            <img src="/images/about/gmail.svg" alt="gmail" className="w-5 rounded bg-primary" />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutAndContact;
