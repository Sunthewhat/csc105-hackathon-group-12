import Navbar from "../components/Navbar";
import BeachRecom from "./beachProfile_part/Beach_recom";
import BeachInfo from "./beachProfile_part/Beach_info";

export default function BeachProfile() {
  return (
    <>
      <style>
        {`
        `}
      </style>
      <div style={{position:"absolute"}}>
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/02/shutterstock_232532110.jpg)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center",
          height:"100vh"
        }}>
        <BeachRecom />
      </div>
      <div
        style={{
          backgroundColor:"white",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center",
          height:"100vh"
        }}>
        <BeachInfo />
      </div>
    </>
  );
}
