import React from "react";


const SubsectionTitle = (props: {title: string, isLeft: boolean}) => {
    return (
    <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-1 my-8 bg-regal-blue border-0"/>
        <span className="px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
            <h1 className={"font-extrabold text-3xl italic"}>{props.title}</h1>
        </span>
        <hr className="w-12 h-1 my-8 bg-regal-blue border-0"/>
    </div>
    );
};
export default SubsectionTitle;