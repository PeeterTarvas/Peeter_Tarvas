"use client";
import React from "react";
import {TypeAnimation} from "react-type-animation";
import {Reference, ReferenceCopyLinkToClipboard} from "@/app/ui/titles/Refernece";
import {cv, email, github, linkedin} from "@/app/repository/ReferenceRepository";
import { motion } from "framer-motion";

const MainTile = () => {
    return (
        <section className="text-center relative">
            <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 gradient-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Peeter Tarvas
            </motion.h1>
            <motion.div 
                className="text-xl md:text-2xl lg:text-3xl font-semibold italic mb-8 min-h-[2.5rem] text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <TypeAnimation 
                    sequence={[
                        'Software Engineer', 3000,
                        'Quality Assurance Automation Engineer', 3000,
                        'Health athletics enthusiast', 3000,
                        'Skateboarder', 3000,
                        'Average guy', 3000,
                    ]} 
                    speed={50} 
                    wrapper={"span"} 
                    repeat={Infinity} 
                />
            </motion.div>
            <motion.div 
                className="flex justify-center space-x-6 md:space-x-8 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <ReferenceCopyLinkToClipboard {...email} />
                <Reference {...github} />
                <Reference {...linkedin} />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </section>
    )
}

export default MainTile;