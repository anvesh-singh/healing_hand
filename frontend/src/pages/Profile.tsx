import { ProfileSideBar } from "../components/ProfileSideBar";
import { Profilecard } from "./Profilecard";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const Profile = () => {
  const decodedHeader = jwtDecode(localStorage.getItem("token")?.split(" ")[1]);
  return (
    <div className="flex">
      <ProfileSideBar id={decodedHeader.id} link={localStorage.getItem("token")?.split(" ")[0]}/>
      <Profilecard id={decodedHeader.id} link={localStorage.getItem("token")?.split(" ")[0]}/>
    </div>
  );
};
