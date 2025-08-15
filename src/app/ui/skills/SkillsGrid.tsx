import Link from "@/app/ui/link-grid/Link";
import React from "react";
import Skill, {SkillInterface} from "@/app/ui/skills/Skill";
import { motion } from "framer-motion";

export interface SkillsGridInterface {
    title: string,
    skills: SkillInterface[];
}


const getSkills = (props: SkillsGridInterface) => {
    const elements: React.JSX.Element[] = [];
    props.skills.forEach( (skill, index) => {
        elements.push(
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
            >
                <Skill name={skill.name} borderColor={skill.borderColor} icon={skill.icon} />
            </motion.div>
        );
    })
    return elements;
}

const SkillsGrid: React.FC<SkillsGridInterface> = (props: SkillsGridInterface) => {
    return (
        <div className={"m-4"}>
            <motion.h1 
                className={"text-2xl mx-2 font-bold mb-6"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                {props.title}
            </motion.h1>
            <div className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 self-center m-4"}>
                {getSkills(props)}
            </div>
        </div>

    );
};

export default SkillsGrid;