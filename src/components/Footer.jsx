import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";

const Footer = () => {
    return (
        <footer className={`${styles.paddingX} w-full py-10 flex justify-between items-center bg-primary border-t border-secondary/20 glassmorphism mt-10`}>
            <p className="text-secondary text-[14px]">
                © 2024 Prathmesh Kadam. All rights reserved.
            </p>

            <div className="flex gap-5">
                <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://github.com/prathmesh-kadam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center cursor-pointer bg-tertiary rounded-full border border-white/10 hover:border-white/40 transition-all shadow-lg"
                >
                    <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </motion.a>
                <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://www.linkedin.com/in/prathmesh0524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center cursor-pointer bg-tertiary rounded-full border border-white/10 hover:border-white/40 transition-all shadow-lg"
                >
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 object-contain" />
                </motion.a>
                <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="mailto:prathmeshkadam0524@gmail.com"
                    className="w-10 h-10 flex justify-center items-center cursor-pointer bg-tertiary rounded-full border border-white/10 hover:border-white/40 transition-all shadow-lg"
                >
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" alt="email" className="w-1/2 h-1/2 object-contain" />
                </motion.a>
            </div>
        </footer>
    );
};

export default Footer;
