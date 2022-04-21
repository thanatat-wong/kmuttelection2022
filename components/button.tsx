import React from "react";

interface ButtonProp {
  color: "orange" | "gray";
  title: string;
  onClick: Function;
  disabled?: boolean;
}

const Button = ({ color, title, onClick, disabled = false }: ButtonProp) => {
  return (
    <div
      className={`w-[127px] h-[35px] rounded-[20px] flex items-center justify-center text-white cursor-pointer ${
        color === "orange"
          ? "bg-base_orange hover:bg-dark_orange"
          : "bg-base_gray hover:bg-dark_gray"
      }`}
      onClick={() => !disabled && onClick()}
    >
      {title}
    </div>
  );
};

export default Button;
