import React from 'react'
import "./styles/websites.css"
import CustomSwiper from "./CustomSwiper";
function Websites() {
    const websitesData=[{
        name:"finbook",
        images:["finbook1","finbook2","finbook3"],
        usecase:"A finance management system",
        techStack:["mongodb","express js","react js","rest api"],
        url:"https://finbook.vercel.app",
        github:"https://github.com/abhiram945/finbook"        
    },{
        name:"freshbasket",
        images:["freshbasket1","freshbasket2","freshbasket3"],
        usecase:"The final spot for fresh and healthy food",
        techStack:["tailwind css","mongodb","express js","react js","rest api"],
        url:"",
        github:""        
    },{
        name:"dimera",
        images:["dimera1","dimera2"],
        usecase:"An immersive Multi Dimensional Music platform",
        techStack:["react js"],
        url:"https://dimera.vercel.app",
        github:"https://github.com/abhiram945/dimera" 
    }
]
  return (
    <div id="websites" className='websitesSectionContainer'>
        <h2 className='heading'>Ideas into Interactive Web Solutions</h2>
        <div className='websitesContainer'>
            {websitesData.map((website,index)=><div className='websiteContainer' key={index} style={{flexDirection:`${index%2===0?"row":"row-reverse"}`}}>
                <div className='customSwiperContainer'>
                    <CustomSwiper imagesArray={website.images} location="websites"/>
                </div>
                <div className='websiteDetailsContainer' style={{paddingLeft:`${index%2===0?"3rem":"0"}`, paddingRight:`${index%2!==0?"8vw":"0"}`}}>
                    <h2 className='name'>{website.name.toUpperCase()}</h2>
                    <p className='useCase'>{website.usecase}</p>
                    <div className='techStackContainer'>
                        {website.techStack.map((tech,index)=><p key={tech+index} className={tech.replaceAll(" ","")}>{tech.toUpperCase()}</p>)}
                    </div>
                    <div className='linksContainer'>
                        {website.url && <a href={website.url} target='_blank' className='visit'>visit <img src='/images/websites/visit.svg'/></a>}
                        {website.github&& <a href={website.github} target='_blank' className='github'>Github</a>}
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Websites