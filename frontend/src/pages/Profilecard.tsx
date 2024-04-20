//@ts-nocheck
import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";


import React from "react";
import '../css/Profile.css'
export const Profilecard = () => {

    const [userProfile,setUserProfile]=useState({
                FirstName: "",
                LastName: "",
                Email: "",
                Phone: "",
                Password:"",
                address: "",
                appointments: []
            })
            useEffect(()=>{
                const token=localStorage.getItem("token");
                try{axios.get(`${BACKEND_URL}/${token.split(" ")[0]}/profile`,{
                    headers:{
                        "authentication":token
                    }
                }).then( (response)=>{
                    const body=  response.data;
                    setUserProfile(
                        {
                            FirstName: body.FirstName,
                            LastName: body.LastName,
                            Email: body.Email,
                            Phone: body.Phone,
                            Password:body.Password,
                            address: body.address,
                            appointments: body.appointments
                        }
                    )
                    console.log(userProfile);
                })}
                catch(err){
                    alert("error while loading profile please reload");
                }
            },[]);


  return (
    <div className="body w-full h-screen">
      <link rel='stylesheet' href='https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'></link>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className=" bootstrap snippets bootdey">
        <div className="">
          
          <div className="profile-info w-[80vw] pl-4 -mt-2 pr-4">
           
            <div className="panel ">
              <div className="bio-graph-heading">
               mai hun kalaa. mai hun sabse bada chodu . mera gala hai bahut nukeela
              </div>
              <div className="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>First Name </span>: {userProfile.FirstName}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Last Name </span>: {userProfile.LastName}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Country </span>: India
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Birthday</span>: {userProfile.DOB}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Occupation </span>: UI Designer
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Email </span>: {userProfile.Email}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>: {userProfile.Phone}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Blood Group </span>: B+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-scroll">
            <div className="cards">
              <div className="row">
              <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="1"
                            data-fgcolor="#e06b7d"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(224, 107, 125)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      
                      <div className="bio-desk">
                        <h4 className="red">Envato Website</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="2"
                            data-fgcolor="#4CC5CD"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(76, 197, 205)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div className="bio-desk">
                        <h4 className="terques">ThemeForest CMS </h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="1"
                            data-fgcolor="#e06b7d"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(224, 107, 125)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      
                      <div className="bio-desk">
                        <h4 className="red">Envato Website</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="2"
                            data-fgcolor="#4CC5CD"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(76, 197, 205)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div className="bio-desk">
                        <h4 className="terques">ThemeForest CMS </h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="1"
                            data-fgcolor="#e06b7d"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(224, 107, 125)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      
                      <div className="bio-desk">
                        <h4 className="red">Envato Website</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="2"
                            data-fgcolor="#4CC5CD"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(76, 197, 205)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div className="bio-desk">
                        <h4 className="terques">ThemeForest CMS </h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="3"
                            data-fgcolor="#96be4b"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(150, 190, 75)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div className="bio-desk">
                        <h4 className="green">VectorLab Portfolio</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-chart">
                        <div
                          style={{
                            display: "inline",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          <canvas width="100" height="100px"></canvas>
                          <input
                            className="knob"
                            data-width="100"
                            data-height="100"
                            data-displayprevious="true"
                            data-thickness=".2"
                            defaultValue="4"
                            data-fgcolor="#cba4db"
                            data-bgcolor="#e8e8e8"
                            style={{
                              width: "54px",
                              height: "33px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "33px",
                              marginLeft: "-77px",
                              border: "0px",
                              fontWeight: "bold",
                              fontStyle: "normal",
                              fontVariant: "normal",
                              fontStretch: "normal",
                              fontSize: "20px",
                              lineHeight: "normal",
                              fontFamily: "Arial",
                              textAlign: "center",
                              color: "rgb(203, 164, 219)",
                              padding: "0px",
                              WebkitAppearance: "none",
                              background: "none",
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div className="bio-desk">
                        <h4 className="purple">Adobe Muse Template</h4>
                        <p>Started : 15 July</p>
                        <p>Deadline : 15 August</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src='https://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>
    </div>
  );
};

export default Profilecard;