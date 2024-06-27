import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import AnimatedText from './AnimatioText';

const Hero = () => {
  return (
    <>
      <style>
        {`
          .gradient {
            background: linear-gradient(to bottom, #524a9f, #0C1844);
          }
          .blink {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { opacity: 1 }
            50% { opacity: 0 }
          }
        `}
      </style>
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#524a9f]"/>
            <div className="w-1 sm:h-80 h-40 gradient"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}><AnimatedText /></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop mobile apps📱, <br className='sm:block hidden' />
              & web apps 💻 
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className="hidden lg:flex absolute top-1/4 left-2/3 w-[155px] h-[155px] flex justify-center items-start">
          <div className="w-[100px] h-[100px] rounded-full border-x-4 border-[#83B4FF] flex justify-center p-2">
            <motion.div
              initial={{ y: 35 }}
              animate={{ x: [-25, 40, -25] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
            <motion.div
              initial={{ x: -5 }}
              animate={{ y: [0, 65, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </div>
        <div className="hidden lg:flex absolute top-1/2 end-52 w-[155px] h-[155px] flex justify-center items-start">
          <div className="w-[100px] h-[100px] rounded-2xl border-y-4 border-[#83B4FF] flex justify-center p-2">
            <motion.div
              initial={{ y: 35 }}
              animate={{ x: [-25, 40, -25] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
            <motion.div
              initial={{ x: -5 }}
              animate={{ y: [0, 65, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </div>
        <div className="hidden lg:flex absolute top-1/4 right-20 w-[155px] h-[155px] flex justify-center items-start">
          <div className="w-[100px] h-[100px] rounded-full border-x-4 border-[#83B4FF] flex justify-center p-2">
            <motion.div
              initial={{ y: 35 }}
              animate={{ x: [-25, 40, -25] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
            <motion.div
              initial={{ x: -5 }}
              animate={{ y: [0, 65, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
