import React from "react";

interface ButtonProps {
  buttonText: string;
  buttonType: string;
  filled?: boolean;
  buttonIcon?: boolean;
}

const Button = ({ buttonText, buttonType }: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className="rounded-lg border px-6 py-2 bg-green-600">
      {buttonText}
    </button>
  );
};

export default Button;
