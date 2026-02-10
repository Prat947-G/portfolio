import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-start gap-5 pointer-events-none z-10`}
            >
                <div className='flex flex-col justify-center items-center mt-5 mb-5 pointer-events-auto'>
                    <div className='w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#915eff] shadow-[0_0_50px_rgba(145,94,255,0.4)]'>
                        <img
                            src="/profile.jpeg"
                            alt="Prathmesh Kadam"
                            className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                </div>

                <div className='text-center pointer-events-auto'>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#ff61df]'>Prathmesh Kadam</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Computer Science Undergraduate <br className='sm:block hidden' />
                        at Lovely Professional University
                    </p>
                    <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="violet-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.6)]"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-transparent border border-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl transition-all duration-300 hover:bg-[#915eff] hover:shadow-[0_0_20px_rgba(145,94,255,0.6)]"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </div>
            </div>

            <ComputersCanvas />

            <div className='absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center gap-2'>
                <a href='#about' className='group flex flex-col items-center gap-2'>
                    {/* SCROLL Text */}
                    <motion.p
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className='text-[10px] tracking-[0.3em] font-medium text-secondary uppercase group-hover:text-white transition-colors'
                    >
                        Scroll
                    </motion.p>

                    {/* Modern Vertical Line Indicator */}
                    <div className='w-[2px] h-[50px] bg-secondary/20 rounded-full relative overflow-hidden group-hover:bg-secondary/40 transition-colors'>
                        <motion.div
                            animate={{
                                y: [-10, 50],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className='absolute top-0 left-0 w-full h-[20px] bg-gradient-to-b from-transparent via-[#915eff] to-transparent'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
