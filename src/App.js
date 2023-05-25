import React, { useState } from "react";
import "./App.css";
import mugshot from "./images/mugshot.jpg";
import linkedinIcon from "./images/linkedinIcon.png";
import envelope from "./images/envelope.png";
import {
  IntersectBoxVerticalBullets,
  IntersectBoxHorizontalBullets,
} from "./IntersectBox.js";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [contactInfo, setContactInfo] = useState("");
  const [copy, setCopy] = useState("Click to copy!");

  const copyOnClick = () => {
    navigator.clipboard.writeText(contactInfo);
    setCopy("Copied to clipboard!");
  };

  const handleMouseOut = () => {
    setShowContact(false);
    setContactInfo("");
    setCopy("Click to copy!");
  };

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
        <img
          className="contacticon"
          src={linkedinIcon}
          alt="in"
          width="50px"
          height="50px"
          onMouseOver={() => {
            setShowContact(true);
            setContactInfo(
              "https://www.linkedin.com/in/martin-granström-33a1a5134/"
            );
          }}
          onMouseOut={handleMouseOut}
          onClick={copyOnClick}
        />
        <img
          className="contacticon"
          src={envelope}
          alt="in"
          width="50px"
          height="50px"
          onMouseOver={() => {
            setShowContact(true);
            setContactInfo("martingranstrom@live.se");
          }}
          onMouseOut={handleMouseOut}
          onClick={copyOnClick}
        />
        <p className={showContact ? "showContact" : "hideContact"}>
          {copy}
          <br></br>
          {contactInfo}
        </p>
      </div>
      <IntersectBoxVerticalBullets
        title={"Work Experience"}
        bullets={[
          "Collector Bank AB | 2020 - now",
          "Zenseact AB | 2017 - 2020",
        ]}
        extras={["Collector extra", "zenuity extra"]}
      />
      <IntersectBoxVerticalBullets
        title={"Skills"}
        bullets={["hejhuihdwahdiahwpdahwphe", "rek", "tre"]}
        extras={[]}
      />
      <IntersectBoxVerticalBullets
        title={"Certifications"}
        bullets={[
          "International Software Testing Qualifications Board (ISTQB) - Foundation level",
        ]}
        extras={[]}
      />
      <IntersectBoxHorizontalBullets title={"Teknisk kompetens"} />
    </>
  );
}

export default App;
