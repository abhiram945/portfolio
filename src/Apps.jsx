import React from 'react'
import "./styles/apps.css"
import CustomSwiper from "./CustomSwiper"
const Apps = () => {
    return (
        <div className='appsSectionContainer' id='apps'>
            <h2 className='heading'>Apps I've Built 🚀</h2>
            <div className='appsContainer'>
                <div className='appContainer'>
                    <div className="imagesContainer">
                        <div className="smallScreens">
                            <CustomSwiper imagesArray={["finbook1", "finbook2", "finbook3"]} location="apps" />
                        </div>
                        <div className="largeScreens">
                            <img src='/images/apps/finbook1.png' />
                            <img src='/images/apps/finbook2.png' />
                            <img src='/images/apps/finbook3.png' />
                        </div>
                    </div>
                    <div className="detailsContainer finbookDetailsContainer">
                        <h3>FINBOOK</h3>
                        <p>A finance management App</p>
                    </div>
                </div>
                <div className='appContainer'>
                    <div className="imagesContainer">
                        <div className="smallScreens">
                            <CustomSwiper imagesArray={["dimera1", "dimera2"]} location="apps" />
                        </div>
                        <div className="largeScreens">

                            <img src='/images/apps/dimera1.png' />
                            <img src='/images/apps/dimera2.png' />
                        </div>
                    </div>
                    <div className="detailsContainer dimeraDetailsContainer">
                        <h3>DIMERA</h3>
                        <p>An immersive Multi Dimensional Music App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apps