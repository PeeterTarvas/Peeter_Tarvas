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
            className={`flex grid-cols-2 ${borderColor} border-2 rounded-full bg-white text-black min-h-12 min-w-12 max-h-32 max-w-32 `}>
            <div className="justify-self-end ml-2 mr-2 place-self-center" >
                <Icon className="h-7 w-7" />
            </div>
            <div className={'justify-self-center place-self-center mr-2 flex-grow whitespace-nowrap text-ellipsis'}>
                {name}
            </div>
        </div >
    )
}

export default Skill;