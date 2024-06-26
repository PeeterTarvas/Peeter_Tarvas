import JavaIcon from '@/app/resources/svg/java-icon.svg';
import PythonIcon from '@/app/resources/svg/python-icon.svg';
import TypescriptIcon from '@/app/resources/svg/typescript-icon.svg';
import JavascriptIcon from '@/app/resources/svg/javascript-icon.svg';
import PostgresqlIcon from '@/app/resources/svg/postgresql-icon.svg';
import MSSQLIcon from '@/app/resources/svg/microsoft-sql-server-icon.svg';
import OracleIcon from '@/app/resources/svg/oracle-icon.svg';
import MatlabIcon from '@/app/resources/svg/matlab-icon.svg';
import RIcon from '@/app/resources/svg/r-icon.svg';
import PowershellIcon from '@/app/resources/svg/powershell-icon.svg';
import BashIcon from '@/app/resources/svg/bash-icon.svg';
import HtmlIcon from '@/app/resources/svg/html-icon.svg';
import CssIcon from '@/app/resources/svg/css-icon.svg';



import {SkillInterface} from "@/app/ui/skills/Skill";

const JavaSkill: SkillInterface = {
    name: 'Java',
    color: 'amber-500',
    icon: JavaIcon,
}

const PythonSkill: SkillInterface = {
    name: 'Python',
    color: 'b-blue-950',
    icon: PythonIcon,
}

const TypescriptSkill: SkillInterface = {
    name: 'Typescript',
    color: 'b-blue-800',
    icon: TypescriptIcon,
}

const JavascriptSkill: SkillInterface = {
    name: 'Javascript',
    color: 'amber-400',
    icon: JavascriptIcon,
}

const PostgresqlSkill: SkillInterface = {
    name: 'Postgre',
    color: 'b-blue-800',
    icon: PostgresqlIcon,
}

const MSSQLSkill: SkillInterface = {
    name: 'MSSQL',
    color: 'b-blue-800',
    icon: MSSQLIcon,
}

const OracleSkill: SkillInterface = {
    name: 'Oracle',
    color: 'b-blue-800',
    icon: OracleIcon,
}

const MatlabSkill: SkillInterface = {
    name: 'Matlab',
    color: 'b-blue-800',
    icon: MatlabIcon,
}

const RSkill: SkillInterface = {
    name: 'R',
    color: 'b-blue-800',
    icon: RIcon,
}

const PowershellSkill: SkillInterface = {
    name: 'Powershell',
    color: 'b-blue-800',
    icon: PowershellIcon,
}

const BashSkill: SkillInterface = {
    name: 'Bash',
    color: 'b-blue-800',
    icon: BashIcon,
}

const HtmlSkill: SkillInterface = {
    name: 'HTML',
    color: 'b-blue-800',
    icon: HtmlIcon,
}

const CssSkill: SkillInterface = {
    name: 'CSS',
    color: 'b-blue-800',
    icon: CssIcon,
}

export const skills: SkillInterface[] = [JavaSkill, PythonSkill, TypescriptSkill,
    JavascriptSkill, PostgresqlSkill, MSSQLSkill, OracleSkill, MatlabSkill, RSkill, PowershellSkill, BashSkill, HtmlSkill, CssSkill]