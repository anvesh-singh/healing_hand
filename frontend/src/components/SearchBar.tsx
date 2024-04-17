import { useState } from "react";
import axios from "axios";
import { SearchSkeletons } from "./SearchSkeletons";
import { BACKEND_URL } from "../config";

export const SearchBar = () => {
  const [search, Setsearch] = useState("");
  const [doctors, Setdoctors] = useState([]);
  const backendcall = async () => {
    const res = await axios.get(`${BACKEND_URL}/doctor/filter?q=${search}`);
    Setdoctors(res.data);
  };

  return (
    <div className="bg-slate-700 h-screen px-10 py-20 w-full">
      <div className="max-w-xl">
        <div className="flex space-x-1 items-center mb-2">
          <p className="text-white text-lg font-semibold">
            Please enter something
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="flex rounded-md overflow-hidden w-full">
            <input
              type="text"
              onChange={(e) => {
                const i = e.target.value;
                Setsearch(i);
              }}
              className=" pl-2 w-full rounded-md rounded-r-none"
            />
            <button
              onClick={backendcall}
              className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
            >
              Go
            </button>
          </div>
        </div>
        <div>{doctors.length>0?doctors[0].FirstName:""}</div>
          <div>{doctors.length>0?doctors[0].LastName:""}</div>
          <div>{doctors.length>0?doctors[0].Email:""}</div>
      </div>
    </div>
  );
};
