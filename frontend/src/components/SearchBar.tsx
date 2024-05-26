import { useState } from "react";
import axios from "axios";
import { SearchSkeletons } from "./SearchSkeletons";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";
let loading = 0;
export const SearchBar = () => {
  const [search, Setsearch] = useState("");
  const [doctors, Setdoctors] = useState([]);
  const backendcall = async () => {
    loading = 0;
    const res = await axios.get(`${BACKEND_URL}/doctor/filter?q=${search}`);
    loading = 1;
    Setdoctors(res.data);
  };

  if (loading == 0) {
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
                  if (search != "") backendcall();
                  else Setdoctors([]);
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
        </div>
        <SearchSkeletons />
        <SearchSkeletons />
        <SearchSkeletons />
        <SearchSkeletons />
      </div>
    );
  }

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
                if (search != "") backendcall();
                else Setdoctors([]);
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
      </div>
      {doctors.map((d) => {
        return (
          <>
            <Link
              to={`/profile/${d._id}`}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {d.FirstName[0]}
                  {d.LastName[0]}
                </span>
              </div>

              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {d.FirstName} {d.LastName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {d.Email}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {d.Phone}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {d.address}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};
