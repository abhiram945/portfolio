import './styles/websites.css';
import CustomSwiper from './CustomSwiper';
import useInView from './useInView';

const websitesData = [
  {
    name: 'finbook',
    images: Array.from({length:5}).map((value,index)=>`finbook${index+1}`),
    usecase: 'A finance management system',
    techStack: ['mongodb', 'express js', 'react js', 'rest api', 'jwt'],
    url: 'https://finbook.vercel.app',
    github: 'https://github.com/abhiram945/finbook',
  },
  {
    name: 'eduflex',
    images: Array.from({length:7}).map((value,index)=>`eduflex${index+1}`),
    usecase: 'An AI powered self learning platform',
    techStack: ['gen ai','langchain','faiss','mongodb', 'express js','flask', 'react js', 'rest api','tailwind css'],
    url: '',
    github: 'https://github.com/abhiram945/eduflex',
  },
  {
    name: 'freshbasket',
    images: ['freshbasket1', 'freshbasket2', 'freshbasket3'],
    usecase: 'The final spot for fresh and healthy food',
    techStack: ['tailwind css', 'mongodb', 'express js', 'react js', 'rest api'],
    url: 'https://freshbasket1.vercel.app',
    github: '',
  },
  {
    name: 'dimera',
    images: ['dimera1', 'dimera2'],
    usecase: 'An immersive Multi Dimensional Music platform',
    techStack: ['react js'],
    url: 'https://dimera.vercel.app',
    github: 'https://github.com/abhiram945/dimera',
  },
  {
    name: 'scenario talk',
    images: ["live-image-describer"],
    usecase: 'A platform that helps visually impaired individuals know about the world around them',
    techStack: ['python','yolo','huggingface','langchain','open ai','streamlit'],
    url: '',
    github: 'https://github.com/abhiram945/live-image-describer/blob/main/Live-image-describer.py',
  },
];

const Websites = () => {
  return (
    <div id='websites' className='websitesSectionContainer'>
      <h2 className='heading'>Ideas into Interactive Web Solutions</h2>
      <div className='websitesContainer'>
        {websitesData.map((website, index) => {
          const [ref, visible] = useInView(0.2);
          return (
            <div
              ref={ref}
              className={`websiteContainer fade-in-up${visible ? ' animate' : ''}`}
              key={index}
              style={{ flexDirection: `${index % 2 === 0 ? 'row' : 'row-reverse'}` }}
            >
              <div className='customSwiperContainer'>
                <CustomSwiper imagesArray={website.images} location='websites' />
              </div>
              <div
                className='websiteDetailsContainer'
                style={{
                  paddingLeft: `${index % 2 === 0 ? '3rem' : '0'}`,
                  paddingRight: `${index % 2 !== 0 ? '8vw' : '0'}`,
                }}
              >
                <h2 className='name'>{website.name.toUpperCase()}</h2>
                <p className='useCase'>{website.usecase}</p>
                <div className='techStackContainer'>
                  {website.techStack.map((tech, i) => (
                    <p
                      key={tech + i}
                      className={`${tech.replaceAll(' ', '')} fade-in-scale`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {tech.toUpperCase()}
                    </p>
                  ))}
                </div>
                <div className='linksContainer'>
                  {website.url && (
                    <a
                      href={website.url}
                      target='_blank'
                      className='visit'
                    >
                      Visit <img src='/images/websites/view.svg' alt='Visit' />
                    </a>
                  )}
                  {website.github && (
                    <a
                      href={website.github}
                      target='_blank'
                      className='github'
                    >
                      Github <img src='/images/websites/visit.svg' alt='Visit' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Websites;