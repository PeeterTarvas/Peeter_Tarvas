"use client";

import Title from "@/app/ui/titles/MainTitle"
import InformationTempale from "@/app/ui/background/InformationTemplate";
import SubsectionTitle from "@/app/ui/titles/SubsectionTitle"
import LinkGrid from "@/app/ui/link-grid/LinkGrid"
import SkillsGrid from "@/app/ui/skills/SkillsGrid"
import {devOps, frameworksLibraries, programmingSkills, tools} from "@/app/repository/SkillRepository"
import {aarhusInfo, helmesInfo, lhvPankInfo, taltechInfo, twilioInfo} from "@/app/repository/InformationRepository"
import links from "@/app/repository/ProjectRepository"
import Bio from "@/app/ui/background/Bio"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden min-w-full container text-white">
      <div className="p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title/>
        </motion.div>
      </div>
      
      <div className={"flex flex-col container min-w-full min-h-96 px-4 md:px-10"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Bio/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SubsectionTitle title={"Education"} isLeft={false}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <InformationTempale {...aarhusInfo}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <InformationTempale {...taltechInfo}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SubsectionTitle title={"Career"} isLeft={true}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <InformationTempale {...helmesInfo} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <InformationTempale {...lhvPankInfo}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <InformationTempale {...twilioInfo} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <SubsectionTitle title={"Projects"} isLeft={false}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <LinkGrid links={links} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <SubsectionTitle title={"Skills"} isLeft={true}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <SkillsGrid title={'Programming languages'} skills={programmingSkills}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <SkillsGrid title={'Frameworks & Libraries'} skills={frameworksLibraries}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <SkillsGrid title={'DevOps'} skills={devOps}/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <SkillsGrid title={'Tools'} skills={tools}/>
        </motion.div>
      </div>
      
      {/* Decorative elements for better visual contrast */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}
