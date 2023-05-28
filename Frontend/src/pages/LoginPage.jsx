import * as React from "react";
import { useState } from "react";
import { FormControl, TextField, Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import api from "../axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", { username, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
        
        @media screen and (max-width: 600px) {
          .all-component {
            display: flex;
            flex-direction: column;
          }

          .forget-password{
            margin-left: -60px !important;
          }
  
          .login-form{
            display: flex;
            flex-direction: column;
            background-color: white;
            width: 10px;
            height: 11px;
            border-radius: 3%;
            box-shadow: 1px 1px 20px 0px #d1d1d1; 
            margin-left: 20px;
            align-items: center;
          }
  
          .text{
            color: #3C8350;
            display: flex;
            flex-direction: column;
          }
  
          .text-en{
            display: flex;
            font-size: 20px !important;
            justify-content: center !important;
          }
  
          .text-kr{
            display: flex;
            justify-content: center !important;
            font-size: 14px !important;
            margin-bottom: 30px !important;
            margin-left: 0px !important;
          }
  
          .child{
            display: inline-block;
            vertical-align: middle;
            margin-top: -80px;
          }
  
          .form-group{
            display: flex;
            flex-direction: column;
            margin: 20px;
          }
        
          .input-fill input{
            width: 250px !important;
            height: 28px;
            border-radius: 5px;
            border: 1.5px solid #959595;
          }
        
          .label{
            margin-bottom: 10px;
            /* margin-left: 20px; */
            color:#3C8350;
          }
        
          .login-form{
            display: flex;
            flex-direction: column;
            background-color: white;
            width: 100% !important;
            border-radius: 3%;
            box-shadow: 1px 1px 20px 0px #d1d1d1; 
            align-items: center;
            margin-top: 80px;
            margin-left: 0px !important;
          }
  
        }

        html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0.5)), url("https://wallpapersmug.com/download/1024x768/a0651f/beautiful-beach-aerial-view-sea.jpg");
            /* background-size: cover; */
            background-size: 100vw 100vh;
            background-repeat: no-repeat;
            height: fit-content;
          }

        .all-component {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70vh;
        }
        .form-group{
          display: flex;
          flex-direction: column;
          margin: 20px;
        }
      
        #textfield{
          width: 300px;
          height: 20px;
          border-radius: 5px;
          border: 1.5px solid #959595;
        }
      
        .label{
          margin-bottom: 10px;
          /* margin-left: 20px; */
          color: #096584;
          font-weight: bold;
        }
      
      
        .login-form{
          display: flex;
          flex-direction: column;
          background-color: white;
          width: 400px;
          height: 400px;
          border-radius: 3%;
          box-shadow: 1px 1px 20px 0px #d1d1d1; 
          margin-left: 20px;
          align-items: center;
        }
      
        .child{
          display: inline-block;
          vertical-align: middle;  
        }
      
        .text{
          color: white;
          display: flex;
          flex-direction: column;
        }
      
        .text-en{
          display: flex;
          font-size: 28px;
          margin-top: -70px;
          justify-content: right;
        }
      
        .text-log-in{
          display: flex;
          justify-content: right;
          margin-left: 170px;
        }
      
        .login-btn{
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
      `}
      </style>
      <div className="color-nav">
        <Navbar />
      </div>
      <div className="all-component">
        <div className="child">
          <div className="text">
            <div className="text-log-in">
              <h1>"Explore the Best Beach Destinations"</h1>
            </div>
            <div className="text-en">
              <h1>GOGOBEACH</h1>
            </div>
          </div>
        </div>
        <div className="child-x">
          <div className="child">
            <div className="login-form">
              <form className="form" onSubmit={login}>
                <div className="form-group">
                  <div className="label" style={{ marginTop: "30px" }}>
                    <label htmlFor="Username">Username</label>
                  </div>
                  <div className="input-fill">
                    <TextField
                      required
                      margin="dense"
                      id="textfield"
                      size="small"
                      name="username"
                      label=""
                      variant="outlined"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      // error={!!error.title}
                      // helperText={error.title}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="input-fill">
                    <TextField
                      required
                      size="small"
                      margin="dense"
                      id="textfield"
                      name="password"
                      label=""
                      variant="outlined"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      // error={!!error.title}
                      // helperText={error.title}
                    />
                  </div>
                  <div
                    className="forget-password"
                    style={{ marginTop: "20px" }}>
                    <a
                      href="/forgot-password"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "225px",
                        fontSize: "12px",
                      }}>
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    className="login-btn"
                    type="submit"
                    value="Submit"
                    onClick={login}>
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="optional">
            <a
              href="/SignUp"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}>
              Haven't an account?{" "}
              <span
                className="log-in-word"
                style={{ color: "white", fontWeight: "bold" }}>
                {" "}
                &nbsp;SIGN IN
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
