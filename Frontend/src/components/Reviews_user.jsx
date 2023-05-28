import { useEffect, useState } from "react";
import api from "../axios";
import { Typography } from "@mui/material";

function Reviews_user(props) {
  const [username, setUsername] = useState();
  const fetchProfile = async () => {
    try {
      // console.log(props.id);
      const data = await api.get(`/getuser/${props.user_id}`);
      setUsername (data.data.data[0].username);
      // username = data.data.username;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <div>
        <style>
          {`
            .app-card-review{
                background-color: white;
                width:80%;
                height: fit-to-content;
                border-radius: 10px;
                margin-top: 30px;
            }

            .image-btn{
                background-color: #2A8A92;
                width: 150px;
                color: white;
                font-weight: bold;
                font-size: 14px;
                border: none;
                padding: 10px;
                border-radius: 100px;
                cursor: pointer;
                margin-top: 25px;
                align-self: center;
                margin-bottom: 20px;
            }
            `}
        </style>
        <div className="app-card-review">
          <div
            class="content"
            style={{ display: "flex", padding: "20px 20px 20px 20px" }}>
            <div
              className="image"
              style={{
                width: "52px",
                height: "52px",
                backgroundColor: "white",
                borderRadius: "360px",
              }}>
              <img
                src="https://www.svgrepo.com/show/437116/person-circle.svg"
                style={{ width: "52px" }}
                alt="logo"></img>
            </div>
            <div
              class="details"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                color: "#096584",
                fontWeight: "bold",
              }}>
              <Typography
                paddingTop={"10px"}
                fontSize={"100%"}
                fontWeight={"bold"}

              >{username}</Typography>
            </div>
          </div>
          <div
            className="reviews-info"
            style={{ marginLeft: "80px", marginTop: "-50px" }}>
            <div
              className="header-reviews"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "30px",
                paddingTop: "0px",
              }}>
              <p>{ props.header }</p>
            </div>
            <div className="text-des-review" style={{ marginTop: "-10px" }}>
              <p>{props.text}</p>
            </div>
          </div>
          <div
            className="seeing-photo"
            style={{
              marginTop: "-20px",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "30px",
            }}>
            <button className="image-btn" type="submit" value="Submit">
              View Photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reviews_user;
