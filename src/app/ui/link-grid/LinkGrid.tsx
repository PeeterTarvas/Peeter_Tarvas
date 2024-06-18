import Link from "@/app/ui/link-grid/Link";
import React from "react";

interface LinkGridInterface {
    links: Map<string, string>,

}

const getLinks = (links: Map<string, string>) => {
    const elements: React.JSX.Element[] = [];
    links.forEach( (value, key) => {
        elements.push(<Link name={key} link={value}/>)
    })
    return elements;
}

const LinkGrid = (props: LinkGridInterface) => {
    return (
        <div className={"grid grid-cols-2 grid-rows-3 gap-6 self-center"}>
            {getLinks(props.links)}
        </div>
    )
  
}

export default LinkGrid;