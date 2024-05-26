//@ts-nocheck
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Appointments = () => {
  const { patienttoken, doctorid } = useParams();
  const [patientname, setPatientname] = useState({});
  const [doctorname, setDoctorname] = useState({});
  const [mode, setmode] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/doctor/profile`, {
          headers: {
            id: doctorid,
          },
        })
        .then((res) => {
          setDoctorname(res.data);
        });

      const patientid = jwtDecode(patienttoken);
      axios
        .get(`${BACKEND_URL}/patient/profile`, {
          headers: {
            id: patientid.id,
          },
        })
        .then((res) => {
          setPatientname(res.data);
        });
    } catch (err) {
      alert("error! please try again");
    }
  }, []);
  const backendcall = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/patient/appointment`, {
        patienttoken: patienttoken,
        doctorid: doctorid,
        mode: mode,
      });
      if (response.status == 202) {
        alert(response.data.msg);
        navigate("/");
      } else {
        alert("appointment created");
        navigate("/");
      }
    } catch (err) {
      alert("error! please try again");
    }
  };

  return (
    <div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Patient name : {patientname.FirstName}
        </label>
        enter the type of Appointment: chat or video?
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Doctor name : {doctorname.FirstName}
        </label>
        <input
          type="text"
          id="small-input"
          onChange={(e) => {
            setmode(e.target.value);
          }}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="button"
        onClick={backendcall}
        className=" ml-40  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Book Appointment
      </button>
    </div>
  );
};
