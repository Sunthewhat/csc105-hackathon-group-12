import { Typography } from "@mui/material";
import ActivityList from "./activityList";

function Beach_recom(props) {

  return (
    <>
      <style>
        {`
        {/* html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/02/shutterstock_232532110.jpg");
            background-repeat: no-repeat;
            background-size: 1920px 100vh;
          } */}

          .review-btn{
            background-color: #E89C31;
            width: 200px;
            height: 50px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            padding: 10px;
            border-radius: 100px;
            cursor: pointer;
            margin:0px 50px
        }

        .app1{
            display: flex;
            width: 100vw;
            position: absolute;
            margin-top: 100px;
            height:83vh;
        }
        
        .card{
            background-color: white;
            width: 190px;
            height: 250px;
            border-radius: 20px;
            box-shadow: 1px 1px 20px 0px black; 
        }

        .pic-activities{
            display: flex;
            justify-content: center;
        }
        .pic-div{
            width: 160px;
            height: 160px;
            border-radius: 10px;
            margin-top: 15px;
        }

        .text-act{
            text-align: center;
        }

        .text{
            color: white;
            font-size: 24px;
        }

        .text-recom{
            display: flex;
            justify-content: flex-end;
        }
        `}
      </style>
      <div className="app1">
        <div className="recommendation">
          <div className="text-recom">
            <div
              className="btn-part"
              style={{
                width: "100vw",
                display: "flex",
                justifyContent: "flex-end",
              }}>
              <button className="review-btn" type="submit" value="Submit">
                Write Your Review
              </button>
            </div>
          </div>
          <Typography
            fontWeight={"bold"}
            color={"white"}
            fontSize={"8vh"}
            marginTop={"35vh"}
            paddingLeft={"5vh"}
            marginBottom={"5vh"}>
            {props.slogan}
          </Typography>
          <div
            className="location-card-profile-page"
            style={{ marginLeft: "30px" }}>
            <ActivityList id={props.id} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Beach_recom;
