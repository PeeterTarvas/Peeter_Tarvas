import React from "react";

export interface ReferenceInterface {
    name: string,
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Reference: React.FC<ReferenceInterface> = ({ name, link, icon: Icon }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            className={`flex rounded-full bg-white text-black p-2  place-self-center hover:shadow-md transition duration-300 ease-in-out`}>
            <div className="flex-shrink-0 justify-self-end mx-1 place-self-center" >
                <Icon className="h-9 w-9" />
            </div>
        </a >
    )
}

export default Reference;