import { useEffect, useState } from "react";
import api from "../axios";
import { Box, Card, Stack, Typography } from "@mui/material";
export default function activityList(props) {
  const [bananaboat, setBananaboat] = useState(false);
  const [jetski, setJetski] = useState(false);
  const [paramotor, setParamotor] = useState(false);
  const [diving, setDiving] = useState(false);
  const [sailing, setSailing] = useState(false);
  const id = props.id;

  const fetchActivity = async () => {
    try {
      const res = await api.get(`/location/activity/${id}`);
      setBananaboat(res.data.bananaboat == 0 ? false : true);
      setJetski(res.data.jetski == 0 ? false : true);
      setParamotor(res.data.paramotor == 0 ? false : true);
      setDiving(res.data.diving == 0 ? false : true);
      setSailing(res.data.sailing == 0 ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <Box width={"100vw"} overflow={"scroll"} paddingLeft={"10px"}>
      <Stack direction={"row"} width={"fit-content"} gap={"20px"}>
        {bananaboat == true ? (
          <Card
            sx={{
              width: "fit-content",
              padding: "20px 20px 0px 20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://media.tenor.com/0kklsaJYu5AAAAAd/banana-boat.gif)",
                backgroundSize: "cover",
              }}></div>
            <Typography
              sx={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Banana Boat
            </Typography>
          </Card>
        ) : null}
        {jetski == true ? (
          <Card
            sx={{
              width: "fit-content",
              padding: "20px 20px 0px 20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://media.tenor.com/0kklsaJYu5AAAAAd/banana-boat.gif)",
                backgroundSize: "cover",
              }}></div>
            <Typography
              sx={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Jet Ski
            </Typography>
          </Card>
        ) : null}
        {paramotor == true ? (
          <Card
            sx={{
              width: "fit-content",
              padding: "20px 20px 0px 20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://www.macpara.com/media/2933/muse5-hybrid-01.jpg?anchor=center&mode=crop&width=525&height=525&rnd=132575248980000000)",
                backgroundSize: "cover",
              }}></div>
            <Typography
              sx={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Paramotor
            </Typography>
          </Card>
        ) : null}
        {diving == true ? (
          <Card
            sx={{
              width: "fit-content",
              padding: "20px 20px 0px 20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://a.cdn-hotels.com/gdcs/production164/d604/d8e6ce6d-063f-4667-9b0b-7c792bca591e.jpg?impolicy=fcrop&w=800&h=533&q=medium)",
                backgroundSize: "cover",
              }}></div>
            <Typography
              sx={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Diving
            </Typography>
          </Card>
        ) : null}
        {sailing == true ? (
          <Card
            sx={{
              width: "fit-content",
              padding: "20px 20px 0px 20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://www.sailingworld.com/wp-content/uploads/sites/18/2021/12/SLWWI22_BOTY08.jpg)",
                backgroundSize: "cover",
              }}></div>
            <Typography
              sx={{
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Sailing
            </Typography>
          </Card>
        ) : null}
      </Stack>
    </Box>
  );
}
