import React from "react";
import "./App.css";
import logo from "./logo.svg";
import azureLogo from "./azureLogo.svg";
import cSharpLogo from "./cSharpLogo.svg";
import cppLogo from "./cppLogo.svg";
import jsLogo from "./jsLogo.svg";
import blazorLogo from "./blazorLogo.png";
import terraformLogo from "./terraformLogo.svg";
import bashLogo from "./bashLogo.svg";
import dockerLogo from "./dockerLogo.svg";
import dotnetLogo from "./dotnetLogo.svg";
import nodeLogo from "./nodeLogo.svg";
import pythonLogo from "./pythonLogo.svg";
import mongoDbLogo from "./mongodbLogo.svg";
import mugshot from "./mugshot.jpg";
import useIntersect from "./useIntersect";

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

function GetBullets(bullets) {
  var res = [];
  for (var i = 0; i < bullets.length; i++) {
    res.push(
      <p className="bullet" key={i}>
        {bullets[i]}
      </p>
    );
  }

  return res;
}

function IntersectBoxVerticalBullets(props) {
  const [ref, entry] = useIntersect({});
  ShowIntersecting(entry, "show");
  return (
    <>
      <div ref={ref}>
        {props.title}
        {GetBullets(props.bullets)}
      </div>
    </>
  );
}

function IntersectBoxHorizontalBullets(props) {
  const [ref, entry] = useIntersect({});
  ShowIntersecting(entry, "showflex");
  return (
    <>
      <div ref={ref}>
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

function App() {
  return (
    <>
      <div className="start">
        <img
          className="mugshot"
          src={mugshot}
          alt="mugshot"
          width="250px"
          height="250px"
        />
        <p>Martin Granström</p>
      </div>
      <IntersectBoxVerticalBullets
        title={"Arbetslivserfarenhet"}
        bullets={["Zenuity (Zenseact)", "Collector Bank"]}
      />
      <IntersectBoxVerticalBullets
        title={"Kompetenser"}
        bullets={["hej", "rek", "tre"]}
      />
      <IntersectBoxVerticalBullets
        title={"Certifieringar"}
        bullets={["hej", "rek", "tre"]}
      />
      <IntersectBoxHorizontalBullets title={"Teknisk kompetens"} />
    </>
  );
}

export default App;
