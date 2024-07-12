import React from "react";

export interface ReferenceInterface {
    name: string,
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Reference: React.FC<ReferenceInterface> = ({ name, link, icon: Icon }) => {
    return (
        <a href={link}
            className={`flex rounded-full bg-white text-black px-4`}>
            <div className="flex-shrink-0 justify-self-end mx-1 place-self-center" >
                <Icon className="h-9 w-9" />
            </div>
        </a >
    )
}

export default Reference;