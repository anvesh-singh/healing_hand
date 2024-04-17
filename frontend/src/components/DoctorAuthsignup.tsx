import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DoctorSignupInput } from "@anvesh-singh/common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const DoctorAuthsignup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<DoctorSignupInput>({
    FirstName: "",
    LastName: "",
    DOB: "",
    Email: "",
    Phone: "",
    Password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/doctor/signup`,
        postInputs
      );
      if (response.status == 202) {
        alert(response.data.msg);
      } else {
        const jwt = response.data.jwt;
        localStorage.setItem("token", jwt);
        navigate("/profile");
      }
    } catch (e) {
      alert("Error while signing up");
      // alert the user here that the request failed
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              Create an account as Doctor
            </div>
            <div className="text-slate-500">
              Don't have an account?
              <Link className="pl-2 underline" to="/signin">
                Sign in
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <LabelledInput
              label="FirstName"
              placeholder="Anvesh"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  FirstName: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="LastName"
              placeholder="Singh"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  LastName: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="DOB"
              placeholder="06/10/2004"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  DOB: e.target.value,
                });
              }}
            />
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
              label="Phone"
              placeholder="+91XXXXXXXXXX"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  Phone: e.target.value,
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
              Sign up
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
