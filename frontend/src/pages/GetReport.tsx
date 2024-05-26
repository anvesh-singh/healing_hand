//@ts-nocheck
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const GetReport = () => {
  const [reports, setreports] = useState([]);
  const backendcall = async () => {
    const decode = jwtDecode(localStorage.getItem("token").split(" ")[1]);
    const response = await axios.get(`${BACKEND_URL}/patient/profile`, {
      headers: { id: decode.id },
    });
    setreports(response.data.report);
  };
  return (
    <div>
      <button onClick={backendcall}>get all reports</button>
      {reports.map((report) => {
        return (
          <div>
            <a href={report} target="_blank">
              report
            </a>
          </div>
        );
      })}
    </div>
  );
};
