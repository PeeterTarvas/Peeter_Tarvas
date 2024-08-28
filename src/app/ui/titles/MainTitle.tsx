"use client";
import React from "react";
import {TypeAnimation} from "react-type-animation";
import {Reference, ReferenceCopyLinkToClipboard} from "@/app/ui/titles/Refernece";
import {cv, email, github, linkedin} from "@/app/repository/ReferenceRepository";

const MainTile = () => {
    return (
        <section>
            <h1 className="lg:text-6xl text-3xl m-10 mb-4 font-extrabold italic">
                Peeter Tarvas
            </h1>
            <div className="lg:text-3xl text-xl m-10 font-semibold italic">
                <TypeAnimation sequence={[
                    'Software Engineer', 3000,
                    'Quality Assurance Automation Engineer', 3000,
                    'Health athletics enthusiast', 3000,
                    'Skateboarder', 3000,
                    'Average guy', 3000,
                ]} speed={50} wrapper={"span"} repeat={Infinity} />
            </div>
            <div className={"md:m-5 w-full md:w-1/4 grid grid-cols-4 items-center place-content-center"}>
                <ReferenceCopyLinkToClipboard {...email} />
                <Reference {...github} />
                <Reference {...linkedin} />
            </div>
        </section>
    )
}

export default MainTile;