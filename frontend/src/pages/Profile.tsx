import { ProfileSideBar } from "../components/ProfileSideBar";
import { Profilecard } from "./Profilecard";
export const Profile=()=>{
    return (<div className="flex">
    <ProfileSideBar/>
    <Profilecard/>
    </div>)
}