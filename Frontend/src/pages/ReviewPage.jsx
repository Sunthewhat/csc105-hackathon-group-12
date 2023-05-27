import * as React from "react";
import Navbar from "../components/Navbar";

function ReviewPage() {
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
          }
          .visited {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }

        `}
      </style>

      <Navbar />
    </>
  );
}

export default ReviewPage;