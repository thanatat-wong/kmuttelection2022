import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import Image from "next/image";
import React, { useContext } from "react";

import logo from "../public/KMUTT_Logo.png";
import electionLogo from "../public/Logo.png";

const HomeRoute = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div className="w-screen h-screen bg-base_yellow">
          {context.step !== 1 && (
            <div className="h-[10vh] w-full absolute top-0 flex flex-col text-white">
              <div className="flex items-center w-full text-[10px] justify-center h-1/3 bg-base_orange">
                การเลือกตั้งคณะกรรมการองค์การบริหารองค์การนักศึกษาและสภานักศึกษา
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </div>
              <div className="flex items-center justify-center w-full space-x-1 bg-white h-2/3">
                <Image src={logo} height={33} width={33} objectFit="contain" />
                <Image
                  src={electionLogo}
                  height={33}
                  width={47}
                  objectFit="contain"
                />
              </div>
            </div>
          )}
          {context.step === 1}
          {context.step === 2}
          {context.step === 3}
          {context.step === 4}
          {context.step === 5}
          {context.step === 6}
          {context.step === 7}
        </div>
      )}
    </Observer>
  );
};

export default HomeRoute;
