import React from "react";
import logo from "../assets/logo.png"; 

function Logo({ width = "50px" }) {
  return <img src={logo} style={{ width }} alt="Logo" />;
}

export default Logo;
