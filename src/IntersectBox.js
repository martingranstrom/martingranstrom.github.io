import React from "react";
import "./App.css";
import logo from "./images/logo.svg";
import azureLogo from "./images/azureLogo.svg";
import cSharpLogo from "./images/cSharpLogo.svg";
import cppLogo from "./images/cppLogo.svg";
import jsLogo from "./images/jsLogo.svg";
import blazorLogo from "./images/blazorLogo.png";
import terraformLogo from "./images/terraformLogo.svg";
import bashLogo from "./images/bashLogo.svg";
import dockerLogo from "./images/dockerLogo.svg";
import dotnetLogo from "./images/dotnetLogo.svg";
import nodeLogo from "./images/nodeLogo.svg";
import pythonLogo from "./images/pythonLogo.svg";
import mongoDbLogo from "./images/mongodbLogo.svg";
import useIntersect from "./hooks/useIntersect";

function ShowIntersecting(entry, show) {
  if (entry !== undefined) {
    if (entry.target !== undefined) {
      if (entry.isIntersecting) {
        entry.target.classList.add(show);
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.add("hidden");
        entry.target.classList.remove(show);
      }
    }
  }
}

function GetBullets(bullets, extras) {
  var res = [];
  for (var i = 0; i < bullets.length; i++) {
    res.push(
      <p className="bullet" key={i}>
        {bullets[i]}
        <br></br>
        <span className="extra">{extras.length > 0 ? extras[i] : ""}</span>
      </p>
    );
  }

  return res;
}

export function IntersectBoxVerticalBullets(props) {
  const [ref, entry] = useIntersect({});
  ShowIntersecting(entry, "show");
  return (
    <>
      <div ref={ref} className="hidden">
        <h2>{props.title}</h2>
        <div className="boxSection">
          {GetBullets(props.bullets, props.extras)}
        </div>
      </div>
    </>
  );
}

export function TimelineLeftItem(props) {
  const [ref, entry] = useIntersect({ threshold: 0.7 });
  ShowIntersecting(entry, "show");
  return (
    <div ref={ref} className="hidden">
      <div className="ring" />
      <div className="container left">
        <div className="content">
          <h2>2017</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export function TimelineRightItem(props) {
  const [ref, entry] = useIntersect({ threshold: 0.7 });
  ShowIntersecting(entry, "show");
  return (
    <div ref={ref} className="hidden">
      <div className="ring" />
      <div className="container right">
        <div className="content">
          <h2>2017</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export function IntersectBoxHorizontalBullets(props) {
  const [ref, entry] = useIntersect({});
  ShowIntersecting(entry, "showflex");
  return (
    <>
      <div ref={ref} className="hidden">
        {props.title}
        <p className="flexbreak"></p>
        <span className="container">
          <img
            className="compBadge"
            src={logo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={azureLogo}
            alt="logo"
            width="130px"
            height="130px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={cSharpLogo}
            alt="logo"
            width="123px"
            height="123px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={cppLogo}
            alt="logo"
            width="220px"
            height="220px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={jsLogo}
            alt="logo"
            width="150px"
            height="150px"
            style={{ borderRadius: "20px" }}
          />
        </span>
        <p className="flexbreak"></p>
        <span className="container">
          <img
            className="compBadge"
            src={blazorLogo}
            alt="logo"
            width="180px"
            height="180px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={terraformLogo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={bashLogo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={dockerLogo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={nodeLogo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <p className="flexbreak"></p>
        <span className="container">
          <img
            className="compBadge"
            src={pythonLogo}
            alt="logo"
            width="200px"
            height="200px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={dotnetLogo}
            alt="logo"
            width="180px"
            height="180px"
          />
        </span>
        <span className="container">
          <img
            className="compBadge"
            src={mongoDbLogo}
            alt="logo"
            width="180px"
            height="180px"
          />
        </span>
      </div>
    </>
  );
}
