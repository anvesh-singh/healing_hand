//@ts-nocheck
import axios from 'axios'
import {saveAs} from 'file-saver'
import { useState } from 'react'
import { BACKEND_URL } from '../config';
import '../css/Report.css'
export const Report=()=>{
    const [details,setdetails]=useState({
        doctorname:"",
        patientname:"",
        doctorphone:"",
        patientphone:""
    });

    const createreport=async()=>{
        try{
        // const response =await axios.post(`${BACKEND_URL}/doctor/report`,details)
        const response2=await axios.get(`${BACKEND_URL}/doctor/report/download`,{responseType:'blob'})
        const pdfBlob=new Blob([response2.data],{type:'application/pdf'})

        saveAs(pdfBlob,'report.pdf');

            }
            catch(err){
                alert("error");
            }
            }
    return (
<div>
  <div className="container">
    <h1>Medical Report Input</h1>
    <form>
      <div className="input-group">
        <label for="patientName">Patient Name</label>
        <input type="text" id="patientName" name="patientName" required/>
      </div>
      <div className="input-group">
        <label for="doctorName">Doctor Name</label>
        <input type="text" id="doctorName" name="doctorName" required/>
      </div>
      <div className="input-group">
        <label for="chiefComplaints">Chief Complaints</label>
        <textarea id="chiefComplaints" name="chiefComplaints" rows="4" required></textarea>
      </div>
      <div className="input-group">
        <label for="diagnostics">Diagnostics</label>
        <textarea id="diagnostics" name="diagnostics" rows="4" required></textarea>
      </div>
      <div className="input-group">
        <label for="medicinesPrescribed">Medicines Prescribed</label>
        <textarea id="medicinesPrescribed" name="medicinesPrescribed" rows="4" required></textarea>
      </div>
      <div className="input-group">
        <label for="doctorsAdvice">Doctor's Advice</label>
        <textarea id="doctorsAdvice" name="doctorsAdvice" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

    )
}