import React from 'react';
import CustomSwiper from '../components/CustomSwiper';

const AboutAndContact = () => {
  return (
    <>
      <div className="h-screen w-full bg-primary pt-[7vh] max-[769px]:pt-[2.5vh]" id="about">
        <h2
          className={`text-center text-5xl font-bold text-black`}
        >
          About <span className="text-secondary">Me</span>
        </h2>
        <p
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0`}
        >
          Hey, I'm <span className="text-2xl text-secondary">Abhiram</span> — a B.Tech CSE (AI & ML)
          graduate from Kalasalingam University, Tamil Nadu. I work mostly with the{' '}
          <b>MERN stack</b> for web apps and <b>React Native (Expo)</b> for mobile.
        </p>
        <p
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0`}
        >
          I’m solid with <b>Java</b>, and also comfortable with <b>C</b>, <b>Python</b>, and{' '}
          <b>SQL</b>. I enjoy solving tricky problems, making things run faster, and building apps
          that feel smooth to use.
        </p>
        <p
          className={`mx-10 my-1 text-center text-[1.05rem] max-[769px]:mx-4 max-[769px]:my-0`}
        >
          Right now I’m focused on building <b>real-time applications</b> that can automate everyday
          stuff — while keeping an eye on the latest tools and frameworks in tech. 🚀
        </p>

        <div
          className={`mx-auto mt-6 w-[50vw] max-[769px]:w-[95%]`}
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
          className={`text-center text-5xl font-bold text-secondary`}
        >
          Get In Touch
        </h2>
        <p
          className={`my-4 text-center text-[2rem] text-brown`}
        >
          Liked my Profile & Work...?
        </p>
        <p
          className={`my-4 text-center text-[2rem] text-brown`}
        >
          Take a Coffee & Connect with me...
        </p>
        <div
          className={`flex items-center justify-center gap-4`}
        >
          <a
            className="flex items-center gap-2 rounded-lg border-2 border-[#0077B5] p-2 px-4 font-bold text-[#0077B5] transition-colors hover:bg-[#0077B5] hover:text-white"
            href="https://www.linkedin.com/in/s-abhiramreddy/"
            target="_blank"
          >
            <p>Linked </p>
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