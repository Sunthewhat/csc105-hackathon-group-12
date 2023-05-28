import api from "../axios";
import { useEffect, useState } from "react";
import Card from "./LocationCard";

export default function TopVisitList() {
  const [topVisitedList, setTopVisitedList] = useState([]);
  useEffect(() => {
    fetchTopList();
  }, []);
  const fetchTopList = async () => {
    try {
      const res = await api.get("/location/popular");
      setTopVisitedList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "100vw",
        padding: "10px",
        height: "100%",
        overflowX: "scroll",
        gap: "20px",
      }}>
      {topVisitedList.map((e) => {
        return <Card {...e} />;
      })}
    </div>
  );
}
