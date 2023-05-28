import * as React from "react";
import Navbar from "../components/Navbar";
import api from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import LocationCardAll from "../components/LocationCardAll";

export default function ListPage() {
  const params = useParams();
  const side = params.side;
  const [locations, setLocations] = useState([]);
  const fetchAllLocation = async () => {
    try {
      const rows = await api.get(`/location/side/${side}`);
      setLocations(rows.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllLocation();
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(https://wallpapersmug.com/download/1024x768/a0651f/beautiful-beach-aerial-view-sea.jpg)`,
              backgroundSize: "100vw 100vh",
        backgroundAttachment: "fixed",
      }}>
      <Navbar />
      <Box>
        <Typography
          textAlign={"center"}
          fontSize={"240%"}
          color={"white"}
          fontWeight={"bold"}
          marginBottom={"10vh"}>
          {side == 1 ? "Gulf of Thailand" : "Andaman Bay"}
        </Typography>
        <Grid container direction={"row"} justifyContent={"space-around"}>
          {locations.map((e) => {
            return <LocationCardAll {...e} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
}
