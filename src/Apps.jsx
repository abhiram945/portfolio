import React from 'react';
import './styles/apps.css';
import CustomSwiper from './CustomSwiper';
import { motion } from 'framer-motion';

const Apps = () => {
  return (
    <motion.div
      className='appsSectionContainer'
      id='apps'
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
        Apps I've Built 🚀
      </motion.h2>
      <div className='appsContainer'>
        {[
          {
            name: 'FINBOOK',
            images: ['finbook1', 'finbook2', 'finbook3'],
            description: 'A finance management App',
          },
          {
            name: 'DIMERA',
            images: ['dimera1', 'dimera2'],
            description: 'An immersive Multi Dimensional Music App',
          },
        ].map((app, index) => (
          <motion.div
            className='appContainer'
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className='imagesContainer'>
              <motion.div
                className='smallScreens'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <CustomSwiper imagesArray={app.images} location='apps' />
              </motion.div>
              <motion.div
                className='largeScreens'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {app.images.map((img, idx) => (
                  <img key={idx} src={`/images/apps/${img}.png`} alt={app.name} />
                ))}
              </motion.div>
            </div>
            <div className={`detailsContainer`}>
              <h3>{app.name}</h3>
              <p>{app.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Apps;