import Title from "@/app/ui/titles/MainTitle"
import InformationTempale from "@/app/ui/background/InformationTemplate";
import SubsectionTitle from "@/app/ui/titles/SubsectionTitle";
import LinkGrid from "@/app/ui/link-grid/LinkGrid";
import SkillsGrid, {SkillsGridInterface} from "@/app/ui/skills/SkillsGrid";
import {skills} from "@/app/repository/IconGridRepository";


const try_: string[] = [
    'Member of the Student Parliament and the Academic Committee',
    'Member of TalTech Student Council of the School of IT',
    'Exchange year with Erasmus+ at University of Alcala, Spain'
]

const txt = new Map<string, string[]>([
    ['Tallinn University of Technology - Bachelor of Science in Engineering - Informatics', try_]
]);

const links = new Map<string, string>([
    ['Drawing Strategies Analysis for \n' +
    'Embedded Figure Drawing Tests', 'https://digikogu.taltech.ee/et/Item/270479c8-0f65-44b3-a4b2-4aec65e28d58'],
    ['BoxheadTypeGame', 'https://github.com/PeeterTarvas/BoxheadTypeGame'],
    ['JavaTask', 'https://github.com/PeeterTarvas/BoxheadTypeGame'],
    ['StockViewer', 'https://github.com/PeeterTarvas/BoxheadTypeGame'],
    ['AntColonySimulator', 'https://github.com/PeeterTarvas/BoxheadTypeGame'],
    ['CharningGrid', 'https://github.com/PeeterTarvas/BoxheadTypeGame'],
]);




export default function Home() {
  return (
    <main className=" border-b-blue-950 min-h-screen container bg-white text-black mx-auto py-4">
        <Title/>
        <div className={"flex flex-col container min-h-96"}>
            <SubsectionTitle title={"try"} isLeft={true}/>
            <InformationTempale title={"Test"} isLeft={false}  text={txt}/>
            <SubsectionTitle title={"try"} isLeft={true}/>
            <InformationTempale title={"Test2"} isLeft={true} text={txt}/>
            <SubsectionTitle title={"Projects"} isLeft={true}/>
            <LinkGrid links={links} />
            <SubsectionTitle title={"Skills"} isLeft={false}/>
            <SkillsGrid title={'Programming languages'} skills={skills}/>
        </div>
    </main>
  );
}
