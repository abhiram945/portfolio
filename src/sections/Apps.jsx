import CustomSwiper from '../components/CustomSwiper';
import useInView from '../hooks/useInView';

const Apps = () => {
  const appsData = [
    {
      name: 'FINBOOK',
      images: ['finbook1', 'finbook2', 'finbook3', 'finbook4'],
      description: 'A finance management App',
    },
    {
      name: 'DIMERA',
      images: ['dimera1', 'dimera2', 'dimera3'],
      description: 'An immersive Multi Dimensional Music App',
    },
  ]
  return (
    <div className='w-full bg-primary py-[8vh] max-[800px]:py-8' id='apps'>
      <h2 className='mb-10 text-center text-5xl font-bold text-secondary max-[800px]:text-4xl'>Apps I've Built 🚀</h2>
      <div className='flex flex-wrap justify-center gap-10 px-10 max-[800px]:px-4'>
        {appsData.map((app, index) => {
          const [ref, visible] = useInView(0.2);
          return (
            <div 
              ref={ref} 
              className={`flex w-full max-w-max flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-hero ${visible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`} 
              key={index}
            >
              <div className='w-full'>
                {/* Small Screens: Swiper */}
                <div className='hidden max-[800px]:block'>
                  <CustomSwiper imagesArray={app.images} location='apps' />
                </div>
                {/* Large Screens: Grid */}
                <div className='flex justify-around gap-4 max-[800px]:hidden'>
                  {app.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={`/images/apps/${img}.png`} 
                      alt={app.name} 
                      className='h-[500px] w-auto rounded-xl border border-lightGray object-contain shadow-sm transition-transform hover:scale-105'
                    />
                  ))}
                </div>
              </div>
              <div className='text-center'>
                <h3 className='text-3xl font-black text-secondary'>{app.name}</h3>
                <p className='mt-2 text-xl text-gray-600'>{app.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Apps;
