import Title from "@/app/ui/titles/MainTitle"
import InformationTempale from "@/app/ui/background/InformationTemplate";
import SubsectionTitle from "@/app/ui/titles/SubsectionTitle";
import LinkGrid from "@/app/ui/link-grid/LinkGrid";
import SkillsGrid from "@/app/ui/skills/SkillsGrid";
import {devOps, frameworksLibraries, programmingSkills, tools} from "@/app/repository/SkillRepository";
import {aarhusInfo, helmesInfo, lhvPankInfo, taltechInfo, twilioInfo} from "@/app/repository/InformationRepository";
import links from "@/app/repository/ProjectRepository";
import Bio from "@/app/ui/background/Bio";






export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden min-w-full container bg-white text-black ">
        <div className="p-10">
            <Title/>
        </div>
        <div className={"flex flex-col container min-w-full min-h-96"}>
            <Bio/>
            <SubsectionTitle title={"Education"} isLeft={false}/>
            <InformationTempale {...aarhusInfo}/>
            <InformationTempale {...taltechInfo}/>
            <SubsectionTitle title={"Career"} isLeft={true}/>
            <InformationTempale {...helmesInfo} />
            <InformationTempale {...lhvPankInfo}/>
            <InformationTempale {...twilioInfo} />

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
