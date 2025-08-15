import React from "react";
import { motion } from "framer-motion";

const Bio = () => (
    <motion.div 
        className="my-10 p-6 rounded-2xl card
            min-w-full max-w-full self-center text-white text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <p className="text-center">
            Hi, I am a Software Developer with an aim of creating good quality applications, currently specializing
            mainly on E2E test development but also doing other things on the side.
            Also I am fond of Computer Vision and Machine Learning.
            Besides IT related topics I also like to enjoy nature and working out
        </p>
    </motion.div>
);

export default Bio;