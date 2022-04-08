import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Image from "next/image";
import Button from "./button";

import logo from "../public/KMUTT_Logo.png";
import electionLogo from "../public/Logo.png";

const Login = () => {
  const context = useContext(coreContext);
  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
            <div>
              <Image src={logo} height={70} width={70} objectFit="contain" />
              <Image
                src={electionLogo}
                height={70}
                width={100}
                objectFit="contain"
              />
            </div>
            <div>
              <div className="w-full h-[11vh] flex flex-col justify-center">
                <p className="w-full text-center text-[24px] font-bold">
                  ระบบการเลือกตั้ง
                </p>
                <p className="w-full text-center text-[15px]">
                  คณะกรรมการองค์การบริหารองค์การนักศึกษาและสภานักศึกษา
                </p>
                <p className="w-full text-center text-[15px]">
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-5 w-[40vh]">
                <div className="mb-2">
                  <p className="w-full text-center text-base_gray text-[18px]">
                    เข้าสู่ระบบด้วย KMUTT Internet Account
                  </p>
                </div>
                <div className="mb-2">
                  <input id="stuID" type="text" className="block w-full text-[18px] border-solid border-2 border-gray-300 px-1 rounded" placeholder="รหัสนักศึกษา" />
                </div>
                <div className="mb-5">
                  <input id="stuPass" type="password" className="block w-full text-[18px] border-solid border-2 border-gray-300 px-1 rounded" placeholder="รหัสผ่าน" />
                </div>
                <a className="flex justify-center text-base_orange font-bold text-[16px]" href="https://myaccount.kmutt.ac.th/accountactivation-app/recovery-account">ลืมรหัสผ่าน?</a>
              </div>
            </div>
            <div className="mb-5 mt-5">
              <Button color="orange" title="เข้าสู่ระบบ" onClick={() => null} />
            </div>
          </div>
          <div className="flex justify-end">
            <p>สามารถติดตามข้อมูลข่าวสารเพิ่มเติมได้ที่</p>&nbsp;&nbsp;<a className="text-base_orange font-bold" href="https://www.facebook.com/KMUTT-Election-111526570306064">KMUTT Election</a>
          </div>
        </div>
      )}
    </Observer>
  );
};

export default Login;
