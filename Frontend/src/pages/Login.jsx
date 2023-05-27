import * as React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

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

          }
  
        }

        //more than 600px

        body{
          background-color: #F3F6F4;
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
      
        .input-fill input{
          width: 300px;
          height: 28px;
          border-radius: 5px;
          border: 1.5px solid #959595;
        }
      
        .label{
          margin-bottom: 10px;
          /* margin-left: 20px; */
          color:#3C8350;
        }
      
        .text{
          color: #3C8350;
          display: flex;
          flex-direction: column;
        }
      
        .text-en{
          font-size: 12px;
          display: flex;
          justify-content: center
        }

      
        .login-btn{
          background-color: #3C8350;
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

        .child-x {
            background-color: white;
            width: 50vw;
            height: 50vh;
            border-radius: 30px;
            box-shadow: 1px 1px 20px 0px #d1d1d1; 
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .child {
            display: flex;
            flex-direction: column;
        }
        \
        .login-form {
            
        }
      `}
      </style>
      <div className="color-nav">
        <Navbar />
      </div>
      <div className="all-component">
        <div className="child-x">
          <div className="child">
            <div className="text">
              <div className="text-en">
                <h1>LOG IN</h1>
              </div>
            </div>
            <div className="login-form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="label" style={{ marginTop: "30px" }}>
                    <label htmlFor="Username">Username</label>
                  </div>
                  <div className="input-fill">
                    <input
                      type="text"
                      className="form-control"
                      id="Username"
                      name="username"
                      placeholder=""
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="label">
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="input-fill">
                    <input
                      type="text"
                      className="form-control"
                      id="Password"
                      name="password"
                      placeholder=""
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <button className="login-btn" type="submit" value="Submit">
                    Log In
                  </button>
                </div>
              </form>
              <div className="forget-password">
                <a
                  href="/forgot-password"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginTop: "10px",
                    fontSize: "12px",
                  }}
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          {/* <div className="optional">
            <a
              href="/SignUp"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              Haven't an account?{" "}
              <span
                className="log-in-word"
                style={{ color: "#3C8350", fontWeight: "bold" }}
              >
                {" "}
                &nbsp;SIGN IN
              </span>
            </a>
          </div> */}
          
        </div>

      </div>
    </>
  );
}

export default Login;
