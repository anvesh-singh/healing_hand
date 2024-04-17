//@ts-nocheck
import  { useState } from "react";
import { UserAuthsignup } from "./UserAuthsignup";
import { DoctorAuthsignup } from "./DoctorAuthsignup";
import { Googlebutton } from "./Googlebutton";
export const SignupSwitchButton = () => {
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
        <DoctorAuthsignup />
        <div className="flex justify-center">
          <Googlebutton type={"signup"} link={"/doctor/signup"} />
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
        <UserAuthsignup />
        <div className="flex justify-center">
          <Googlebutton type={"signup"} link={"/user/signup"} />
        </div>
      </div>
    );
  }
};

export default SignupSwitchButton;
