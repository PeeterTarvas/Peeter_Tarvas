import JavaIcon from '../../resources/svg/java-programming-language-icon.svg';
import React from "react";

export interface SkillInterface {
    name: string,
    color: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Skill: React.FC<SkillInterface> = ({ name, color, icon: Icon }) => {
    return (
        <div
            className={`grid grid-cols-2 border-[${color}] border-2 rounded-full bg-white text-black min-h-12 min-w-12 max-h-18 max-w-32 `}>
            <div className="justify-self-end mr-4 place-self-center" >
                <Icon className="h-8 w-8" />
            </div>
            <div className={'justify-self-start place-self-center mr-2'}>
                {name}
            </div>
        </div >
    )
}

export default Skill;