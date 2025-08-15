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
            elements.push(<ul className={"list-none text-2xl md:text-3xl font-semibold highlight"} key={key}>{key}</ul>);
            values.forEach((value, index) => {
                elements.push(<li className={"my-3 text-lg md:text-xl text-white/90"} key={`${key}-${index}`}>{value}</li>);
            });
        });
    });
    return elements;
};

const LeftTemplate = React.forwardRef<HTMLDivElement, InformationTemplateInterface>(({ title, text }, ref) => (
    <motion.div 
        ref={ref} 
        className="my-8 p-6 rounded-2xl card
            min-w-full max-w-full md:min-w-128 md:max-w-128
            self-start text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h1 className={"mb-4 mt-2 text-2xl md:text-4xl font-bold gradient-text"}>{title}</h1>
        <ul className={"list-none m-1"}>
            {getText(text)}
        </ul>
    </motion.div>
));
LeftTemplate.displayName = "LeftTemplate";

const RightTemplate = React.forwardRef<HTMLDivElement, InformationTemplateInterface>(({ title, text }, ref) => (
    <motion.div 
        ref={ref} 
        className="my-8 p-6 rounded-2xl card
            min-w-full max-w-full md:min-w-128 md:max-w-128
            self-end text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h1 className={"mb-4 mt-2 text-2xl md:text-4xl font-bold gradient-text"}>{title}</h1>
        <ul className={"list-none m-1"}>
            {getText(text)}
        </ul>
    </motion.div>
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