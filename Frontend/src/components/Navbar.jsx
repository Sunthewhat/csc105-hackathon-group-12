import React, { useState, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import beach_logo from "../assets/beach_logo.png";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  const [color, setColor] = useState("white");
  const [bgcolor, setBgcolor] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setColor("black");
        setBgcolor(true);
      } else {
        setColor("white");
        setBgcolor(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const componentDidMount = () => {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // };
  // const
  // state = {
  //   color: "white",
  // };

  // };
  // const componentDidMount = () => {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // };
  return (
    <>
      <style>
        {" "}
        {`
      @font-face {
        font-family: 'My Custom Font';
        src: url('../font/JosefinSans-VariableFont_wght.ttf') format('woff2')
      }
      
      .navbar {
        display: flex;
        align-items: center;
        padding: 10px;
        position: sticky;
        top: 0;
        height: 100px;
        width: 100vw;
        {/* background-color: rgba(255, 255, 255, 0.2); */}
      }
      
      .navbar-logo {
        margin: 10px;
      }
      
      .logo7{
        width:100%;
        height: 60px;
      
      }
      
      .navbar-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin-left: 8px;
      }
      
      .navbar-item {
        margin: 0 10px;
        font-size: 16px;
        font-family: "Josefin Sans", sans-serif;
      }
      
      .navbar-link {
        text-decoration: none;
      }
      
      .navbar-link:hover {
        color: #0ecd4d;
      }

      .icon-menu{
        background-color: 
      }

    
      `}
      </style>
      <nav
        className="navbar"
        style={{ backgroundColor: bgcolor == true ? "white" : "" }}>
        <div className="navbar-logo">
          <div className="pic" style={{ marginRight: "0" }}>
            <img className="logo7" src={beach_logo} alt="Logo" />
          </div>
        </div>
        <div className="mem-nav" style={{ justifyItems: "start" }}>
          
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link" style={{ color: color }}>
                HOME
              </a>
            </li>
            {/* <li className="navbar-item">
              <a
                href="/popular-beaches"
                className="navbar-link"
                style={{ color: color }}>
                POPULAR BEACHES
              </a>
            </li> */}
            {/* <li className="navbar-item">
              <a href="/guide" className="navbar-link" style={{ color: color }}>
                GUIDE PLAN
              </a>
            </li> */}
          </ul>
        </div>
        <div className="icon-menu">
          <Button onClick={handleClick}>
            <MenuIcon />
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
