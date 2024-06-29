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
        elements.push(<Skill key={index} name={skill.name} borderColor={skill.borderColor} icon={skill.icon} />)
    })
    return elements;
}

const SkillsGrid: React.FC<SkillsGridInterface> = (props: SkillsGridInterface) => {
    return (
        <div className={"m-4"}>
            {props.title}
            <div className={"grid grid-cols-10 gap-6 self-center"}>
                {getSkills(props)}
            </div>
        </div>

    );
};

export default SkillsGrid;