import Link from "@/app/ui/link-grid/Link";
import React from "react";
import Skill from "@/app/ui/skills/Skill";

interface SkillsGridInterface {
    title: string,
    skills: Map<string, string[]>,

}

const getSkills = (links: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    links.forEach( (value, key) => {
        elements.push(<Skill name={key} color={value[0]} iconPath={value[1]}/>)
    })
    return elements;
}

const LinkGrid = (props: SkillsGridInterface) => {
    return (
        <div>
            {props.title}
            <div className={"grid grid-cols-2 grid-rows-3 gap-6 self-center"}>
                {getSkills(props.skills)}
            </div>
        </div>
    )

}

export default LinkGrid;