import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PatientSigninInput } from "@anvesh-singh/common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const UserAuthsignin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<PatientSigninInput>({
    Email: "",
    Password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/signin`,
        postInputs
      );
      if (response.status == 202) {
        alert(response.data.msg);
      } else {
        const jwt = response.data.jwt;
        localStorage.setItem("token", jwt);
        navigate("/");
      }
    } catch (e) {
      alert("Error while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold pl-10">Sign In as User</div>
            <div className="text-slate-500  ">
              Don't have an account?
              <Link className="pl-2 underline" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <LabelledInput
              label="Email"
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
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
