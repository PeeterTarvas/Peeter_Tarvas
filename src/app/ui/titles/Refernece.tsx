import React, {useState} from "react";

export interface ReferenceInterface {
    name: string,
    link: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
}

export const Reference: React.FC<ReferenceInterface> = ({name, link, icon: Icon}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
           className={`flex rounded-full bg-white text-black p-2  place-self-center hover:shadow-md transition duration-300 ease-in-out`}>
            <div className="flex-shrink-0 justify-self-end mx-1 place-self-center">
                <Icon className="h-9 w-9"/>
            </div>
        </a>
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
            <div
                onClick={handleCopy}
                className="cursor-pointer flex rounded-full bg-white text-black p-2 hover:shadow-md transition duration-300 ease-in-out"
            >
                <div className="flex-shrink-0 mx-1">
                    <Icon className="h-9 w-9" />
                </div>
            </div>
            {copied && (
                <span className="absolute top-full mt-2 text-sm text-green-600 opacity-0.5 animate-fadeInOut">
                    Copied to clipboard!
                </span>
            )}
        </div>
    );
};
