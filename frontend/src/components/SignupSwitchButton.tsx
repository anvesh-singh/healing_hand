//@ts-nocheck
import  { useState } from "react";
import { UserAuthsignup } from "./UserAuthsignup";
import { DoctorAuthsignup } from "./DoctorAuthsignup";
import { Googlebutton } from "./Googlebutton";
export const SignupSwitchButton = () => {
  const [button, SetButton] = useState(0);
  if (button == 0) {
    return (
      <div className="relative h-screen">
        <div className="absolute top-[7.1vh] left-[59.7vw] flex gap-1">
          <button
            type="button"
            onClick={() => {
              SetButton(1);
            }}
            className="py-1 bg-[#AB98FF] border-[1px] border-black hover:border-[1px] hover:border-white hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out hover:bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6 "
          >
            User
          </button>
          <button
            type="button"
            onClick={() => {
              SetButton(0);
            }}
            className="py-1 border-[1px] hover:border-white  border-gray-600 hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6"
          >
            Doctor
          </button>
        </div>
        <DoctorAuthsignup />
        <div className="absolute bottom-[7.8vh] right-[27vw]">
          <Googlebutton type={"signup"} link={"/doctor/signup"} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen">
        <div className="absolute top-[7.1vh] left-[59.7vw] flex gap-1">
          <button
            type="button"
            onClick={() => {
              SetButton(1);
            }}
            className="py-1 border-[1px] hover:border-white  border-gray-600 hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6"
          >
            User
          </button>
          <button
            type="button"
            onClick={() => {
              SetButton(0);
            }}
            className="py-1 bg-[#AB98FF] border-[1px] border-black hover:border-[1px] hover:border-white hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out hover:bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6 "
          >
            Doctor
          </button>
        </div>
        <UserAuthsignup />
        <div className="absolute bottom-[7.8vh] right-[27vw]">
          <Googlebutton type={"signup"} link={"/patient/signup"} />
        </div>
      </div>
    );
  }
};

