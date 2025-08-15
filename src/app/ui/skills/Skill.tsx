import JavaIcon from '../../resources/svg/java-programming-language-icon.svg';
import React from "react";
import { motion } from "framer-motion";

export interface SkillInterface {
    name: string,
    borderColor: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

const Skill: React.FC<SkillInterface> = ({ name, borderColor, icon: Icon }) => {
    return (
        <motion.div
            className={`flex items-center justify-between skill-card min-h-12 min-w-40 max-w-40 px-4 py-2 border ${borderColor}`}
        >
            <div className="flex-shrink-0 mx-1" >
                <Icon className="h-8 w-8" />
            </div>
            <div className={'text-center flex-grow whitespace-nowrap overflow-hidden'}>
                <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium">{name}</h1>
            </div>
        </motion.div>
    )
}

export default Skill;