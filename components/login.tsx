import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useRef, useContext, useState } from "react";
import Image from "next/image";
import Button from "./button";
import axios from "../axios";
import logo from "../public/KMUTT_Logo.png";
import electionLogo from "../public/Logo.png";
import { error } from "console";

const Login = () => {
  const [isWrongAuthen, setIsWrongAuthen] = useState(false);
  const context = useContext(coreContext);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const onSubmit = async () => {
    const body = JSON.stringify({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    axios.post("/api/auth/login", body).then((response) => {
      setIsWrongAuthen(false);
      let result = response.data;
      const User = (firstname,lastname, studentID, faculty, department, year, imagePath) => {
        return {
          firstname: firstname,
          lastname: lastname,
          studentID: studentID,
          faculty: faculty,
          department: department,
          year: year,
          imagePath: imagePath,
        }
      }
      const user = User(result.firstnameTH, result.lastnameTH, result.studentId,result.facultyTH,result.fieldTH,result.studentYear,result.imagePath)
      context.setValue("user", user)
      context.setValue("token",result.jwttoken)
      console.log(context.user)
      console.log(context.token)
      context.stepUp()


    }).catch((error) => {
      if (error.response.data.status == 400) {
        setIsWrongAuthen(true);
      }
    });
  };
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
                  <input id="stuID" ref={usernameRef} type="text" className={isWrongAuthen?"block w-full text-[18px] border-solid border-2 border-red-400 px-1 rounded":"block w-full text-[18px] border-solid border-2 border-gray-300 px-1 rounded"} placeholder="รหัสนักศึกษา" />
                </div>
                <div className="mb-5">
                  <input id="stuPass" ref={passwordRef} type="password" className={isWrongAuthen?"block w-full text-[18px] border-solid border-2 border-red-400 px-1 rounded":"block w-full text-[18px] border-solid border-2 border-gray-300 px-1 rounded"} placeholder="รหัสผ่าน" />
                </div>
                <div className="flex justify-center text-red-400 font-bold text-[16px]">{isWrongAuthen?"รหัสนักศึกษาหริือรหัสผ่านไม่ถูกต้อง":""}</div>
                <a className="flex justify-center text-base_orange font-bold text-[16px]" href="https://myaccount.kmutt.ac.th/accountactivation-app/recovery-account">ลืมรหัสผ่าน?</a>
              </div>
            </div>
            <div className="mb-5 mt-5">
              <Button color="orange" title="เข้าสู่ระบบ" onClick={() => {
                // context.stepUp()
                onSubmit()
                console.log(usernameRef.current.value + "-" + passwordRef.current.value)
              }} />
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
