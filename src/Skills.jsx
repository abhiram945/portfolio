import React from 'react'
import "./styles/skills.css"
function Skills() {
    return (
        <div id='skills' className='skillsSectionContainer'>
            <h2 className=''>My <span className=''>SKILLS</span></h2>
            <div className="rowsContainer">
                <div className='row'>
                    <div className='skillsContainer'>
                        <p className='skillHeading'>Web Development</p>
                        {["mongoDb", "express", "react", "node"].map((image, index) => <div className='skillContainer' key={index}>
                            <img src={`/images/skills/${image}.png`} alt={image} className='' />
                            <p className=''>{image.toUpperCase()}</p>
                        </div>)}
                    </div>
                    <div className='skillsContainer'>
                        <p className='skillHeading'>Programming</p>
                        {["java"].map((image, index) => <div className='skillContainer' key={index}>
                            <img src={`/images/skills/${image}.png`} alt={image} className='' />
                            <p className=''>{image.toUpperCase()}</p>
                        </div>)}
                    </div>
                </div>
                <div className='row'>
                    <div className='skillsContainer'>
                        <p className='skillHeading'>App Development</p>
                        {["reactNative", "expo"].map((image, index) => <div className='skillContainer' key={index}>
                            <img src={`/images/skills/${image}.png`} alt={image} className='' />
                            <p className=''>{image.toUpperCase()}</p>
                        </div>)}
                    </div>
                    <div className='skillsContainer'>
                        <p className='skillHeading'>Tools & Platforms</p>
                        {["git", "github"].map((image, index) => <div className='skillContainer' key={index}>
                            <img src={`/images/skills/${image}.png`} alt={image} className='' />
                            <p className=''>{image.toUpperCase()}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills