import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Button from "./button";

const ConfirmProfile = () => {
  const context = useContext(coreContext);
  const router = useRouter();
  // console.log(context.apiPath + context.user["imagePath"]);
  const myLoader = ({ src }) => {
    return context.apiPath + context.user["imagePath"];
  };
  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
          <div className="w-full h-[11vh] flex flex-col justify-center">
            <p className="w-full text-center text-[24px] font-bold">
              ยืนยันข้อมูลนักศึกษา
            </p>
          </div>
          <div className="bg-white p-5 w-[40vh]">
            <div className="flex justify-center w-full mb-5">
              <Image
                loader={myLoader}
                src={context.apiPath + context.user["imagePath"]}
                height={179}
                width={145}
                objectFit="contain"
                alt="Student Picture"
              />
            </div>
            <div className="w-full text-center font-bold text-[20px]">
              {context.user["firstname"] + " " + context.user["lastname"]}
            </div>
            <div className="w-full text-center font-bold text-[20px]">
              {context.user["studentID"]}
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              {context.user["faculty"]}
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              {"ภาควิชา " + context.user["department"]}
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              {"ชั้นปีที่ " + context.user["year"]}
            </div>
          </div>
          <div className="w-full text-center font-bold text-[20px] my-[20px]">
            <p>ข้อมูลของท่านถูกต้องหรือไม่</p>
          </div>
          <div className="flex space-x-[6px]">
            <Button
              color="gray"
              title="ไม่ถูกต้อง"
              onClick={() =>
                router.push(
                  "https://www.facebook.com/messages/t/329573680505873"
                )
              }
            />
            <Button
              color="orange"
              title="ถูกต้อง"
              onClick={() => context.stepUp()}
            />
          </div>
        </div>
      )}
    </Observer>
  );
};

export default ConfirmProfile;
