import React, { useEffect, useState } from "react";
import "./App.css";
import mugshot from "./images/mugshot.jpg";
import {
  IntersectBoxVerticalBullets,
  IntersectBoxHorizontalBullets,
} from "./IntersectBox.js";
import useIntersect from "./hooks/useIntersect";
import { TopIcons, SideIcons } from "./ContactIcons";

function App() {
  const [iconsRef, iconsEntry] = useIntersect({ threshold: 0.3 });
  const [showIconRight, setShowIconRight] = useState(false);

  useEffect(() => {
    if (iconsEntry !== undefined) {
      if (iconsEntry.target !== undefined) {
        if (iconsEntry.isIntersecting) {
          setShowIconRight(false);
        } else {
          setShowIconRight(true);
        }
      }
    }
  }, [iconsEntry]);

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
        <h1 className="myName">Martin Granström</h1>
        <TopIcons reference={iconsRef} />
      </div>
      <SideIcons showIconRight={showIconRight} />

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
