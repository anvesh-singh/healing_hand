//@ts-nocheck
import React, { useState } from "react";
import { UserAuthsignin } from "./UserAuthsignin";
import { DoctorAuthsignin } from "./DoctorAuthsignin";
import { Googlebutton } from "./Googlebutton";
export const SigninSwitchButton = () => {
  const [button, SetButton] = useState(0);
  if (button == 0) {
    return (
      <div>
        <div className="flex flex-row justify-center pt-10">
          <button
            type="button"
            onClick={() => {
              SetButton(1);
            }}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            User
          </button>
          <button
            type="button"
            onClick={() => {
              SetButton(0);
            }}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Doctor
          </button>
        </div>
        <DoctorAuthsignin />
        <div className="flex justify-center">
          <Googlebutton type={"signin"} link={"/doctor/signin"} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-row justify-center pt-10">
          <button
            type="button"
            onClick={() => {
              SetButton(1);
            }}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            User
          </button>
          <button
            type="button"
            onClick={() => {
              SetButton(0);
            }}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Doctor
          </button>
        </div>
        <UserAuthsignin />
        <div className="flex justify-center">
          <Googlebutton type={"signin"} link={"/user/signin"} />
        </div>
      </div>
    );
  }
};

export default SigninSwitchButton;
