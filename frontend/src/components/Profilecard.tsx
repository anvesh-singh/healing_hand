import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";
export  const Profilecard=()=>{
    const [userProfile,setUserProfile]=useState({
        FirstName:"",
        LastName:"",
        Email:""
    })
    useEffect(()=>{
        const token=localStorage.getItem("token");
        console.log(token);
        axios.get(`${BACKEND_URL}/doctor/profile`,{
            headers:{
                "Authentication":`${token}`
            }
        }).then( (response)=>{
            const body=  response.data;
            setUserProfile({
                FirstName:body.FirstName,
                LastName:body.LastName,
                Email:body.Email
            });
        })
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