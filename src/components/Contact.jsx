import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from "./canvas";

// service_qrqh2cu
// template_waudc14
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm({
      ...form,
      [name]: value
    })
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      'service_qrqh2cu', 
      'template_waudc14', 
      {
        from_name: form.name,
        to_name: 'Mat',
        from_email: form.email,
        to_email: 'nascimentomatheus29@gmail.com',
        message: form.message
      },
      'JK9CGJH32RbVn9m4u'
      ).then(() => {
        setLoading(false);
        alert('Message sent successfully! I will get back to you soon.');
        setForm({
          name: '',
          email: '',
          message: ''
        })
      },
      (error) => {
        setLoading(false);
        alert('Something went wrong. Please try again.')
        console.log(error);
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] background-motion bg-hero-pattern bg-cover p-8 rounded-3xl'
      >
        <p  className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText} text-[#0b4216]`}>Contact</h3>
      
        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-4'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              autoComplete='name'
              value={form.name}
              onChange={handleChange}
              className='bg-white-100 py-4 px-6 placeholder-secondary rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-4 '>
              Your Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              autoComplete='email'
              className='bg-white-100 py-4 px-6 placeholder-secondary rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-secondary font-medium mb-4'>
              Your Message
            </span>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              className='bg-white-100 py-4 px-6 placeholder-secondary rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className=' py-3 px-8 outline-none font-bold w-fit text-white-100 shadow-xl shadow-primary rounded-full bg-gradient-to-r from-[#0b4216] to-secondary hover:from-tertiary hover:to-secondary transition duration-350 ease-in-out text-'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')