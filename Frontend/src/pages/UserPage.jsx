import React from "react";
import Navbar from "../components/Navbar";
import dog from "../assets/beach_logo.png";

function UserPage() {
  return (
    <>
      <style>
        {`
          html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.5)), url("https://wallpapersmug.com/download/1024x768/a0651f/beautiful-beach-aerial-view-sea.jpg");
            background-size: 100vw 100vh;
            background-repeat: no-repeat;
            height: fit-content;
          }
          .child{
            display: inline-block;
            vertical-align: middle;
            margin-top: -80px;
          }
          .text{
            color: #3C8350;
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 10px;
          }
          .h1{
            margin-top: 0;
          }

          .text-log-in{
            display: flex;
            justify-content: right;
            color: white;
          }

          .text-en{
            display: flex;
            font-size: 20px !important;
            justify-content: end;
            margin-top: -60px;
            color: white;
          }

          .profile-box {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 20px;
            width: 300px;
            margin: 20px auto;
            text-align: center;
          }

          .all-component {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70vh;
            width: 100%;
          }

          .profile-image {
            width: 300px;
            height: 300px;
            border-radius: 100%;
            margin-bottom: 10px;
            object-fit: cover;
            border: 2px solid #ffffff; 
            
          }

          .logout-button {
            background-color: #096584;
            width: 100px;
            color: white;
            font-weight: bold;
            font-size: 14px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 25px;
            align-self: center;
          }

          .logout-button:hover {
            background-color: #cc0000;
          }
        `}
      </style>

      <Navbar />
      <div className="all-component">
      <div className="child">
        <div className="text">
          <div className="text-log-in">
            <h1>"Eternal of prosperity"</h1>
          </div>
          <div className="text-en">
            <h1>GOGOBEACH</h1>
          </div>
          </div>
        </div>
        <div>
          <div className="profile-box">
            <img className="profile-image" src={dog} alt="Profile" />
            <div>
              <a href="" className="user-bio-link">
                Change cover image
              </a>
            </div>
            <button className="logout-button">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
