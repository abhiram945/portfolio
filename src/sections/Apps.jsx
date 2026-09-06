import { useEffect, useState } from 'react';
import CustomSwiper from '../components/CustomSwiper';

const useIsMobile = (breakpoint = 800) => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [breakpoint]);
  return isMobile;
};


const Apps = () => {
  const isMobile = useIsMobile();
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
    <div
      className="w-full bg-primary py-[8vh] max-[800px]:py-8"
      id="apps"
    >
      <h2 className="mb-10 text-center text-5xl font-bold text-secondary max-[800px]:text-4xl">
        Apps I've Built 🚀
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-10 max-[800px]:px-4">
        {appsData.map((app) => (
          <div
            className="flex w-full max-w-max flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-hero"
            key={app.name}
          >
            <div className="w-full">
              {isMobile ? (
                <CustomSwiper
                  imagesArray={app.images}
                  location="apps"
                />
              ) : (
                <div className="flex flex-wrap justify-around gap-4">
                  {app.images.map((img) => (
                    <img
                      key={img}
                      src={`/images/apps/${img}.png`}
                      alt={`${app.name} screenshot`}
                      className="h-125 w-auto rounded-xl border border-lightGray object-contain shadow-sm transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black text-secondary">
                {app.name}
              </h3>
              <p className="mt-2 text-xl text-gray-600">
                {app.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
