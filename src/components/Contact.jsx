import { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [ form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const [ loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name,value } = e.target;
    setForm({...form, [name]:value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_41600oi','template_7iidyi3',
      {
        from_name: form.name,
        to_name: 'Niral',
        from_email: 'form.email',
        to_email: 'ajmeraniral@gmail.com',
        message: form.message,
      },
      'Zd-Sb3i6lJvYVf8pv'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you');

        setForm({
          name:"",
          email:"",
          message:"",
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('something went wrong.')
      }
    )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left',"tween",0.2,1)}
        className="flex-[0.75] rounded-2xl p-8 bg-black-100"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Assemble.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-meduim mb-4'>Your Name</span>
            <input type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="Your name 📛" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border0none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-meduim mb-4'>Your Email</span>
            <input type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="xyz@gmail.com 📮" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border0none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-meduim mb-4'>Your Message</span>
            <input  
              row="7"
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="Tell me something new✍️" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border0none font-medium'
            />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary w-fit text-white rounded-xl">
            {loading? 'sending' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className='xl-flex-1 xl:h-auto md:h-[550px] h-[350px]' 
      >
        <EarthCanvas />
      </motion.div>
    </div>  
      
  )
}

export default SectionWrapper(Contact,"contact");

