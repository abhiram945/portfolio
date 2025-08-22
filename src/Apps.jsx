import './styles/apps.css';
import CustomSwiper from './CustomSwiper';
import useInView from './useInView';

const Apps = () => {
  const appsData = [
    {
      name: 'FINBOOK',
      images: ['finbook1', 'finbook2', 'finbook3'],
      description: 'A finance management App',
    },
    {
      name: 'DIMERA',
      images: ['dimera1', 'dimera2', 'dimera3'],
      description: 'An immersive Multi Dimensional Music App',
    },
  ]
  return (
    <div className='appsSectionContainer' id='apps'>
      <h2 className='heading'>Apps I've Built 🚀</h2>
      <div className='appsContainer'>
        {appsData.map((app, index) => {
          const [ref, visible] = useInView(0.2);
          return (
            <div ref={ref} className={`appContainer fade-in-up${visible ? ' animate' : ''}`} key={index}>
              <div className='imagesContainer'>
                <div className='smallScreens'>
                  <CustomSwiper imagesArray={app.images} location='apps' />
                </div>
                <div className='largeScreens'>
                  {app.images.map((img, idx) =><img key={idx} src={`/images/apps/${img}.png`} alt={app.name} />)}
                </div>
              </div>
              <div className='detailsContainer'>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Apps;
