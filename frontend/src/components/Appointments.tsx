import axios from'axios'
import { BACKEND_URL } from '../config'
import { useState } from 'react'
export const Appointments=()=>{
    const [patient,Setpatient]=useState("")
    const [doctor,Setdoctor]=useState("")
    const[appointmentid,Setappointmentid]=useState("");
    console.log(patient+"   "+doctor);
    const bookappointment=async()=>{
        const res=await axios.post(`${BACKEND_URL}/user/appointment`,
            {
                patient:patient,
                doctor:doctor
            }
        )
        //@ts-ignore
            Setappointmentid(res._id);
        
    }
    return (
        <div>{appointmentid
            }
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient name</label>
                <input type="text" onChange={(e)=>{
                    Setpatient(e.target.value);
                }} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor name</label>
                <input onChange={(e)=>{
                    Setdoctor(e.target.value);
                }} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        <button type="button" onClick ={bookappointment} className=" ml-40  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Book Appointment</button>
        </div>
    )
}