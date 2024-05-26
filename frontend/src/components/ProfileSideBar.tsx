// @ts-nocheck
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import React from "react";
import Profilecss from "../css/Profile.module.css";
import { AppointmentButton } from "./AppointmentButton";

export const ProfileSideBar = ({ id, link }) => {
  const [userProfile, setUserProfile] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: "",
    address: "",
    appointments: [],
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      axios
        .get(`${BACKEND_URL}/${link}/profile`, {
          headers: {
            id: id,
          },
        })
        .then((response) => {
          const body = response.data;
          setUserProfile({
            FirstName: body.FirstName,
            LastName: body.LastName,
            Email: body.Email,
            Phone: body.Phone,
            Password: body.Password,
            address: body.address,
            appointments: body.appointments,
          });
        });
    } catch (err) {
      alert("error while loading profile please reload");
    }
  }, []);

  return (
    <div className="w-[25vw] bootstrap snippets bootdey h-screen]">
      <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"
      ></link>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="profile-nav -mt-4 ">
        <div className="panel h-[100vh]">
          <div className="user-heading round">
            <a href="#">
              <img
                src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
                alt=""
              />
            </a>
            <h1>{userProfile.FirstName}</h1>
            <p>{userProfile.Email}</p>
          </div>

          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="#">
                {" "}
                <i className="fa fa-user"></i> Profile
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-calendar"></i> Recent Activity{" "}
                <span className="label label-warning pull-right r-activity">
                  8
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-edit"></i> Edit profile
              </a>
            </li>
            <li>
              <AppointmentButton doctorid={id} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
