//@ts-nocheck
import axios from "axios";
import { saveAs } from "file-saver";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import "../css/Report.css";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const Report = () => {
  const { patienttoken, doctorid } = useParams();
  const [details, setdetails] = useState({
    doctorname: "",
    patientname: "",
    doctorphone: "",
    patientphone: "",
    ChiefComplaints:"",
    Diagnostics:"",
    MedicinesPrescribed:"",
    DoctorsAdvice:""
  });
  useEffect(()=>{
    const p=async()=>{
      try{
      const decode=jwtDecode(patienttoken);
      const response=await axios.get(`${BACKEND_URL}/patient/profile`,{
        headers:{
          id:decode.id
        }
      })
      const response2=await axios.get(`${BACKEND_URL}/doctor/profile`,{
        headers:{
          id:doctorid
        }
      })
      setdetails({
        ...details,doctorname:response2.data.FirstName,doctorphone:response2.data.Phone,patientname:response.data.FirstName,patientphone:response.data.Phone
      })}
      catch(err){
        slert("error");
      }
    }
     p().then((res)=>{
     });
  },[])
  const createreport = async () => {
    try {
      const response3 = await axios.post(
        `${BACKEND_URL}/doctor/report`,
        details,
        {
          headers: { token: patienttoken },
        }
      );
    } catch (err) {
      alert("error");
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Medical Report Input</h1>
        <form>
          <div className="input-group">
            <label for="patientName">Patient Name</label>
          {details.patientname}
          </div>
          <div className="input-group">
            <label for="patientPhone">Patient Phone</label>
          {details.patientphone}
          </div>
          <div className="input-group">
            <label for="doctorName">Doctor Name</label>
          {details.doctorname}           {details.doctorphone}
          </div>
          <div className="input-group">
            <label for="doctorPhone">Doctor Phone</label>
          {details.doctorphone}
          </div>
          <div className="input-group">
            <label for="chiefComplaints">Chief Complaints</label>
            <textarea
              id="chiefComplaints"
              name="chiefComplaints"
              rows="4"
              required onChange={(e)=>{
                setdetails({
                  ...details,ChiefComplaints:e.target.value
                })
              }}
            ></textarea>
          </div>
          <div className="input-group">
            <label for="diagnostics">Diagnostics</label>
            <textarea
              id="diagnostics"
              name="diagnostics"
              rows="4"
              required onChange={(e)=>{
                setdetails({
                  ...details,Diagnostics:e.target.value
                })
              }}
            ></textarea>
          </div>
          <div className="input-group">
            <label for="medicinesPrescribed">Medicines Prescribed</label>
            <textarea
              id="medicinesPrescribed"
              name="medicinesPrescribed"
              rows="4"
              required onChange={(e)=>{
                setdetails({
                  ...details,MedicinesPrescribed:e.target.value
                })
              }}
            ></textarea>
          </div>
          <div className="input-group">
            <label for="doctorsAdvice">Doctor's Advice</label>
            <textarea
              id="doctorsAdvice"
              name="doctorsAdvice"
              rows="4"
              required onChange={(e)=>{
                setdetails({
                  ...details,DoctorsAdvice:e.target.value
                })
              }}
            ></textarea>
          </div>
          <button type="submit" onClick={createreport}>Submit</button>
        </form>
      </div>
    </div>
  );
};
