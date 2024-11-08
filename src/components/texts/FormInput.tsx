import React from "react";

interface FormInputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  autocomplete?: string;
  required?: Boolean;
  additionalClassname?: string;
}

const FormInput = ({
  type,
  id,
  name,
  autocomplete,
  required,
  placeholder,
  additionalClassname = "",
}: FormInputProps) => {
  return (
    <input
      className={`text-sm p-2 rounded ${additionalClassname}`}
      id={id}
      name={name}
      placeholder={placeholder}
      autocomplete={autocomplete}
      type={type}></input>
  );
};

export default FormInput;
