import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Button from "./button";
import mock from "../public/mock-pic.png";
import Image from "next/image";
import { useRouter } from "next/router";

const ConfirmProfile = () => {
  const context = useContext(coreContext);
  const router = useRouter();

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
          <div className="w-full flex justify-center mb-5">
            <Image src={mock} height={179} width={145} objectFit="contain" />
            </div>
            <div className="w-full text-center font-bold text-[20px]">
              นายตึ้ดตึ้ด ตื้อตื่อต่องแต้ง
            </div>
            <div className="w-full text-center font-bold text-[20px]">
              62130500234
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              คณะวิศวกรรมศาสตร์
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              ภาควิชาวิศวกรรมคอมพิวเตอร์
            </div>
            <div className="w-full text-center text-base_gray text-[18px]">
              ชั้นปีที่ 3
            </div>
          </div>
          <div className="w-full text-center font-bold text-[20px] my-[20px]">
            <p>
              ข้อมูลของท่านถูกต้องหรือไม่
            </p>
          </div>
          <div className="flex space-x-[6px]">
            <Button color="gray" title="ไม่ถูกต้อง" onClick={() => router.push("https://www.facebook.com/messages/t/329573680505873")} />
            <Button color="orange" title="ถูกต้อง" onClick={() => null} />
          </div>
        </div>
      )}
    </Observer>
  );
};

export default ConfirmProfile;
