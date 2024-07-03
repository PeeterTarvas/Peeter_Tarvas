import React from "react";

interface InformationTemplateInterface {
    isLeft: boolean;
    text: Map<string, string[]>;
}


const getText = (text: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    text.forEach((values, key) => {
        elements.push(<ul className={"list-none m-1 text-4xl"} key={key}>{key}</ul>);
        values.forEach((value, index) => {
            elements.push(<li className={"m-4 text-xl"} key={`${key}-${index}`}>{value}</li>);
        });
    });
    return elements;
};

const LeftTemplate = ({ text }: InformationTemplateInterface) => {
    return (
        <div className="my-10 p-10 rounded-r-3xl min-w-96 max-h-96 max-w-full bg-regal-blue self-start text-white animate-rollInFromLeft">
            {getText(text)}
        </div>
    );
}

const RightTemplate = ({ text }: InformationTemplateInterface) => {
    return (
        <div className="my-10 p-10 rounded-l-3xl min-w-96 bg-regal-blue max-w-full self-end text-white animate-rollInFromRight">
            {getText(text)}
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