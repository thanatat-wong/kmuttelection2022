import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import logo from "../public/KMUTT_Logo.png";
import Image from "next/image";
import Button from "./button";
import { values } from "lodash";

const SelectStep1 = () => {
  const context = useContext(coreContext);
  const [selectedParty, setSelectedParty] = React.useState("");
  function handleSelectParty(party) {
    setSelectedParty(party)
  }
  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
          <div className="w-full h-[11vh] bg-white flex flex-col justify-center">

            <p className="w-full text-center text-[24px] font-bold ">
              เลือกคณะกรรมการ
            </p>
            <p className="w-full text-center text-[24px] ">
              องค์การบริหารองค์การนักศึกษา
            </p>
          </div>
          <p className=" w-full text-center text-[20px] mt-[10px]">
            โปรดเลือกเพียง 1 พรรคเท่านั้น
          </p>

          <form>
            <div className="w-full flex justify-center flex-row p-2">
              <label className={selectedParty === "party01" ? "flex flex-col p-3 bg-white bg-opacity-40 rounded-md ml-1 mr-1" : "flex flex-col p-3 ml-1 mr-1"}>
                <p className=" text-center text-[24px] font-bold ">
                  หมายเลข 1
                </p>
                <p className=" text-center text-[24px] ">
                  พรรคทดสอบ01
                </p>
                <Image src={logo} width={132} height={181} />
                <div className="w-full flex justify-center p-2">
                  <input type="radio" value="party01" checked={selectedParty === "party01"} onChange={e => handleSelectParty(e.target.value)} className="accent-black" />
                </div>
              </label>
              <label className={selectedParty === "party02" ? "flex flex-col p-3 bg-white bg-opacity-40 rounded-md ml-1 mr-1" : "flex flex-col p-3 ml-1 mr-1"}>
                <p className=" text-center text-[24px] font-bold ">
                  หมายเลข 2
                </p>
                <p className=" text-center text-[24px] ">
                  พรรคทดสอบ02
                </p>
                <Image src={logo} width={132} height={181} />
                <div className="w-full flex justify-center p-2">
                  <input type="radio" value="party02" checked={selectedParty === "party02"} onChange={e => handleSelectParty(e.target.value)} className="accent-black" />
                </div>
              </label>
            </div>
            <div className="flex flex-col items-center p-4">
              <Button color="orange" title="ยืนยัน" onClick={() => null} />
              <p className="p-2">หรือ</p>
              <Button color="gray" title="งดออกเสียง" onClick={() => null} />
            </div>
          </form>
        </div>
      )}
    </Observer>
  );
};

export default SelectStep1;
