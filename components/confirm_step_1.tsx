import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import logo from "../public/KMUTT_Logo.png";
import Image from "next/image";
import Button from "./button";
const ConfirmStep1 = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
        <div className="w-full h-[11vh] bg-white flex flex-col justify-center">
          <p className="w-full text-center text-[24px] font-bold ">
            ยืนยันการเลือกคณะกรรมการ
          </p>
          <p className="w-full text-center text-[24px] ">
            องค์การบริหารองค์การนักศึกษา
          </p>
        </div>
        <form>
            <div className="w-full flex justify-center flex-col p-2 bg-white mt-8">
              <p className=" text-center text-[24px] font-bold"> คุณเลือก </p>
              <div className="flex flex-row p-1 justify-center" >
                <p className=" text-center text-[24px] font-bold ">
                  หมายเลข 1 &nbsp;
                </p>
                <p className=" text-center text-[24px] ">
                  พรรคทดสอบ01
                </p>
              </div>
              <div className="mt-4 pl-5 pr-5 pd-5">
              <Image src={logo} width={180} height={246} />
              </div>
            </div>
          </form>

          <div className="flex flex-row items-center p-4">
            <div className="p-3">
              <Button color="gray" title="แก้ไข" onClick={() => null} /> 
              </div>
              <div className="p-3">
              <Button color="orange" title="ยืนยัน" onClick={() => null} />
              </div>
            </div>
      </div>
      )}
    </Observer>
  );
};

export default ConfirmStep1;
