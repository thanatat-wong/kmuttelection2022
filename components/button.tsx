import React from "react";

interface ButtonProp {
  color: "orange" | "gray";
  title: string;
  onClick: Function;
}

const Button = ({ color, title, onClick }: ButtonProp) => {
  return (
    <div
      className={`w-[127px] h-[35px] rounded-[20px] text-white ${
        color === "orange"
          ? "bg-base_orange hover:bg-dark_orange"
          : "bg-base_gray hover:bg-dark_gray"
      }`}
      onClick={() => onClick()}
    >
      {title}
    </div>
  );
};

export default Button;
