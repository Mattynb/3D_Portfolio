import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div>
      {
        Object.keys(technologies).map((section) => (
          <div className='w-full' key={section}>
           
            {/* Section Title */}
            <div className='flex justify-center w-full h-20 mt-10'>
              <b><h1 className='text-white-100 text-[2rem]'>{ section }</h1></b>
            </div>

            {/* Ballz */}
            <div className="flex flex-row flex-wrap justify-center gap-10 ">
              {technologies[section].map((tech) => (
                <div className='w-28 h-28' key={tech.name}>
                  <BallCanvas name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>
            
          </div>  
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "");