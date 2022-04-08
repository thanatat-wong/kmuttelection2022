import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useContext } from "react";

import logo from "../public/KMUTT_Logo.png";
import Button from "./button";
import StepTwoButton from "./stepTwoButton";

const SelectStep2 = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
          <div className="w-full h-[11vh] bg-white flex flex-col justify-center">
            <p className="w-full text-center text-[24px] font-bold">
              เลือกสภานักศึกษา
            </p>
            <p className="w-full text-center text-[24px]">คณะวิศวกรรมศาสตร์</p>
          </div>
          <div className="w-full text-center text-[20px] mt-[10px]">
            โปรดพิจารณาสภานักศึกษาให้ครบทุกคน
          </div>
          <div className="w-full mt-[10px] px-6 mb-6 flex flex-col space-y-[14px]">
            <div className="bg-white h-[107px] flex px-[22px] space-x-3">
              <Image src={logo} width={61} height={75} />
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-[18px]">
                  นายเอสไอที เคเอ็มยูทีที
                </div>
                <div className="text-[16px]">
                  ภาควิชาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 3
                </div>
                <div className="flex space-x-3 pt-[6px]">
                  <StepTwoButton
                    active={true}
                    color="green"
                    onClick={() => null}
                  />
                  <StepTwoButton
                    active={true}
                    color="orange"
                    onClick={() => null}
                  />
                  <StepTwoButton
                    active={true}
                    color="gray"
                    onClick={() => null}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button color="orange" title="ยืนยัน" onClick={() => null} />
        </div>
      )}
    </Observer>
  );
};

export default SelectStep2;
