import React, { useState } from "react";

function Beach_info(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleGuidePlaneClick = () => {
    setMenuVisible(true);
  };
  // console.log(props);
  return (
    <>
      <style>
        {`

        .app{
            margin: 60px 0px 0px 60px;
        }
        .img-show {
          border-radius: 20px;        }
        .location-name {
          margin-top: -40px;
        }
        .location-name h1 {
          font-size: 38px;
          color: #2A8A92;
          font-weight: bold;
        }
        .info-part {
          margin-left: 40px;
          width: 80%;
        }
        .guide-plane-btn {
          background-color: #2A8A92;
          width: 200px;
          height: 50px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          padding: 10px;
          border-radius: 100px;
          cursor: pointer;
          margin-top: 20px;
        }
        .guide-plan-btn-mom {
          display: flex;
          justify-content: flex-end;
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${menuVisible ? "flex" : "none"};
          align-items: center;
          justify-content: center;
        }
        .menu-content {
          background-color: #E89C31;
          padding: 20px;
          border-radius: 20px;
          width: 500px;
        }

        .option-part{
            background-color: white;
            border-radius: 10px;
        }

        .option{
            margin: 20px 20px 20px 20px;
        }

        .close-btn{
            background-color: white;
          width: 80px;
          height: 40px;
          color: red;
          font-size: 14px;
          font-weight: bold;
          border: solid 2px red;
          padding: 10px;
          border-radius: 100px;
          cursor: pointer;
          margin-top: 20px;
            
        }

        .option a{
            text-decoration: none;
            color: black;
        }
      `}
      </style>
      <div className="app">
        <div
          className="box-com"
          style={{ display: "flex", marginRight: "20px" }}>
          <div className="gallery-part">
            <img
              className="img-show"
              style={{ width: "100%", height: "auto", maxHeight: "45vh" }}
              src={props.imgURL}
              alt="Beach"></img>
          </div>
          <div className="info-part" style={{ width: "55%", height: "auto" }}>
            <div className="general-location-info">
              <div className="location-name">
                <h1>{props.location}</h1>
              </div>
              <div className="location-des">
                <p>{props.description}</p>
              </div>
            </div>
            <div className="guide-plan-btn-mom">
              <div className="btn-part">
                <button
                  className="guide-plane-btn"
                  type="submit"
                  value="Submit"
                  onClick={handleGuidePlaneClick}>
                  Guide Plane
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="menu-overlay">
          <div className="menu-content">
            <div
              className="text-head-menu"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "-20px",
              }}>
              <h2>Guide Plane</h2>
            </div>
            <p style={{marginTop:"-20px", color: "white"}}>The guide plane was created by the many people. Enjoy searching your mathced plane</p>
            <div
              className="option-part"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}>
              <div className="option">
                <a href="">How to survive in PATTAYA</a>
              </div>
              <div className="validate-plane" style={{ marginRight: "20px" }}>
                <p>MAY 23, 20</p>
              </div>
            </div>
            <div className="close-btn-div" style={{display: "flex", justifyContent: "flex-end"}}>
              <button
                className="close-btn"
                onClick={() => setMenuVisible(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Beach_info;
