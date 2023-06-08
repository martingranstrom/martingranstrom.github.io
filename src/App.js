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
  const [ref, entry] = useIntersect({ threshold: 0 });
  const [showIconRight, setShowIconRight] = useState(false);

  useEffect(() => {
    if (entry !== undefined) {
      if (entry.target !== undefined) {
        if (entry.isIntersecting) {
          setShowIconRight(false);
        } else {
          setShowIconRight(true);
        }
      }
    }
  }, [entry]);

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
      <TopIcons reference={ref} />
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
