import Link from "@/app/ui/link-grid/Link";
import PDFLink from "@/app/ui/link-grid/PDFLink";
import React from "react";

interface LinkGridInterface {
    links: Map<string, string[]>,
}

const getLinks = (links: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    links.forEach((value, key) => {
        // Check if this is a PDF link (identified by having a .pdf extension in the second element)
        if (value[1] && value[1].endsWith('.pdf')) {
            elements.push(<PDFLink name={key} pdfPath={value[1]} picture={value[2] || "images/system-security-preview.svg"} />)
        } else {
            elements.push(<Link name={key} link={value[0]} picture={value[1]} />)
        }
    })
    return elements;
}

const LinkGrid = (props: LinkGridInterface) => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 self-center"}>
            {getLinks(props.links)}
        </div>
    )
}

export default LinkGrid;