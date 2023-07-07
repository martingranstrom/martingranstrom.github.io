import React, { useEffect, useState } from "react";
import "./App.css";
import mugshot from "./images/mugshot.jpg";
import { TimelineLeftItem, TimelineRightItem } from "./IntersectBox.js";
import useIntersect from "./hooks/useIntersect";
import { TopIcons, SideIcons } from "./ContactIcons";
/*"International Software Testing Qualifications Board (ISTQB) - Foundation level"*/
function moveTimeline() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.documentElement.style.setProperty(
    "--timeline-progress",
    scrolled + "%"
  );

  if (scrolled === 0) {
    document.documentElement.style.setProperty(
      "--timeline-arrow-color",
      "rgb(0, 0, 0, 1)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--timeline-arrow-color",
      "rgb(0, 0, 0, 0)"
    );
  }
}

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

  window.onscroll = function () {
    moveTimeline();
  };

  return (
    <>
      <ul className="navbar">
        <li>
          <a href="#home">About me</a>
        </li>
        <li>
          <a href="#home">Skills</a>
        </li>
        <li>
          <a href="#timelinez">Experience</a>
        </li>
      </ul>
      <div className="start">
        <img
          className="mugshot"
          src={mugshot}
          alt="mugshot"
          width="250px"
          height="250px"
        />
        <h1>Martin Granström</h1>
        <h3 className="title">Software developer</h3>
        <TopIcons reference={iconsRef} />
      </div>
      <SideIcons showIconRight={showIconRight} />
      <div className="timeline" id="timelinez">
        <TimelineLeftItem
          company={"Collector Bank"}
          location={"Gothenburg, Sweden | 2020 - Current"}
          content={"Software developer"}
          patch={"Team Lead"}
        />
        <TimelineRightItem
          company={"Zenuity"}
          location={"Gothenburg, Sweden | 2017 - 2020"}
          content={"Software developer"}
        />
        <TimelineLeftItem
          company={"MSc Biomedical Engineering"}
          location={
            "Chalmers University of Technology - Gothenburg, Sweden | 2015 - 2017"
          }
          content={"MSc Biomedical Engineering"}
        />
        <TimelineRightItem
          company={"BSc Mechatronics"}
          location={
            "Chalmers University of Technology - Gothenburg, Sweden | 2012 - 2015"
          }
          content={"BSc Mechatronics"}
        />
      </div>
    </>
  );
}

export default App;
