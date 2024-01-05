import React from 'react'
import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';

import {styles} from '../styles'

import { PortraitCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col">
     
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap=5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary mt-5 mr-5'/>
          <div className='bg-gradient-to-t from-white-100 to-secondary mr-5 w-1 h-60 '/>
        </div>
          
        <div>
          <h1 className={`${styles.heroHeadText} text-primary`}>
            Hi, I'm <span className="text-secondary">Matheus</span>
          </h1>
          <p className={`${styles.heroSubText} flex text-primary`}>I am a self motivated Software Developer, Researcher, and Computer Science student. Welcome to my portfolio!</p>
        </div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] absolute inset-0 top-[358px] absolute inset-0 top-[120px] max-w-7xl'
      >
        <PortraitCanvas/>
      </motion.div>
      
      
    </section>
  )
}

export default Hero