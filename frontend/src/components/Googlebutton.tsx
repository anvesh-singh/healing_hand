//@ts-nocheck
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Googlebutton = ({ type, link }) => {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        var postInputs = {
          FirstName: decoded.given_name,
          LastName: decoded.family_name,
          Email: decoded.email,
          Phone: "XXXXXXXXXX",
          Password: "**********",
        };
        if (type == "signin") {
          postInputs = {
            Email: decoded.email,
            Password: "**********",
          };
        }
        try {
          const response = await axios.post(BACKEND_URL + link, postInputs);
          if (response.status == 202) {
            alert(response.data.msg);
          } else {
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/");
          }
        } catch (e) {
          alert("Error while signing up");
          // alert the user here that the request failed
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
