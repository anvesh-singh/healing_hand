//@ts-nocheck
import React, { useState } from "react";
import { UserAuthsignin } from "./UserAuthsignin";
import { DoctorAuthsignin } from "./DoctorAuthsignin";
import { Googlebutton } from "./Googlebutton";
export const SigninSwitchButton = () => {
  const [button, SetButton] = useState(0);
  if (button == 0) {
    return (
      <div className="relative h-screen">
        <div className="absolute top-[24vh] left-[52vw] flex gap-1">
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
        <DoctorAuthsignin />
        <div className="absolute top-[70.8vh] left-[47.8vw]">
          <Googlebutton type={"signin"} link={"/doctor/signin"} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen">
        <div className="absolute top-[24vh] left-[52vw] flex gap-1">
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
        <UserAuthsignin />
        <div className="absolute top-[70.8vh] left-[47.8vw]">
          <Googlebutton type={"signin"} link={"/patient/signin"} />
        </div>
      </div>
    );
  }
};

