import React from "react";
import "./App.css";
import azure from "./images/azureLogo.svg";
import bash from "./images/bashLogo.svg";
import cpp from "./images/cppLogo2.svg";
import cSharp from "./images/cSharpLogo.svg";
import docker from "./images/dockerLogo.svg";
import dotnet from "./images/dotnetLogo.svg";
import js from "./images/jsLogo.svg";
import mongoDb from "./images/mongodbLogo.svg";
import node from "./images/nodeLogo.svg";
import python from "./images/pythonLogo.svg";
import terraform from "./images/terraformLogo.svg";
import react from "./images/reactLogo.png";

export function Skills() {
  return (
    <>
      <img
        className="skillsIcon"
        alt="azure"
        src={azure}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="cpp"
        src={cpp}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="cSharp"
        src={cSharp}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="bash"
        src={bash}
        width="55px"
        height="55px"
      />
      <img
        className="skillsIcon"
        alt="docker"
        src={docker}
        width="55px"
        height="55px"
      />
      <img
        className="skillsIcon"
        alt="dotnet"
        src={dotnet}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="js"
        src={js}
        width="50px"
        height="50px"
        style={{ borderRadius: "15px" }}
      />
      <img
        className="skillsIcon"
        alt="mongoDb"
        src={mongoDb}
        width="55px"
        height="55px"
      />
      <img
        className="skillsIcon"
        alt="node"
        src={node}
        width="55px"
        height="55px"
      />
      <img
        className="skillsIcon"
        alt="python"
        src={python}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="terraform"
        src={terraform}
        width="50px"
        height="50px"
      />
      <img
        className="skillsIcon"
        alt="react"
        src={react}
        width="50px"
        height="50px"
      />
    </>
  );
}
