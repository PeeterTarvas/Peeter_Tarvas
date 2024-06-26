import Link from "@/app/ui/link-grid/Link";
import React from "react";
import Skill, {SkillInterface} from "@/app/ui/skills/Skill";

export interface SkillsGridInterface {
    title: string,
    skills: SkillInterface[];
}


const getSkills = (props: SkillsGridInterface) => {
    const elements: React.JSX.Element[] = [];
    props.skills.forEach( (skill, index) => {
        elements.push(<Skill key={index} name={skill.name} color={skill.color} icon={skill.icon} />)
    })
    return elements;
}

const SkillsGrid: React.FC<SkillsGridInterface> = (props: SkillsGridInterface) => {
    return (
        <div className={"grid grid-cols-10 gap-6 self-center"}>
            {getSkills(props)}
        </div>
    );
};

export default SkillsGrid;