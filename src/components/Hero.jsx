import React from 'react'
import {motion} from 'framer-motion';

import {styles} from '../styles'
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen ax-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap=5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1B4D3E]'/>
          <div className='bg-gradient-to-r from-green-10 to-50 w-1 sm:h-80 h-40 '/>
        </div>
          
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi, I'm <span className="text-[#1B4D3E]">Mat</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>I am a curios dude that does research, <br className='sm:hidden block'/> and I am learning how to build websites</p>
        </div>
      </div>
      
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'

            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero