import React from "react";
// import MenuIcon from "./MenuIcon";
import beach_logo from "../assets/beach_logo.png";
import { Routes, Route, NavLink } from "react-router-dom";

function Navbar() {
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
        {/* background-color: rgba(255, 255, 255, 0.2); */}
        {/* width: 100% */}
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
        color: white;
        text-decoration: none;
      }
      
      .navbar-link:hover {
        color: #0ecd4d;
      }

      .icon-menu{
        display: none;
      }

      // @media screen and (max-width: 800px){
      //   .navbar-menu{
      //     display: flex;
      //     flex-direction: column;
      //     align-items: flex-end;
      //   }
      
    //     .navbar {
    //       display: flex;
    //       align-items: center;
    //       padding: 10px;
    //       justify-content: space-between;
    //     }

    //     .mem-nav{
    //       display: none;
    //     }

    //     .icon-menu{
    //       display: block !important;
    //     }

    //   }
    
      `}
      </style>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="pic" style={{ marginRight: "0" }}>
            <img className="logo7" src={beach_logo} alt="Logo" />
          </div>
        </div>
        <div className="mem-nav" style={{ justifyItems: "start" }}>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                HOME
              </a>
            </li>
            <li className="navbar-item">
              <a href="/popular-beaches" className="navbar-link">
                POPULAR BEACHES
              </a>
            </li>
            <li className="navbar-item">
              <a href="/guide" className="navbar-link">
                GUIDE PLAN
              </a>
            </li>
            <li className="navbar-item">
              <a href="/reviews" className="navbar-link">
                REVIEWS
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="icon-menu">
          <MenuIcon />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
