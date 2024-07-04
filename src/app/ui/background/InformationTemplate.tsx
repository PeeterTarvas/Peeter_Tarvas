import React from "react";

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
            elements.push(<li className={"m-4 text-xl"} key={`${key}-${index}`}>{value}</li>);
        });
    });
    return elements;
};

const LeftTemplate = ({ title, text }: InformationTemplateInterface) => {
    return (
        <div className="my-10 p-5 xl:p10 rounded-r-3xl
            min-w-full max-w-full md:min-w-128 md:max-w-128
         bg-regal-blue self-start text-white animate-rollInFromLeft">
            <h1 className={"my-4 text-4xl"}>{title}</h1>
            <ul className={"list-none m-1 text-4xl"}>
                {getText(text)}
            </ul>
        </div>
    );
}

const RightTemplate = ({ title, text }: InformationTemplateInterface) => {
    return (
        <div className="my-10 p-5 xl:p10 rounded-l-3xl
         min-w-full max-w-full md:min-w-128 md:max-w-128 max-h-96
          bg-regal-blue self-end text-white animate-rollInFromRight">
            <h1 className={"my-4 text-4xl"}>{title}</h1>
            <ul className={"list-none m-1 text-4xl"}>
                {getText(text)}
            </ul>
        </div>
    );
}

const InformationTemplate = (props: InformationTemplateInterface) => {
    if (props.isLeft) {
        return <LeftTemplate {...props} />;
    } else {
        return <RightTemplate {...props} />;
    }
}

export default InformationTemplate;