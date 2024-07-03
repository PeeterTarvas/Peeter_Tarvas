import Title from "@/app/ui/titles/MainTitle"
import InformationTempale from "@/app/ui/background/InformationTemplate";
import SubsectionTitle from "@/app/ui/titles/SubsectionTitle";
import LinkGrid from "@/app/ui/link-grid/LinkGrid";
import SkillsGrid from "@/app/ui/skills/SkillsGrid";
import {devOps, frameworksLibraries, programmingSkills, tools} from "@/app/repository/SkillRepository";
import {helmesInfo, lhvPankInfo, taltechInfo, twilioInfo} from "@/app/repository/InformationRepository";
import links from "@/app/repository/ProjectRepository";






export default function Home() {
  return (
    <main className="min-h-screen container bg-white text-black mx-auto py-4">
        <Title/>
        <div className={"flex flex-col container min-h-96"}>
            <SubsectionTitle title={"Education"} isLeft={false}/>
            <InformationTempale isLeft={false} text={taltechInfo}/>

            <SubsectionTitle title={"Career"} isLeft={true}/>
            <InformationTempale isLeft={true} text={helmesInfo}/>
            <InformationTempale isLeft={false} text={lhvPankInfo}/>
            <InformationTempale isLeft={true} text={twilioInfo}/>

            <SubsectionTitle title={"Projects"} isLeft={false}/>
            <LinkGrid links={links} />

            <SubsectionTitle title={"Skills"} isLeft={true}/>
            <SkillsGrid title={'Programming languages'} skills={programmingSkills}/>
            <SkillsGrid title={'Frameworks & Libraries'} skills={frameworksLibraries}/>
            <SkillsGrid title={'DevOps'} skills={devOps}/>
            <SkillsGrid title={'Tools'} skills={tools}/>

        </div>
    </main>
  );
}
