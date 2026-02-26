import CustomSwiper from '../components/CustomSwiper';
import useInView from '../hooks/useInView';

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
    name: 'scenario talk',
    images: ["live-image-describer"],
    usecase: 'A platform that helps visually impaired individuals know about the world around them',
    techStack: ['python','yolo','huggingface','langchain','open ai','streamlit'],
    url: '',
    github: 'https://github.com/abhiram945/live-image-describer/blob/main/Live-image-describer.py',
  },
];

const techColors = {
  tailwindcss: 'bg-[#00BCFF]',
  mongodb: 'bg-[rgb(29,185,29)]',
  expressjs: 'bg-white text-black!',
  reactjs: 'bg-[#00D8FF]',
  restapi: 'bg-gray-500',
  python: 'bg-blue-600 text-yellow-300',
  huggingface: 'bg-yellow-400 text-black',
  langchain: 'bg-[#1C3C3C]',
  streamlit: 'bg-[#FF5D5D]'
};

const Websites = () => {
  return (
    <div id='websites' className='h-full w-full bg-primary pb-[2vh] pt-[8vh] max-[800px]:pb-4 max-[800px]:pt-2'>
      <h2 className='my-3 mb-5 text-center text-5xl font-bold text-secondary max-[800px]:text-[2.5rem] max-[426px]:text-[2rem]'>
        Ideas into Interactive Web Solutions
      </h2>
      <div className='flex flex-col'>
        {websitesData.map((website, index) => {
          const [ref, visible] = useInView(0.2);
          const isEven = index % 2 === 0;
          return (
            <div
              ref={ref}
              className={`flex w-full items-center px-[5%] mb-10 max-[800px]:flex-col max-[800px]:border-b max-[800px]:border-lightGray max-[800px]:p-2 max-[800px]:last:border-none ${
                isEven ? 'flex-row' : 'flex-row-reverse'
              } ${visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
              key={index}
            >
              <div className='h-max w-1/2 overflow-hidden rounded-xl border-[0.15rem] border-lightGray max-[800px]:w-full max-[800px]:rounded-lg'>
                <CustomSwiper imagesArray={website.images} location='websites' />
              </div>
              <div
                className={`w-1/2 max-[800px]:w-full max-[800px]:p-0 max-[800px]:text-center ${
                  isEven ? 'pl-12' : 'pr-[8vw]'
                }`}
              >
                <h2 className='linear-gradient-text animate-linearGradientAnimation text-[5vw] font-black max-[800px]:text-[2rem] leading-18 mb-4'>
                  {website.name.toUpperCase()}
                </h2>
                <p className='text-2xl max-[800px]:text-base'>{website.usecase}</p>
                <div className='my-6 flex flex-wrap gap-4 max-[800px]:my-2 max-[800px]:justify-center max-[800px]:gap-2'>
                  {website.techStack.map((tech, i) => {
                    const techKey = tech.replaceAll(' ', '').toLocaleLowerCase();
                    return (
                      <p
                        key={tech + i}
                        className={`cursor-default rounded-lg p-2 text-white shadow-hero ${
                          techColors[techKey] || 'bg-black'
                        }`}
                      >
                        {tech.toUpperCase()}
                      </p>
                    );
                  })}
                </div>
                <div className='flex items-center max-[800px]:justify-center'>
                  {website.url && (
                    <a
                      href={website.url}
                      target='_blank'
                      className='mr-2 flex items-center gap-2 rounded-lg bg-secondary p-2 font-medium tracking-widest text-white shadow-hero transition-transform hover:scale-110'
                    >
                      Visit <img src='/images/websites/view.svg' alt='Visit' className='w-4' />
                    </a>
                  )}
                  {website.github && (
                    <a
                      href={website.github}
                      target='_blank'
                      className='mr-2 flex items-center gap-2 rounded-lg bg-black p-2 font-bold tracking-widest text-lightGray shadow-hero transition-transform hover:scale-110'
                    >
                      Github <img src='/images/websites/visit.svg' alt='Github' className='w-4' />
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
