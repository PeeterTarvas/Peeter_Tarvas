import React, {useState} from "react";
import { motion } from "framer-motion";

export interface ReferenceInterface {
    name: string,
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

export const Reference: React.FC<ReferenceInterface> = ({name, link, icon: Icon}) => {
    return (
        <motion.a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex rounded-full bg-white/5 backdrop-blur-sm p-3 place-self-center border border-white/10 hover:bg-white/10 transition duration-300 ease-in-out`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex-shrink-0 justify-self-end mx-1 place-self-center">
                <Icon className="h-6 w-6 text-white"/>
            </div>
        </motion.a>
    )
}

export const ReferenceCopyLinkToClipboard: React.FC<ReferenceInterface> = ({ name, link, icon: Icon }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000); // Reset the copied state after 3 seconds
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="relative inline-flex flex-col items-center">
            <motion.div
                onClick={handleCopy}
                className="cursor-pointer flex rounded-full bg-white/5 backdrop-blur-sm p-3 border border-white/10 hover:bg-white/10 transition duration-300 ease-in-out"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="flex-shrink-0 mx-1">
                    <Icon className="h-6 w-6 text-white" />
                </div>
            </motion.div>
            {copied && (
                <motion.span 
                    className="absolute top-full mt-2 text-sm text-hover-blue"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    Copied!
                </motion.span>
            )}
        </div>
    );
};
