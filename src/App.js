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
      <div className="start">
        <img
          className="mugshot"
          src={mugshot}
          alt="mugshot"
          width="250px"
          height="250px"
        />
        <h1>Martin Granström</h1>
        <h3>Software developer</h3>
        <TopIcons reference={iconsRef} />
      </div>
      <SideIcons showIconRight={showIconRight} />
      <div className="timeline" id="timelinez">
        <TimelineLeftItem year={"2020"} />
        <TimelineRightItem year={"2017"} />
        <TimelineLeftItem year={"2017"} />
        <TimelineRightItem year={"2015"} />
      </div>
    </>
  );
}

export default App;
