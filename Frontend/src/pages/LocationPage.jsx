import Navbar from "../components/Navbar";
import BeachRecom from "../components/Beach_recom";
import BeachInfo from "../components/Beach_info";
import LocationReviews from "../components/Location_review";
import api from "../axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function LocationPage() {
  const { id } = useParams();
  const [locationData, setLocationData] = useState();
  const [profile, setProflie] = useState();

  const fetchLocationData = async () => {
    try {
      const FetchedData = await api.get(`/location/${id}`);
      setLocationData(FetchedData.data);
    } catch (error) {
      console.log("Error");
    }
  };
  const fetchProfileData = async () => {
    try {
      const FetchedData = await api.get("/getprofile");
      setProflie(FetchedData.data[0]);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchLocationData();
    fetchProfileData();
  }, []);

  const ggRef = useRef(null);

  return (
    <>
      <div style={{ position: "fixed" }}>
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${locationData?.cover_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}>
        <BeachRecom slogan={locationData?.slogan} id={id} />
      </div>
      <div
        style={{
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}>
        <BeachInfo
          imgURL={locationData?.image_url}
          location={locationData?.location}
          location_id= {locationData?.id}
          description={locationData?.description}
        />
      </div>
      <div
        style={{
          backgroundColor: "#F8F9F9",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}>
        <div ref={ggRef} className="gg">
          <LocationReviews
            location={locationData?.location}
            username={profile?.username}
            location_id={id}
          />
        </div>
      </div>
    </>
  );
}
