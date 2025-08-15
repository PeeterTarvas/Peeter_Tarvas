import React from "react";
import { motion } from "framer-motion";

interface SubsectionTitleInterface {
    title: string,
    isLeft: boolean
}

const RightTemplate = ({ title }: SubsectionTitleInterface) => {
  return (
      <div className="inline-flex items-center justify-center w-full my-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-hover-blue to-transparent"></div>
          <motion.span 
              className="px-6 py-2 font-medium text-white bg-regal-blue rounded-full mx-4 border border-hover-blue/30 shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
          >
                <h1 className={"font-extrabold text-2xl md:text-3xl gradient-text"}>{title}</h1>
            </motion.span>
          <div className="w-24 h-px bg-gradient-to-r from-hover-blue to-transparent"></div>
      </div>
  )
}

const LeftTemplate = ({ title }: SubsectionTitleInterface) => {
    return (
        <div className="inline-flex items-center justify-center w-full my-12">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-hover-blue"></div>
            <motion.span 
                className="px-6 py-2 font-medium text-white bg-regal-blue rounded-full mx-4 border border-hover-blue/30 shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className={"font-extrabold text-2xl md:text-3xl gradient-text"}>{title}</h1>
            </motion.span>
            <div className="w-full h-px bg-gradient-to-r from-hover-blue to-transparent"></div>
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