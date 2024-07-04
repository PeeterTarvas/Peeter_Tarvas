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
            <h1 className={"text-2xl mx-2 font-bold"}>{props.title}</h1>
            <div className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-6 self-center m-4"}>
                {getSkills(props)}
            </div>
        </div>

    );
};

export default SkillsGrid;