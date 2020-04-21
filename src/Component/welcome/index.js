/**
 * @name Index
 * @author Saurav Dutta
 * @description index file to initiate speaking from user to machine and vice versa
 */
import React, { useState } from "react";
import "./index.css";
import calculateAnswer from "../../Q&A/logicBlock";
import Room from "../room/index";
import { useSelector, useDispatch } from "react-redux";

const Index = props => {
  var speechData = false;
  useSelector(state => {
    if(state.data !== undefined){
      speechData = true
      console.log(state.data)
    }
  });
  const dispatch = useDispatch();
  /**
   * Initializations of speechRecognition and speechSynthesis
   */
  const [showButton, setCondition] = useState(true);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const voicesList = window.speechSynthesis.getVoices();
  window.onresize = function(event) {
    // readOutLoud(true);
  };

  /**
   * Function to start listening to user's commands
   */
  recognition.onstart = function() {
    console.log("Voice is activated");
    setCondition(false);
    setTimeout(function(){
      setCondition(true);
    },3000)
  };

  /**
   * As user stops speaking, this function gets triggered
   * It gets the message from user and sends to logicBlock
   * to process the output
   */
  recognition.onresult = function(event) {
    setCondition(true);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    readOutLoud(transcript);
  };

  const talkData = (data) => {
    if(data){
      talkButton();
    }
  }

  /**
   * Function to initiate speaking
   */
  const talkButton = () => {
    recognition.start();
  };

  /**
   * Function to read out loud the processed output to the user
   * @param {string} message 
   */
  const readOutLoud = message => {
    var voices = window.speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.text = `Samajh nahi aaya, kya kaha aap ne. Can you please repeat?`;
    if(message === true){
      speech.text = `Ha ha pata hai, responsive nahi hai`
    } else {
      /**
       * Getting the processed output as per user's message
       */
      const output = calculateAnswer.calculateAnswer(message);
      if(output !== undefined){
        speech.text = output;
      }
    }
    /**
     * 55th is the index of indian language from among the list of voices available
     */
    speech.voice = voices[55] || voicesList[55];
    dispatch({type: "SPEAK", payload: speech.text})
    window.speechSynthesis.speak(speech);
  };

  return (
    <article className="container">
      {/* <div className="content">
        {showButton && <button onClick={talkButton}>Talk</button>}
      </div> */}
      <Room talkValue={talkData} speechData={speechData}/>
    </article>
  );
};

export default Index;
