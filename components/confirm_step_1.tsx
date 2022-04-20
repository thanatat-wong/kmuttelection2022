import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import logo from "../public/KMUTT_Logo.png";
import Image from "next/image";
import Button from "./button";
import _ from "lodash";
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
            <div className="grid grid-rows-6 min-w-[218px] min-h-[341px] p-2 mt-8 bg-white">
              <p className=" text-center text-[24px] font-bold row-span-1">
                คุณเลือก
              </p>
              <div className="h-full row-span-5 pl-5 pr-5 pd-5">
                {context.selectedParty ? (
                  <>
                    <div className="flex flex-row justify-center p-1">
                      <p className=" text-center text-[24px] font-bold ">
                        หมายเลข {context.selectedParty}
                        &nbsp;
                      </p>
                      <p className=" text-center text-[24px] ">
                        {context.findParty()?.name}
                      </p>
                    </div>
                    <Image
                      src={
                        context.apiPath +
                        "/api/files/" +
                        context.findParty()?.imageId
                      }
                      width={180}
                      height={246}
                    />
                  </>
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-[36px] text-base_gray font-bold">
                    งดออกเสียง
                  </div>
                )}
              </div>
            </div>
          </form>

          <div className="flex flex-row items-center p-4">
            <div className="p-3">
              <Button
                color="gray"
                title="แก้ไข"
                onClick={() => context.stepDown()}
              />
            </div>
            <div className="p-3">
              <Button
                color="orange"
                title="ยืนยัน"
                onClick={() => {
                  if (context.totalStep === 5) context.stepUp();
                  if (context.totalStep === 3) context.postVoteResult();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default ConfirmStep1;
