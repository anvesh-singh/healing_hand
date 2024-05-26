import { useNavigate, useParams } from "react-router-dom";
export const AppointmentButton = ({ doctorid }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        const patienttoken = localStorage.getItem("token")?.split(" ")[1];
        navigate(`/appointment/${patienttoken}/${doctorid}`);
      }}
    >
      book appointment
    </button>
  );
};
