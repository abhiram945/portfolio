import React from 'react'
import "./styles/hero.css"

const Hero = () => {
  return (
    <main id='home' className=''>
      <div className='heroLeft'>
        <div className='handEmojiAndMessageContainer'>
          <span className='handEmoji'>👋</span>
          <div className='messageContainer'>
            <p className=''>Hello, I am</p>
            <h1 className=''>Abhiram</h1>
          </div>
        </div>
      </div>
      <div className='heroMiddle'>
        <div className="ringAndTextContainer">
          <img src='/images/hero/ring.png' alt='ring' className='' />
          <h2 className=""><span>WEB</span><span>DEVE</span></h2>
          <h2 className=""><span className='ringUpText'>& APP</span><span className='ringUpText'>LOPER</span></h2>
        </div>
        <div className='heroMiddleLinksContainer'>
          <a className='resume' href='/images/abhiram.pdf' target='_blank'>Resume</a>
          <a className='linkedIn' href='https://www.linkedin.com/in/s-abhiramreddy/' target='_blank'><p className=''>Linked </p><img src='/images/hero/linkedIn.svg' alt='linked In' /></a>
          <a className='github' href='https://github.com/abhiram945' target='_blank'><p>Github</p><img src='/images/hero/github.svg' alt='github' className='' /></a>
        </div>
      </div>
      <div className='heroRight'>
        <img src='/images/hero/appDev.png' alt='app' className='' />
        <img src='/images/hero/dev.jpg' alt='web' className='' />
        <img src='/images/hero/webDev.png' alt='web' className='' />
      </div>
    </main>
  )
}

export default Hero