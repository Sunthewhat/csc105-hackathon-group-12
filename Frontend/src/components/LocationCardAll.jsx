import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LocationCardAll(props) {
  const navigate = useNavigate();
  return (
      <Grid item sx={2}
          marginBottom={"10vh"}
      >
      <div
        onClick={() => {
          navigate(`/location/${props.id}`);
        }}>
        <style>
          {`
        .card{
            background-color: white;
            width: 300px;
            height: 380px;
            border-radius: 20px;
            box-shadow: 1px 1px 5px 0px black; 
        }

        .pic-activities{
            display: flex;
            justify-content: center;
        }
        .pic-div{
            width: 260px;
            height: 260px;
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

        .recommendation{
            width: 100%;
        }
      `}
        </style>
        <div className="activities_card">
          <div className="card">
            <div className="pic-activities">
              <img className="pic-div" src={props.cover_url} alt="jetski"></img>
            </div>
            <div className="text-act">
              <Typography
                marginTop={"5%"}
                fontWeight={"bold"}
                fontSize={"120%"}>
                {props.name}
              </Typography>
              <Typography fontSize={"100%"}>{props.location}</Typography>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default LocationCardAll;
