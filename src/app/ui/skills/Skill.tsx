import JavaIcon from '../../resources/svg/java-programming-language-icon.svg';
import React from "react";

export interface SkillInterface {
    name: string,
    borderColor: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Skill: React.FC<SkillInterface> = ({ name, borderColor, icon: Icon }) => {
    return (
        <div
            className={`shadow-lg flex grid-cols-2 ${borderColor} border-2 rounded-full bg-white text-black min-h-12 min-w-40 max-h-32 max-w-40 px-4 `}>
            <div className="flex-shrink-0 justify-self-end mx-1 place-self-center" >
                <Icon className="h-9 w-9" />
            </div>
            <div className={'justify-self-center place-self-center text-center mr-1 flex-grow whitespace-nowrap text-ellipsis'}>
                <h1 className="whitespace-nowrap overflow-hidden text-ellipsis">{name}</h1>
            </div>
        </div >
    )
}

export default Skill;