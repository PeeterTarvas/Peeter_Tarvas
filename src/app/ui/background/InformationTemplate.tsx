"use client"
import React from "react";
import {useRef} from "react";
import { motion, useInView} from "framer-motion";

export interface InformationTemplateInterface {
    title: string,
    isLeft: boolean;
    text: Map<string, string[]>[];
}

const getText = (text: Map<string, string[]>[]) => {
    const elements: React.JSX.Element[] = [];
    text.forEach(element  => {
        element.forEach((values, key) => {
            elements.push(<ul className={"list-none text-3xl"} key={key}>{key}</ul>);
            values.forEach((value, index) => {
                elements.push(<li className={"ml-4 my-4 text-xl"} key={`${key}-${index}`}>{value}</li>);
            });
        });
    });
    return elements;
};

const LeftTemplate = React.forwardRef<HTMLDivElement, InformationTemplateInterface>(({ title, text }, ref) => (
        <div ref={ref} className="my-10 p-2 lg:p-6 rounded-3xl
            min-w-full max-w-full md:min-w-128 md:max-w-128
            bg-regal-blue lg:ml-10 self-start text-white animate-rollInFromLeft shadow-lg">
            <h1 className={"lg:mb-6 lg:mt-4 lg:text-5xl my-4 text-2xl"}>{title}</h1>
            <ul className={"list-none m-1 text-4xl"}>
                {getText(text)}
            </ul>
        </div>
));
LeftTemplate.displayName = "LeftTemplate";

const RightTemplate = React.forwardRef<HTMLDivElement, InformationTemplateInterface>(({ title, text }, ref) => (
        <div ref={ref} className="my-10 p-2 lg:p-6 rounded-3xl
            min-w-full max-w-full md:min-w-128 md:max-w-128 max-h-128
            bg-regal-blue lg:mr-10 self-end text-white animate-rollInFromRight drop-shadow-sm">
            <h1 className={"lg:mb-6 lg:mt-4 lg:text-5xl my-4 text-2xl"}>{title}</h1>
            <ul className={"list-none m-1 text-4xl"}>
                {getText(text)}
            </ul>
        </div>
));
RightTemplate.displayName = "RightTemplate";


const InformationTemplate = (props: InformationTemplateInterface) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    if (props.isLeft) {
        return <LeftTemplate {...props} ref={ref} />;
    } else {
        return <RightTemplate {...props} ref={ref} />;
    }
}
InformationTemplate.displayName = "InformationTemplate";

export default InformationTemplate;