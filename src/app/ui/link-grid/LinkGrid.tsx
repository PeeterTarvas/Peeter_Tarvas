import Link from "@/app/ui/link-grid/Link";
import PDFLink from "@/app/ui/link-grid/PDFLink";
import React from "react";
import { motion } from "framer-motion";

interface LinkGridInterface {
    links: Map<string, string[]>,
}

const getLinks = (links: Map<string, string[]>) => {
    const elements: React.JSX.Element[] = [];
    let index = 0;
    links.forEach((value, key) => {
        if (value[1] && value[1].endsWith('.pdf')) {
            elements.push(
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <PDFLink name={key} pdfPath={value[1]} picture={value[2] || "images/system-security-preview.svg"} />
                </motion.div>
            );
        } else {
            elements.push(
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <Link name={key} link={value[0]} picture={value[1]} />
                </motion.div>
            );
        }
        index++;
    })
    return elements;
}

const LinkGrid = (props: LinkGridInterface) => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 self-center mb-10"}>
            {getLinks(props.links)}
        </div>
    )
}

export default LinkGrid;