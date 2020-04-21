/**
 * @name Room
 * @author Saurav Dutta
 * @description File to make the room
 */
import React, { useEffect, useState } from "react";
import "./index.css";
import Person from "../person/index";

const Room = props => {
  const [currentTime, setTime] = useState("");

  useEffect(() => {
    let d = new Date();
    d = d.getHours();
    let timeOfTheDay =
      d >= 6 && d <= 14 ? "morning" : d > 14 && d < 19 ? "afternoon" : "night";
    setTime(timeOfTheDay);
    timeMapping();
    setInterval(function(){
        timeMapping();
    },300000)
  }, []);

  const timeMapping = () => {
    let timeValue = new Date();
    let hours = timeValue.getHours();
    let mins = timeValue.getMinutes();
    let hour_as_degree = (hours / 12) * 360 ;
    let minute_as_degree = (mins / 60) * 360;
    let hourElement = document.getElementsByClassName('hour')[0];
    let minElement = document.getElementsByClassName('minute')[0];
    hourElement.style.transform = 'rotate(' + hour_as_degree + 'deg)';
    minElement.style.transform = 'rotate(' + minute_as_degree + 'deg)';
  };

  const mountainScene = () => {
    return (
      <section>
        <div
          className={"mountain " + (currentTime === "night" ? "darkMode" : "")}
        >
          <div className="mountain-top">
            <div className="mountain-cap-1"></div>
            <div className="mountain-cap-2"></div>
            <div className="mountain-cap-3"></div>
          </div>
        </div>
        <div className="mountain-two">
          <div className="mountain-top">
            <div className="mountain-cap-1"></div>
            <div className="mountain-cap-2"></div>
            <div className="mountain-cap-3"></div>
          </div>
        </div>
        <div className="cloud"></div>
        {currentTime === "night" && (
          <div>
            <div className="stars"></div>
          </div>
        )}
      </section>
    );
  };

  const morningScene = () => {
    return (
      <section className="morningScene">
        <div className="morningSun"></div>
        {mountainScene()}
      </section>
    );
  };

  const afternoonScene = () => {
    return (
      <section className="afternoonScene">
        <div className="afternoonSun"></div>
        {mountainScene()}
      </section>
    );
  };

  const nightScene = () => {
    return (
      <section className="nightScene">
        <div className="moon"></div>
        {mountainScene()}
      </section>
    );
  };

  const talkButton = () => {
    props.talkValue(true);
  };

  return (
    <div id="workspace">
      <div onClick={talkButton}>TALK</div>
      <div className="clock">
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
        <div className="center"></div>
        <div className="hour"></div>
        <div className="minute"></div>
        <div className="second"></div>
      </div>

      <div id="shelf">
        <ul>
          <li className="books">
            <span></span>
            <span>
              <i></i>
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <div></div>
      </div>

      <div className="desk">
        <div className="table">
          <div className="right-tb">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="mouse"></span>

          <span className="cup">
          </span>

          <div className="imac">
            <span className="note">Yep!</span>
          </div>
        </div>

        <div className="chair">
          <div className="relative">
            <div className="absolute">
              <Person speechData={props.speechData}/>
            </div>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <i className="shadows"></i>
        </div>

        <div className="trash">
          <i className="shadows"></i>
        </div>
      </div>
    </div>
  );
};

export default Room;
