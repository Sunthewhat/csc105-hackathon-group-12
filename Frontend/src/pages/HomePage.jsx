import * as React from "react";
import Navbar from "../components/Navbar";
import TopVisitList from "../components/TopVisitedList";
import { useNavigate } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function HomePage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/location/all/${e}`);
  };
  return (
    <>
      <style>
        {`
          html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.5)), url("https://wallpapersmug.com/download/1024x768/a0651f/beautiful-beach-aerial-view-sea.jpg");
            background-size:100vw 100vh;
            background-repeat: no-repeat;
          }

          /* Add your custom CSS styles for the homepage here */
          .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .text-log-in {
            font-size: 28px;
            text-align: center;
            color: white;
            margin-top: auto;
            margin-bottom: auto;
          }

          .button-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 370px;
          }

          .button-container button {
            margin: 0 10px;
            padding: 10px 20px;
            background-color: rgba(255, 255, 255, 0.5); /* Background color with less opacity */
            font-weight: bold;
            font-size: 16px;
            border: 2px solid white;
            border-radius: 100px;
            cursor: pointer;
            color: white; /* Text color set to white */
          }

          .button-container button span {
            opacity: 1; /* Text opacity set to normal */
          }

          .wrapper{
            height: calc(100vh - 200px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
            grid-gap: 10px;
            background-color: #2196F3;
            padding: 10px;
            height: 200hv;
          }
          .visited {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
            margin-left: 50px;
          }

          .arrow-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;
          }

          .scroll-text {
            color: white;
            font-size: 14px;
            margin-bottom: 10px;
          }

        `}
      </style>

      <Navbar />

      <div className="wrapper" style={{ height: "100vh" }}>
        <div className="child">
          <div className="text">
            <div className="text-log-in">
              <h1>Which beach would you like to go?</h1>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={(e)=>handleClick(2)}>
            <span>Andaman Sea</span>
          </button>
          <button onClick={(e)=>handleClick(1)}>
            <span>Gulf of Thailand</span>
          </button>
        </div>
        <div className="arrow-container">
          <ArrowDownwardIcon style={{ color: 'white', fontSize: 48 }} />
          <p className="scroll-text">Scroll for more</p>
        </div>
      </div>
      <div className="wrap" style={{}}>
        <div
          className="visited"
          style={{
            height: "100vh",
          }}>
          <h1>TOP 10 MOST VISITED BEACH</h1>
          <TopVisitList />
        </div>
      </div>
    </>
  );
}

export default HomePage;
