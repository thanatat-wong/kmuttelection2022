import React from "react";

interface ButtonProp {
  color: "green" | "orange" | "gray";
  active: boolean;
  onClick: Function;
}

const StepTwoButton = ({ color, active, onClick }: ButtonProp) => {
  return (
    <div
      className={`w-[53px] h-[16px] rounded-[2px] shadow-md text-black ${
        color === "orange" && active && "bg-base_green"
      }${color === "green" && active && "bg-base_orange text-white"}${
        color === "gray" && active && "bg-base_gray"
      }${!active && "bg-[#F7F7FA]"}`}
      onClick={() => onClick()}
    >
      {color === 'green' && 'ยอมรับ'}
      {color === 'orange' && 'ไม่ยอมรับ'}
      {color === 'gray' && 'งดออกเสียง'}
    </div>
  );
};

export default StepTwoButton;
