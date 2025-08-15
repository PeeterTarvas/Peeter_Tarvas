"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";

interface LinkInterface {
    name: string,
    link: string,
    picture: string,
}

const Link = (props: LinkInterface) => {
    const [isHovered, setIsHovered] = useState(false);

    const basePath = process.env.NODE_ENV === 'production' ? '/Peeter_Tarvas' : '';

    return (
        <motion.a 
            href={props.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className={"relative cursor-pointer p-6 h-96 w-96 " +
                    " bg-gradient-to-br from-regal-blue to-gray-900 text-white " +
                    " transition-all duration-300 ease-in-out rounded-2xl card overflow-hidden"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <h1 className={"text-2xl font-bold text-white"}>{props.name}</h1>
                    <div className="text-right">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white">
                            View Project
                        </span>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={`${basePath}/${props.picture}`}
                        alt={`${props.name} preview`}
                        unoptimized
                        fill
                        sizes="(max-width: 384px) 100vw, 384px"
                        className={`object-cover transition-transform duration-500 ease-in-out 
                            ${isHovered ? 'transform scale-110' : 'transform scale-100'}`}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
        </motion.a>
    );
}

export default Link;