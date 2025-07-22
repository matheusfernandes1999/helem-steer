import React from "react";

type ButtonProps = {
  text: any;
  size?: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "px-4 py-2 text-sm",
  medium: "px-8 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  text,
  size = "medium",
}) => {
  return (
    <button
      className={`mx-6 md:mx-0 bg-primary-helem-500 hover:bg-primary-helem-600 rounded-lg font-semibold bg-color-p text-white text-center cursor-pointer border-none transition-colors duration-200 ease-linear ${sizeClasses[size]}`}
    >
      {text}
    </button>
  );
};

export default Button;
