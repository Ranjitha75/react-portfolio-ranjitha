import profilePic from "../assets/image.jpg";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},
  },
});

const Heroin = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1  
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                    Ranjitha M
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Frontend Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                "As a passionate and dedicated software developer, My aim to leverage my expertise in coding, problem-solving, and
                 software design to contribute to innovative projects. My goal is to work within a dynamic team environment where I can
                 continue to grow my technical skills, collaborate on cutting-edge technologies, and deliver high-quality software solutions
                 that enhance user experiences and drive business success.”
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center h-80 w-100">
            <motion.img 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            src={profilePic} alt="Ranjitha" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Heroin