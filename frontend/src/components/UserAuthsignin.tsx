import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PatientSigninInput } from "@anvesh-singh/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { TiArrowBackOutline } from "react-icons/ti";


export const UserAuthsignin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<PatientSigninInput>({
    Email: "",
    Password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/patient/signin`,
        postInputs
      );
      if (response.status == 202) {
        alert(response.data.msg);
      } else {
        const jwt = response.data.jwt;
        localStorage.setItem("token", jwt);
        navigate("/home");
      }
    } catch (e) {
      alert("Error while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center text-white flex-col bg-black">
      <div className="flex justify-center">
        <div>
          <div className="">
          <div className="text-[25px] flex items-center gap-3 font-light tracking-wider py-4 border-b-[1px] border-gray-500 mb-5">
            <Link to="/signup"className="hover:scale-x-110"><TiArrowBackOutline /></Link>
            Sign In as User</div>
            <div className="text-slate-200 py-3 px-4 text-sm mt-2 flex gap-2 border-gray-300 border hover:border-white ">
              Don't have an account?
              <Link className="underline hover:text-white hover:scale-95" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="pt-2 w-[30vw]">
            <LabelledInput
              label="Email"
              type="email"
              placeholder="anveshsingh@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  Email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  Password: e.target.value,
                });
              }}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="py-2 bg-[#AB98FF] border-[1px] border-black hover:border-[1px] hover:border-white hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out hover:bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-white font-normal tracking-wider pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="w-full py-3 px-3 font-thin border-gray-400 hover:border-white text-sm border-[1px] hover: text-white dark:bg-black"
        required
      />
    </div>
  );
}
