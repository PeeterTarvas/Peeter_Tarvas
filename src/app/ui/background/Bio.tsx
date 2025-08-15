import React from "react";
import { motion } from "framer-motion";

const Bio = () => (
    <motion.div 
        className="my-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
            min-w-full max-w-full self-center text-white text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <p className="text-center">
            Hi, I am a Software Developer with an aim of creating good quality applications, currently specializing
            mainly on E2E test development but also doing other things on the side.
            Also I am very fond of Computer Vision and Machine Learning.
            Besides IT related topics I also like to enjoy nature, working out and skateboarding :)
        </p>
    </motion.div>
);

export default Bio;