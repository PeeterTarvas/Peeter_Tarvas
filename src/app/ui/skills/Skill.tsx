import {SVGProps} from "react";

interface SkillInterface {
    name: string,
    color: string,
    iconPath: string,
}

const Skill = (props: SkillInterface) => {
    return (
        <div className={`border-[${props.color}] rounded-full bg-white text-black min-h-32 min-w-50 `}>
            <img src={'E:\\home\\homepage\\src\\app\\resources\\svg\\java-programming-language-icon.svg'} alt={'none'}/>
            {props.name}
        </div >
    )
}

export default Skill;