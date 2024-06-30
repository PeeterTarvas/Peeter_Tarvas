import React from "react";

interface SubsectionTitleInterface {
    title: string,
    isLeft: boolean
}

const RightTemplate = ({ title }: SubsectionTitleInterface) => {
  return (
      <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-1 my-8 bg-regal-blue border-0"/>
          <span className="px-3 font-medium text-gray-900 bg-white left-1/2">
                <h1 className={"font-extrabold text-3xl italic"}>{title}</h1>
            </span>
          <hr className="w-12 h-1 my-8 bg-regal-blue border-0"/>
      </div>
  )
}

const LeftTemplate = ({ title }: SubsectionTitleInterface) => {
    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-12 h-1 my-8 bg-regal-blue border-0"/>
            <span className="px-3 font-medium text-gray-900 bg-white left-1/2">
                <h1 className={"font-extrabold text-3xl italic"}>{title}</h1>
            </span>
            <hr className="w-full h-1 my-8 bg-regal-blue border-0"/>
        </div>
    )
}

const SubsectionTitle = (props: {title: string, isLeft: boolean}) => {
  if (props.isLeft) {
      return <LeftTemplate {...props} />
  } else {
      return <RightTemplate {...props} />
  }
};
export default SubsectionTitle;