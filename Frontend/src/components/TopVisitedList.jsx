import { Grid } from "@mui/material";
import api from "../axios";
import { useEffect, useState } from "react";
import Card from "./TopVisitedBeach";

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
        overflowX: "scroll",
        gap: "40px",
      }}>
      {topVisitedList.map((e) => {
        return <Card {...e} />;
      })}
    </div>
  );
}
