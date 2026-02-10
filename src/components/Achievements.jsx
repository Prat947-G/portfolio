import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, title, platform, image, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-8 rounded-3xl xs:w-[480px] w-full border border-gray-800 hover:border-[#915eff] transition-colors duration-300'
    >
        <div className='mt-1 text-center'>
            <p className='text-white font-black text-[30px] mb-4'>{platform}</p>
            <div className='mt-4 flex justify-center items-center'>
                <div className='w-full'>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={image}
                            alt={`achievement-${title}`}
                            className='w-full h-auto object-contain rounded-xl shadow-lg hover:opacity-80 transition-opacity'
                        />
                    </a>
                </div>
            </div>
            <p className='mt-4 text-secondary text-[14px]'>
                {title} - Click to view full stats
            </p>
        </div>
    </motion.div>
);

const Achievements = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Milestones & Stats</p>
                    <h2 className={styles.sectionHeadText}>Achievements.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.title} index={index} {...achievement} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Achievements, "achievements");
