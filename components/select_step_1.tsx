import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./button";
import _ from "lodash";

const SelectStep1 = () => {
  const context = useContext(coreContext);
  const [err, setErr] = useState(false);

  useEffect(() => {
    context.prepareParty();
    context.prepareCouncil();
  }, []);

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
            <div className="flex flex-row justify-center w-full p-2">
              {_.map(context.partyList, (item) => (
                <label
                  className={
                    context.selectedParty == item.id
                      ? "flex flex-col p-3 bg-white bg-opacity-40 rounded-md ml-1 mr-1"
                      : "flex flex-col p-3 ml-1 mr-1"
                  }
                >
                  <p className=" text-center text-[24px] font-bold ">
                    หมายเลข {item.id}
                  </p>
                  <p className=" text-center text-[24px] ">{item.name}</p>
                  <Image
                    src={context.apiPath + "/api/files/" + item.imageId}
                    width={132}
                    height={181}
                  />
                  <div className="flex justify-center w-full p-2">
                    <input
                      type="radio"
                      value={item.id}
                      checked={context.selectedParty == item.id}
                      onChange={(e) => {
                        setErr(false);
                        context.setValue("selectedParty", e.target.value);
                      }}
                      className="accent-black"
                    />
                  </div>
                </label>
              ))}
            </div>
            <div className="flex justify-center text-base_orange font-bold text-[16px]">
              {err && "กรุณาเลือกพรรค หรือเลือกงดออกเสียง"}
            </div>
            <div className="flex flex-col items-center p-4">
              <Button
                color="orange"
                title="ยืนยัน"
                onClick={() => {
                  if (context.selectedParty) {
                    context.stepUp();
                  } else {
                    setErr(true);
                  }
                }}
              />
              <p className="p-2">หรือ</p>
              <Button
                color="gray"
                title="งดออกเสียง"
                onClick={() => {
                  context.stepUp();
                  context.setValue("selectedParty", "");
                }}
              />
            </div>
          </form>
        </div>
      )}
    </Observer>
  );
};

export default SelectStep1;
