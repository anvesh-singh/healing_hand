import {ProfileSideBar} from'./ProfileSideBar'
import {useParams} from 'react-router-dom'
import {Profilecard} from'../pages/Profilecard'
export const DocProfile=()=>{
    const {doctor}=useParams();
    return (<div className="flex">
        <ProfileSideBar id={doctor} link={"doctor"} />
        <Profilecard id={doctor} link={"doctor"}/>
        </div>
    )
}