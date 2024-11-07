import React, { forwardRef } from "react";

interface TextComponentOneProps {
  text: string;
  additionalClassName?: string;
}

const TextComponentOne = forwardRef<HTMLHeadingElement, TextComponentOneProps>(
  ({ text, additionalClassName = "" }, ref) => {
    return (
      <h2
        ref={ref}
        className={additionalClassName}>
        {text}
      </h2>
    );
  }
);

export default TextComponentOne;
