import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DoctorSignupInput } from "@anvesh-singh/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { TiArrowBackOutline } from "react-icons/ti";
// import { FaFontAwesomeIcon} from "@fortawesome/react-fontawesome";



export const DoctorAuthsignup = () => {
  const navigate = useNavigate();
  // const [visible, setVisiblity] = useState(false);
  // const Icon=(
  //   <FaFontAwesomeIcon icon={visible ? "eye-slash" : "eye"} />
  // )
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
        navigate("/home");
      }
    } catch (e) {
      alert("Error while signing up");
      // alert the user here that the request failed
    }
  }

  return (
    <div className="h-screen flex justify-center text-white flex-col bg-black">
      <div className="flex justify-center">
        <div>
          <div className="">
            <div className="text-3xl flex gap-4 items-center font-light tracking-wider py-4 border-b-[1px] border-gray-500 mb-8">
            <Link to="/signin" className="hover:scale-x-110"><TiArrowBackOutline /></Link>
              Create an account as Doctor
            </div>
            <div className="text-slate-200 py-3 px-4 text-sm mt-2 flex gap-2 border-gray-300 border hover:border-white ">
            Already have an account?
              <Link className="underline hover:text-white hover:scale-95" to="/signin">
                Sign in
              </Link>
              for faster booking.
            </div>
          </div>
          
          <div className="pt-8 w-[45vw]">
          <div className="grid grid-cols-2 gap-10">
            <LabelledInput
              label="First Name"
              placeholder="Anvesh"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  FirstName: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Last Name"
              placeholder="Singh"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  LastName: e.target.value,
                });
              }}
            />
            </div>
            <LabelledInput
              label="DOB"
              type="date"
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
            //   type={
            //     showPassword ? "text" : "password"
            // }

              placeholder="123456***"
              // value={setPostInputs.Password}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  Password: e.target.value,
                });
              }}
            />
            {/* <label htmlFor="check">Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                /> */}

            <button
              onClick={sendRequest}
              type="button"
              className="py-2 bg-[#AB98FF] border-[1px] border-black hover:border-[1px] hover:border-white hover:outline-3 hover:outline-white text-white px-6 transition duration-300 ease-out hover:bg-black hover:text-white focus:outline-2 focus:ring-white focus:ring-1 mt-6"
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
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="">
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
