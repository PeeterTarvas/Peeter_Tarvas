import React from "react";

interface InformationTemplateProps {
    title: string;
    isLeft: boolean;
    text: Map<string, string[]>;
}



const getText = (text: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    text.forEach((values, key) => {
        elements.push(<ul className={"m-1 text-4xl list-none"} key={key}>{key}</ul>);
        values.forEach((value, index) => {
            elements.push(<li className={"m-4 text-xl"} key={`${key}-${index}`}>{value}</li>);
        });
    });
    return elements;
};

const LeftTemplate = ({ text }: InformationTemplateProps) => {
    return (
        <div className="rounded-r-2xl min-h-96 min-w-96 max-h-96 max-w-full bg-regal-blue self-start text-white">
            {getText(text)}
        </div>
    );
}

const RightTemplate = ({ text }: InformationTemplateProps) => {
    return (
        <div className="rounded-l-2xl min-h-96 min-w-96 bg-regal-blue self-end text-white">
            {getText(text)}
        </div>
    );
}

const InformationTemplate = (props: InformationTemplateProps) => {
    const { isLeft } = props;
    if (isLeft) {
        return <LeftTemplate {...props} />;
    } else {
        return <RightTemplate {...props} />;
    }
}

export default InformationTemplate;