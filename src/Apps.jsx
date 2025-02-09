import React from 'react'
import "./styles/apps.css"
const Apps=()=>{

  return (
    <div className='appsSectionContainer' id='apps'>
        <h2 className='heading'>Apps I've Built 🚀</h2>
        <div className='appsContainer'>
            <div className='appContainer'>
                <div className="imagesContainer">
                    <img src='/images/apps/finbook1.jpg'/>
                    <img src='/images/apps/finbook2.jpg'/>
                    <img src='/images/apps/finbook3.jpg'/>
                </div>
                <div className="detailsContainer">
                    <h3>FINBOOK</h3>
                    <p>A finance management App</p>
                </div>
            </div>
            <div className='appContainer'>
                <div className="imagesContainer">
                    <img src='/images/apps/dimera1.jpg'/>
                    <img src='/images/apps/dimera2.jpg'/>
                </div>
                <div className="detailsContainer">
                    <h3>DIMERA</h3>
                    <p>An immersive Multi Dimensional Music App</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Apps