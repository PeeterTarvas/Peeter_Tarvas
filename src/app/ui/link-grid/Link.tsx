"use client";
import React, { useState } from 'react';
import Image from 'next/image'

interface LinkInterface {
    name: string,
    link: string,
    picture: string,
}

const Link = (props: LinkInterface) => {
    const [isHovered, setIsHovered] = useState(false);

    const basePath = process.env.NODE_ENV === 'production' ? '/Peeter_Tarvas' : '';

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button
                className={"relative cursor-pointer p-6 max-h-96 max-w-96 min-h-96 min-w-96 " +
                    " bg-gradient-to-br from-regal-blue via-regal-blue shadow-bottom-sm text-white " +
                    " transition duration-300 ease-in-out drop-shadow-sm hover:bg-regal-blue rounded-3xl " +
                    " hover:rounded-none overflow-hidden"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h1 className={"text-xl justify-self-center self-center"}>{props.name}</h1>
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={`${basePath}/${props.picture}`}
                        alt={`${props.name} preview`}
                        unoptimized
                        fill
                        sizes="(max-width: 384px) 100vw, 384px"
                        className={`object-cover transition-transform duration-200 ease-in-out 
                            ${isHovered ? 'transform translate-y-0' : 'transform translate-y-full'}`}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </button>
        </a>
    );
}

export default Link;