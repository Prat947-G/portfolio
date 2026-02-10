import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, aboutMe } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <div className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt={title}
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>

            {/* New Grid Layout */}
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Left Column */}
                <motion.div
                    variants={fadeIn("right", "spring", 0.5, 0.75)}
                    className='col-span-1 flex flex-col gap-6'
                >
                    {/* Quick Facts */}
                    <div className='bg-tertiary p-6 rounded-2xl'>
                        <h3 className='text-white text-[20px] font-bold mb-4 border-b border-gray-600 pb-2'>Quick Facts</h3>
                        <div className='flex flex-col gap-4'>
                            {aboutMe.quickFacts.map((fact, index) => (
                                <div key={index} className='flex flex-col'>
                                    <span className='text-secondary text-[12px] uppercase tracking-wider'>{fact.title}</span>
                                    <span className='text-white text-[16px] font-medium'>{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className='bg-tertiary p-6 rounded-2xl'>
                        <h3 className='text-white text-[20px] font-bold mb-4 border-b border-gray-600 pb-2'>When I'm Not Coding</h3>
                        <div className='flex flex-col gap-3'>
                            {aboutMe.hobbies.map((hobby, index) => (
                                <div key={index} className='flex items-center gap-3 bg-primary/40 p-3 rounded-lg hover:bg-primary/60 transition-colors'>
                                    <div className='w-8 h-8 flex justify-center items-center bg-transparent'>
                                        <img src={hobby.icon} alt={hobby.title} className="w-6 h-6 object-contain" />
                                    </div>
                                    <span className='text-white font-medium'>{hobby.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    variants={fadeIn("left", "spring", 0.7, 0.75)}
                    className='col-span-1 lg:col-span-2 flex flex-col gap-6'
                >
                    {/* Journey */}
                    <div className='bg-tertiary p-8 rounded-2xl h-full'>
                        <h3 className='text-gradient text-[24px] font-bold mb-4 text-[#915eff]'>My Journey</h3>
                        <p className='text-secondary text-[16px] leading-[30px]'>
                            {aboutMe.introduction}
                        </p>
                        <br />
                        <p className='text-secondary text-[16px] leading-[30px]'>
                            {aboutMe.journey}
                        </p>
                    </div>

                    {/* Approach */}
                    <div className='bg-tertiary p-8 rounded-2xl'>
                        <h3 className='text-gradient text-[24px] font-bold mb-4 text-[#915eff]'>My Approach</h3>
                        <p className='text-secondary text-[16px] leading-[30px]'>
                            {aboutMe.approach}
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
