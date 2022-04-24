import ConfirmProfile from "components/confirm_profile";
import ConfirmStep1 from "components/confirm_step_1";
import ConfirmStep2 from "components/confirm_step_2";
import Finish from "components/finish";
import Login from "components/login";
import SelectStep1 from "components/select_step_1";
import SelectStep2 from "components/select_step_2";
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
        <div className="w-screen min-h-screen max-h-screen bg-base_yellow overflow-y-auto">
          {context.step !== 1 && (
            <div className="z-10 w-full sticky top-0 flex flex-col text-white">
              <div className="flex items-center w-full text-[11px] justify-center h-1/3 bg-base_orange">
                การเลือกตั้งคณะกรรมการองค์การบริหารองค์การนักศึกษาและสภานักศึกษา
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </div>
              <div className="flex items-center justify-center w-full space-x-1 bg-white h-2/3">
                <Image
                  src={logo}
                  height={33}
                  width={33}
                  objectFit="contain"
                  alt="KMUTT"
                />
                <Image
                  src={electionLogo}
                  height={33}
                  width={47}
                  objectFit="contain"
                  alt="KMUTT Election 2022"
                />
              </div>
              {context.step !== 2 && context.step !== 7 && (
                <div className="w-full h-[14px] bg-dim_yellow">
                  <div
                    className={`h-[14px] bg-base_orange ${
                      context.totalStep === 5 && context.step === 3 && "w-1/5"
                    } ${
                      context.totalStep === 5 && context.step === 4 && "w-2/5"
                    } ${
                      context.totalStep === 5 && context.step === 5 && "w-3/5"
                    } ${
                      context.totalStep === 5 && context.step === 6 && "w-4/5"
                    } ${
                      context.totalStep === 3 && context.step === 3 && "w-1/3"
                    } ${
                      context.totalStep === 3 && context.step === 4 && "w-2/3"
                    }`}
                  />
                </div>
              )}
            </div>
          )}
          {context.step === 1 && <Login />}
          {context.step === 2 && <ConfirmProfile />}
          {context.step === 3 && <SelectStep1 />}
          {context.step === 4 && <ConfirmStep1 />}
          {context.step === 5 && <SelectStep2 />}
          {context.step === 6 && <ConfirmStep2 />}
          {context.step === 7 && <Finish />}
        </div>
      )}
    </Observer>
  );
};

export default HomeRoute;
