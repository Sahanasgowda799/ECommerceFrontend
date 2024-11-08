import React, { forwardRef } from "react";

interface TextComponentOneProps {
  text: string;
  additionalClassName?: string;
}

const TextComponentOne = ({
  text,
  additionalClassName = "",
}: TextComponentOneProps) => {
  return <div className={`text-xl ${additionalClassName}`}>{text}</div>;
};

export default TextComponentOne;
