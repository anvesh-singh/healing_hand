//@ts-nocheck
import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";
export  const Profilecard=()=>{
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
        try{axios.get(`${BACKEND_URL}/doctor/profile`,{
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
            );
        })}
        catch(err){
            alert("error while loading profile please reload");
        }
    },[]);
    
return (
    <div>{userProfile.FirstName}
        <div>{userProfile.FirstName}</div>
        <div>{userProfile.LastName}</div>
        <div>{userProfile.Email}</div>
        <div></div>

    </div>
)
}