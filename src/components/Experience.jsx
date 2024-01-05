import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import { ampli_block } from '../assets';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#0b4216', color:'#ffffff'}} 
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
     
      <h3 className='text-white-100 text-[24px] font-bold'>
        {experience.title}
      </h3>
      <a href={experience.url} target='_blank' rel='noreferrer'>
        <p className='text-sky-600 italic text-[16px] font-semibold hover:text-sky-400 transition duration-350 ease-in-out' style={{ margin: 0}}>
          {experience.company_name}
        </p>
      </a>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    {experience.title =="Research Assistant - Computer Vision" ? 
      <div className='mt-4 mb-4 rounded-2xl bg-gradient-to-t from-primary to-35% to-[#0b4216] flex flex-col justify-center items-center'>
        <p className='py-4 px-4 text-[#807061]'> Ampli Block</p>
        <img src={ampli_block} alt="ampli block"/>
      </div>
     : null }
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper(Experience, "work")