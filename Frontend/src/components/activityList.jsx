/*
<div className="card">
                    <div className="pic-activities">
                        <img className="pic-div" src="https://cdn.getyourguide.com/img/tour/637fbe8a9b1ec.png/146.jpg" alt="jetski"></img>
                    </div>
                    <div className="text-act">
                        <h3>Jetski</h3>
                    </div>
                </div>
*/
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
  console.log(id);

  const fetchActivity = async () => {
    try {
      const res = await api.get(`/location/activity/${id}`);
      console.log(res.data);
      setBananaboat(res.data.bananaboat == 0 ? false : true);
      setJetski(res.data.jetski == 0 ? false : true);
      setParamotor(res.data.paramotor == 0 ? false : true);
      setDiving(res.data.diving == 0 ? false : true);
      setSailing(res.data.sailing == 0 ? false : true);

      console.log(
        diving + " " + jetski + " " + paramotor + " " + diving + " " + sailing
      );
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
              padding: "20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "200px",
                backgroundImage:
                  "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/9c/e2/80/caption.jpg?w=1200&h=-1&s=1)",
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
              padding: "20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "200px",
                backgroundImage:
                  "url(https://cdn.getyourguide.com/img/tour/637fbe8a9b1ec.png/146.jpg)",
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
              padding: "20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "200px",
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
              padding: "20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "200px",
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
              padding: "20px",
              borderRadius: "20px",
            }}>
            <div
              style={{
                borderRadius: "20px",
                width: "200px",
                height: "200px",
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
              Diving
            </Typography>
          </Card>
        ) : null}
      </Stack>
    </Box>
  );
}
