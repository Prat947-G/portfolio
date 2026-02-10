import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ index, name, issuer, date, image, credential_link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
        <div className='relative w-full h-[230px]'>
            <img
                src={image}
                alt={name}
                className='w-full h-full object-cover rounded-2xl'
            />
        </div>

        <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <div className='mt-2 flex justify-between items-center'>
                <p className='text-secondary text-[14px]'>{issuer}</p>
                <p className='text-secondary text-[14px]'>{date}</p>
            </div>
            {/* Optional: Link to credential */}
            {credential_link && (
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => window.open(credential_link, "_blank")}
                        className="bg-primary py-2 px-4 rounded-lg text-[14px] font-medium hover:bg-opacity-80 transition-all text-white"
                    >
                        View Credential
                    </button>
                </div>
            )}
        </div>
    </motion.div>
);

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My learning path</p>
                <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {certifications.map((cert, index) => (
                    <CertificationCard key={`cert-${index}`} index={index} {...cert} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");
