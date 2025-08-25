"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";

interface PDFLinkInterface {
    name: string,
    pdfPath: string,
    picture: string,
}

const PDFLink = (props: PDFLinkInterface) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basePath = process.env.NODE_ENV === 'production' ? '/Peeter_Tarvas' : '';

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                className="block"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
            >
                <div
                    className={"relative cursor-pointer p-6 h-96 w-96 project-card text-black " +
                        " transition-all duration-300 ease-in-out rounded-2xl overflow-hidden"}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => {
                        e.preventDefault();
                        openModal();
                    }}
                >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <h1 className={"text-2xl font-bold text-black"}>{props.name}</h1>
                        <div className="text-right">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
            </motion.div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-4 right-4 z-10">
                            <button 
                                className="text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg"
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-full w-full overflow-hidden rounded-3xl">
                            <iframe 
                                src={`${basePath}/${props.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                                className="w-full h-full"
                                title={`${props.name} PDF`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PDFLink;