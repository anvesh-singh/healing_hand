//@ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

export const GetAppointment = () => {
  const [appointment, setappointment] = useState([]);
  useEffect(() => {
    const p = async () => {
      const decode = jwtDecode(localStorage.getItem("token").split(" ")[1]);
      const res = await axios.get(
        `${BACKEND_URL}/${
          localStorage.getItem("token").split(" ")[0]
        }/getappointment`,
        {
          headers: { id: decode.id },
        }
      );
      setappointment(res.data);
    };
    p().then((res) => {});
  }, []);
  return (
    <div>
      appointments:
      {appointment.map((a) => {
        return (
          <div>
            <Link to={`/${a.mode}/${a.token}/${a.doctor}`}>
              {a.doctor} doctor |||||| {a.patient} patient{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
