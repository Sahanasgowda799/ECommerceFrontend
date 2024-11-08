import React from "react";
interface TextComponentTwoProps {
  text: string;
  additionalClassName?: string;
}

const TextComponentTwo = ({
  text,
  additionalClassName = "",
}: TextComponentTwoProps) => {
  return <div className={`text-xs ${additionalClassName}`}>{text}</div>;
};

export default TextComponentTwo;
