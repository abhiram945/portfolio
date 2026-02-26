import React from 'react';

const Hero = () => {
  return (
    <main
      id="home"
      className="flex h-svh w-full bg-[url('/images/hero/heroBg.png')] bg-cover bg-fixed bg-center bg-no-repeat max-[800px]:flex-col max-[800px]:items-center"
    >
      {/* Left Column */}
      <div className="flex h-full w-1/4 flex-col items-end justify-center max-[800px]:h-[20%] max-[800px]:w-full max-[800px]:items-center">
        <div className="flex items-center justify-around rounded-[1.25rem] p-3 shadow-hero animate-fadeIn max-[800px]:rounded-lg">
          <span className="text-[5vw] max-[800px]:pr-2 max-[800px]:text-[10vw] max-[426px]:text-5xl">👋</span>
          <div className="flex flex-col">
            <p className="text-[1.5vw] max-[800px]:text-[2.5vw] max-[426px]:text-xl">Hello, I am</p>
            <h1 className="text-[3vw] font-bold max-[800px]:text-[5vw] max-[426px]:text-3xl">Abhiram</h1>
          </div>
        </div>
      </div>

      {/* Middle Column */}
      <div className="flex h-full w-1/2 flex-col justify-center gap-6 max-[800px]:h-1/2 max-[800px]:w-full max-[800px]:gap-4 max-[426px]:gap-8">
        <div className="flex items-center justify-center">
          <div className="flex animate-fadeIn relative text-[9vw] font-anton leading-none text-black max-[800px]:text-[15vw] max-[426px]:text-8xl">
            <img
              src="/images/hero/ring.png" alt="ring" loading="lazy"
              className="h-[25vw] w-[25vw] animate-[ringFadeIn_2s_ease-in_forwards_1s,moveUpDown_4s_ease-in-out_infinite_1s] opacity-0
              max-[800px]:h-[35vw] max-[800px]:w-[35vw] max-[426px]:h-52 max-[426px]:w-52
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <span className='flex flex-col'>
              <span>WEB</span>
              <span>DEVE</span>
            </span>
            <span className="flex flex-col z-10">
              <span>& APP</span>
              <span>LOPER</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 max-[426px]:gap-3">
          <a
            className="flex animate-fadeIn items-center gap-1 rounded-lg border-2 border-secondary p-2 px-4 font-bold text-secondary transition-colors hover:bg-secondary hover:text-white"
            href="/images/abhiram.pdf"
            target="_blank"
          >
            <p className="text-[0.9rem]">Resume</p>
            <img src="/images/hero/resume.svg" alt="Resume" className="w-5 rounded bg-primary" />
          </a>
          <a
            className="flex animate-fadeIn items-center gap-1 rounded-lg border-2 border-[#0077B5] p-2 px-4 font-bold text-[#0077B5] transition-colors hover:bg-[#0077B5] hover:text-white"
            href="https://www.linkedin.com/in/s-abhiramreddy/"
            target="_blank"
          >
            <p className="text-[0.9rem]">Linked</p>
            <img src="/images/hero/linkedIn.svg" alt="LinkedIn" className="w-5 rounded bg-primary" />
          </a>
          <a
            className="flex animate-fadeIn items-center gap-1 rounded-lg border-2 border-black p-2 px-4 font-bold text-black transition-colors hover:bg-black hover:text-white"
            href="https://github.com/abhiram945"
            target="_blank"
          >
            <p className="text-[0.9rem]">Github</p>
            <img src="/images/hero/github.svg" alt="Github" className="w-5 rounded bg-primary" />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex h-full w-1/4 flex-col justify-center max-[800px]:h-[30%] max-[800px]:w-full max-[800px]:flex-row max-[800px]:px-8 max-[800px]:pb-8 max-[426px]:px-2">
        <img
          loading="lazy"
          src="/images/hero/appDev.png"
          alt="app"
          className="w-1/2 animate-fadeIn rounded-full shadow-hero max-[800px]:h-[20vw] max-[800px]:w-[20vw] max-[426px]:h-23 max-[426px]:w-23"
        />
        <img
          loading="lazy"
          src="/images/hero/dev.jpg"
          alt="web"
          className="ml-20 w-[60%] animate-fadeIn rounded-full shadow-hero max-[800px]:mx-auto max-[800px]:mb-0 max-[800px]:mt-auto max-[800px]:h-[25vw] max-[800px]:w-[25vw] max-[426px]:h-30 max-[426px]:w-30"
        />
        <img
          loading="lazy"
          src="/images/hero/webDev.png"
          alt="web"
          className="w-2/5 animate-fadeIn rounded-full shadow-hero max-[800px]:h-[15vw] max-[800px]:w-[15vw] max-[426px]:h-20 max-[426px]:w-20"
        />
      </div>
    </main>
  );
};

export default Hero;
