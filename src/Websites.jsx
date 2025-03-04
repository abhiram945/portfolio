import React from 'react';
import './styles/websites.css';
import CustomSwiper from './CustomSwiper';
import { motion } from 'framer-motion';

const websitesData = [
  {
    name: 'finbook',
    images: ['finbook1', 'finbook2', 'finbook3'],
    usecase: 'A finance management system',
    techStack: ['mongodb', 'express js', 'react js', 'rest api'],
    url: 'https://finbook.vercel.app',
    github: 'https://github.com/abhiram945/finbook',
  },
  {
    name: 'freshbasket',
    images: ['freshbasket1', 'freshbasket2', 'freshbasket3'],
    usecase: 'The final spot for fresh and healthy food',
    techStack: ['tailwind css', 'mongodb', 'express js', 'react js', 'rest api'],
    url: '',
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
];

const Websites = () => {
  return (
    <motion.div
      id='websites'
      className='websitesSectionContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className='heading'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ideas into Interactive Web Solutions
      </motion.h2>
      <div className='websitesContainer'>
        {websitesData.map((website, index) => (
          <motion.div
            className='websiteContainer'
            key={index}
            style={{ flexDirection: `${index % 2 === 0 ? 'row' : 'row-reverse'}` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <motion.div
              className='customSwiperContainer'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CustomSwiper imagesArray={website.images} location='websites' />
            </motion.div>
            <motion.div
              className='websiteDetailsContainer'
              style={{
                paddingLeft: `${index % 2 === 0 ? '3rem' : '0'}`,
                paddingRight: `${index % 2 !== 0 ? '8vw' : '0'}`,
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className='name'>{website.name.toUpperCase()}</h2>
              <p className='useCase'>{website.usecase}</p>
              <div className='techStackContainer'>
                {website.techStack.map((tech, index) => (
                  <motion.p
                    key={tech + index}
                    className={tech.replaceAll(' ', '')}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {tech.toUpperCase()}
                  </motion.p>
                ))}
              </div>
              <div className='linksContainer'>
                {website.url && (
                  <motion.a
                    href={website.url}
                    target='_blank'
                    className='visit'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Visit <img src='/images/websites/visit.svg' alt='Visit' />
                  </motion.a>
                )}
                {website.github && (
                  <motion.a
                    href={website.github}
                    target='_blank'
                    className='github'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Github
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Websites;