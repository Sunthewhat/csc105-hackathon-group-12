import * as React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <style>
        {`
          html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.5)), url("https://wallpapersmug.com/download/1024x768/a0651f/beautiful-beach-aerial-view-sea.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vh;
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
            height: calc(100vh - 220px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

        `}
      </style>
      <div className="color-nav">
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="child">
          <div className="text">
            <div className="text-log-in">
              <h1>Which beach would you like to go?</h1>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button>
            <span>Andaman Bay</span>
          </button>
          <button>
            <span>Gulf of Thailand</span>
          </button>
        </div>

      </div>
    </>
  );
}

export default HomePage;
