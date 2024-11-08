import React, { forwardRef } from "react";
interface FormLabelProps {
  text: string;
  forText: string;
  additionalClassname?: string;
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ text, forText, additionalClassname = "" }, ref) => {
    return (
      <label
        ref={ref}
        for={forText}
        className={`block text-sm/6 font-medium text-gray-900 ${additionalClassname}`}>
        {text}
      </label>
    );
  }
);

export default FormLabel;
