import JavaIcon from '../../resources/svg/java-programming-language-icon.svg';
import React from "react";

export interface SkillInterface {
    name: string,
    color: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Skill: React.FC<SkillInterface> = ({ name, color, icon: Icon }) => {
    return (
        <div className={`border-[${color}] border-2 rounded-full bg-white text-black min-h-12 min-w-12 max-h-12 max-w-12 `}>
            <Icon className="h-8 w-8 mr-2" />
            {name}
        </div >
    )
}

export default Skill;