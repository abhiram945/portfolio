import React from 'react'
import "./styles/skills.css"
function Skills() {
    return (
        <div id='skills' className='skillsSectionContainer'>
            <h2 className=''>My <span className=''>SKILLS</span></h2>
            <div className="skillsContainer">
                <div className='skillContainer'>
                    <p className='skillHeading'>Web Development</p>
                    {["express", "react", "node","python-flask"].map((image, index) => <div className='skill' key={index}>
                        <img src={`/images/skills/${image}.png`} alt={image} className='' />
                        <p className=''>{image.toUpperCase()}</p>
                    </div>)}
                </div>
                <div className='skillContainer'>
                    <p className='skillHeading'>Programming</p>
                    {["java","python"].map((image, index) => <div className='skill' key={index}>
                        <img src={`/images/skills/${image}.png`} alt={image} className='' />
                        <p className=''>{image.toUpperCase()}</p>
                    </div>)}
                </div>
                <div className='skillContainer'>
                    <p className='skillHeading'>Database</p>
                    {["mongoDb","sql"].map((image, index) => <div className='skill' key={index}>
                        <img src={`/images/skills/${image}.png`} alt={image} className='' />
                        <p className=''>{image.toUpperCase()}</p>
                    </div>)}
                </div>
                <div className='skillContainer'>
                    <p className='skillHeading'>App Development</p>
                    {["reactNative", "expo"].map((image, index) => <div className='skill' key={index}>
                        <img src={`/images/skills/${image}.png`} alt={image} className='' />
                        <p className=''>{image.toUpperCase()}</p>
                    </div>)}
                </div>
                <div className='skillContainer'>
                    <p className='skillHeading'>Tools & Platforms</p>
                    {["git", "github"].map((image, index) => <div className='skill' key={index}>
                        <img src={`/images/skills/${image}.png`} alt={image} className='' />
                        <p className=''>{image.toUpperCase()}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Skills