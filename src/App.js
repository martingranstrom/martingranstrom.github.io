import React, { useEffect, useState } from "react";
import "./App.css";
import mugshot from "./images/mugshot.jpg";
import { TimelineLeftItem, TimelineRightItem } from "./IntersectBox.js";
import useIntersect from "./hooks/useIntersect";
import { TopIcons, SideIcons } from "./ContactIcons";
/*"International Software Testing Qualifications Board (ISTQB) - Foundation level"*/
function moveTimeline() {
  //var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //var height =
  //  document.documentElement.scrollHeight -
  //  document.documentElement.clientHeight;
  //var scrolled = (winScroll / height) * 100;

  const timeline = document.getElementById("timelinez");
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = timeline.offsetTop;
  const elementHeight = timeline.offsetHeight;

  // Calculate percentage of the element that's been seen
  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = distance / (elementHeight / 100);
  const scrolled = Math.min(100, Math.max(0, percentage - 10));

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

function App() {
  const [iconsRef, iconsEntry] = useIntersect({ threshold: 0.3 });
  const [abtMeRef1, abtMeEntry1] = useIntersect({ threshold: 0.7 });
  const [abtMeRef2, abtMeEntry2] = useIntersect({ threshold: 0.7 });
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
    // Optimize
    ShowIntersecting(abtMeEntry1, "show");
    ShowIntersecting(abtMeEntry2, "show");
  }, [iconsEntry, abtMeEntry1, abtMeEntry2]);

  window.onscroll = function () {
    moveTimeline();
  };

  return (
    <>
      <ul className="navbar">
        <li>
          <a href="#aboutMe">about me</a>
        </li>
        <li>
          <a href="#timelinez">experience</a>
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
        <span className="scrollDown" />
      </div>
      <SideIcons showIconRight={showIconRight} />
      <section className="aboutMeContainer" id="aboutMe">
        <div ref={abtMeRef1} className="aboutMeChild hidden">
          <h3>about me</h3>
          this is some info about me
        </div>
        <div ref={abtMeRef2} className="aboutMeChild hidden">
          <h3>skills</h3>
          these are some of my skills
        </div>
      </section>
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
