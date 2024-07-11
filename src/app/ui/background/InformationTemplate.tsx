import React from "react";
import {useRef} from "react";
import { motion, useInView} from "framer-motion";

export interface InformationTemplateInterface {
    title: string,
    isLeft: boolean;
    text: Map<string, string[]>;
}

const getText = (text: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    text.forEach((values, key) => {
        elements.push(<ul className={"list-none mx-2 text-2xl"} key={key}>{key}</ul>);
        values.forEach((value, index) => {
            elements.push(<li className={"mx-2 my-4 text-xl"} key={`${key}-${index}`}>{value}</li>);
        });
    });
    return elements;
};

const LeftTemplate = ({ title, text }: InformationTemplateInterface & { ref: React.RefObject<HTMLDivElement> }) => {
    return (
        <section ref={ref}>
            <div className="my-10 p-5 xl:p10 rounded-r-3xl
                min-w-full max-w-full md:min-w-128 md:max-w-128
             bg-regal-blue self-start text-white animate-rollInFromLeft shadow-lg">
                <h1 className={"my-4 text-4xl"}>{title}</h1>
                <ul className={"list-none m-1 text-4xl"}>
                    {getText(text)}
                </ul>
            </div>
        </section>
    );
}

const RightTemplate = ({ title, text }: InformationTemplateInterface & { ref: React.RefObject<HTMLDivElement> }) => {
    return (
        <section ref={ref}>
            <div className="my-10 p-5 xl:p10 rounded-l-3xl
             min-w-full max-w-full md:min-w-128 md:max-w-128 max-h-96
              bg-regal-blue self-end text-white animate-rollInFromRight drop-shadow-sm">
                <h1 className={"my-4 text-4xl"}>{title}</h1>
                <ul className={"list-none m-1 text-4xl"}>
                    {getText(text)}
                </ul>
            </div>
        </section>
    );
}

const InformationTemplate = (props: InformationTemplateInterface) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    if (props.isLeft) {
        return <LeftTemplate {...props} ref={ref} />;
    } else {
        return <RightTemplate {...props} ref={ref} />;
    }
}

export default InformationTemplate;