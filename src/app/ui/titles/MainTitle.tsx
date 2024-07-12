"use client";
import React from "react";
import {TypeAnimation} from "react-type-animation";
import Reference, {ReferenceInterface} from "@/app/ui/titles/Refernece";
import Refernece from "@/app/ui/titles/Refernece";
import EmailIcon from "@/app/resources/svg/email-icon.svg";
import GithubIcon from "@/app/resources/svg/github-icon.svg";
import LinkedInIcon from "@/app/resources/svg/linkedin-icon.svg";


const email: ReferenceInterface = {
    name: 'email',
    link: 'peetertarvas@gmail.com',
    icon: EmailIcon
}

const github: ReferenceInterface = {
    name: 'github',
    link: 'https://github.com/PeeterTarvas',
    icon: GithubIcon
}

const linkedin: ReferenceInterface = {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/peeter-tarvas-690a58171/',
    icon: LinkedInIcon
}

const MainTile = () => {
    return (
        <section>
            <h1 className="lg:text-6xl text-3xl m-10 mb-4 font-extrabold italic">
                Peeter Tarvas
            </h1>
            <div className="lg:text-3xl text-xl m-10 font-semibold italic">
                <TypeAnimation sequence={[
                    'Software Engineer', 2000,
                    'Quality Assurance Automation Engineer', 2000,
                    'Health athletes enthusiast', 2000,
                    'Skateboarder', 2000,
                    'Average guy', 2000,
                ]} speed={60} wrapper={"span"} repeat={Infinity} />
            </div>
            <div className={"w-1/4 grid grid-cols-4"}>
                <Reference {...email} />
                <Reference {...github} />
                <Reference {...linkedin} />
            </div>
        </section>
    )
}

export default MainTile;