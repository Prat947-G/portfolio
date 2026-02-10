import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 overflow-hidden'>
            <motion.div
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
            >
                <p className={`${styles.sectionSubText}`}>My Credentials</p>
                <h2 className={`${styles.sectionHeadText}`}>Resume.</h2>
                <div className='mt-5'>
                    <ul className='list-disc ml-5 space-y-4 text-white text-[16px] leading-[30px]'>
                        <li>
                            <span className="font-bold text-[#915eff]">Professional Summary:</span> Concise overview of my skills and experience.
                        </li>
                        <li>
                            <span className="font-bold text-[#915eff]">Core Competencies:</span> Detailed breakdown of my technical stack and soft skills.
                        </li>
                        <li>
                            <span className="font-bold text-[#915eff]">Project Showcase:</span> Key milestones and deployed applications.
                        </li>
                        <li>
                            <span className="font-bold text-[#915eff]">Education & Certifications:</span> Academic achievements and continuous learning path.
                        </li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "spring", 0.5, 0.75)}
                className='flex-[1.25] relative'
            >
                {/* Simulated Resume Preview Card */}
                <div className='w-full h-full bg-[#151030] p-8 rounded-2xl border border-gray-700 flex flex-col gap-6 shadow-card hover:shadow-cyan-500/50 transition-shadow duration-300 group relative overflow-hidden'>
                    {/* Resume Header */}
                    <div className="flex justify-between items-start border-b border-gray-600 pb-4">
                        <div>
                            <h3 className="text-white text-[24px] font-bold">Prathmesh Kadam</h3>
                            <p className="text-secondary text-[14px]">Full Stack Developer</p>
                        </div>
                        <div className="flex gap-2">
                            {/* Mock Social Icons */}
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>

                    {/* Mock Content */}
                    <div className="flex-1 flex flex-col gap-4 opacity-50 select-none blur-[1px]">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-600 rounded w-full"></div>
                        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                        <br />
                        <div className="h-32 bg-gray-700/30 rounded w-full border border-dashed border-gray-600 flex justify-center items-center">
                            Experience Section Placeholder
                        </div>
                    </div>

                    {/* Download Button Overlay */}
                    <div className="absolute inset-0 flex justify-center items-center bg-black/40 rounded-2xl backdrop-blur-[2px] transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                        <button
                            onClick={() => window.open("/Resume-p.pdf", "_blank")}
                            className="bg-[#915eff] py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white hover:text-[#915eff] transition-all transform hover:scale-105"
                        >
                            Download Full Resume
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Resume, "resume");
