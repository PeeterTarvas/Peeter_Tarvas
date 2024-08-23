"use client";
import React, { useState } from 'react';
import image from "../assets/thesis.png";


interface LinkInterface {
    name: string,
    link: string,
    picture: string,
}

const Link = (props: LinkInterface) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={props.link}>
            <button
                className={"relative cursor-pointer p-6 max-h-96 max-w-96 lg:max-w-128 min-h-96 min-w-96 " +
                    " lg:min-w-128 bg-gradient-to-br from-regal-blue via-regal-blue shadow-bottom-sm text-white " +
                    " transition duration-300 ease-in-out drop-shadow-sm hover:bg-regal-blue rounded-3xl " +
                    " hover:rounded-none overflow-hidden"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h1 className={"text-xl justify-self-start self-start"}>{props.name}</h1>
                <img
                    src={props.picture}
                    alt="Hovered Image"
                    className={`absolute inset-x-0 bottom-0 w-full h-full object-cover transition-transform duration-200 ease-in-out 
                    ${isHovered ? 'transform translate-y-0' : 'transform translate-y-full'}`}
                />
            </button>
        </a>
    );
}

export default Link;