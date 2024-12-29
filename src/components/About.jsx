import React from 'react';
//import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Tech } from '../components';


/*
const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn("right", "sprint", 0.5 * index, 1)}>
          <div  
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            options={{max: 45, scale: 1, speed: 450}}>
              
            <Tech/>

          </div>
        </motion.div>
    </Tilt>
  )
}
*/

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a dedicated Computer Science graduate with a passion for software development, engineering, and research. 
        Experienced in a variety of programming languages and tools, with a proven track record of independently designing and implementing projects. 
        <br/><br/>
        Bellow you will see some technologies I am familiar with losely ranked from left to right. 
        <br/><br/>
        <b>Hover / Tap to reveal technology names.</b>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        <Tech/>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')