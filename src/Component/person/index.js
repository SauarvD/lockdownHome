/**
 * @name Person
 * @author Saurav Dutta
 * @description File to make the person
 */
import React, { useEffect, useState } from "react";
import "./index.css";

const Person = props => {
    var speechData = (props.speechData ? true : "");
    if(speechData){
        setTimeout(function(){
            console.log('here')
            speechData = "";
        },6000)
    }
  return (
    <div className="main-div">
      <div className="hair"></div>
      <div className="dress">
        <h1>
          Life is pink
        </h1>
      </div>
      <div className="belt"></div>
      <div className="pants"></div>
      <div className="pants2"></div>
      <div className="shoe"></div>
      <div className="shoe2"></div>
      <div className="neck"></div>
      <div className="face"></div>
      <div className="eye"></div>
      <div className="eye2"></div>
      <div className="nose"></div>
      <div className={"mouth " + (speechData === true ? "talkData" : "")}></div>
      <div className="cheek"></div>
      <div className="hand"></div>
      <div className="hand3"></div>
      <div className="palm"></div>
      <div className="hand2"></div>
      <div className="palm2"></div>
    </div>
  );
};

export default Person;
