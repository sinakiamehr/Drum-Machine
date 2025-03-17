import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    const audio = e.target.querySelector("audio");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.log("Audio Play Failed: ", err);
      });
    }
    setDisplay(e.target.id);
  };
  useEffect(() => {
    document.querySelectorAll(".drum-pad").forEach((pad) => {
      pad.addEventListener("click", handleClick);
    });
  }, []);
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const pad = document.getElementById(`key-${key}`);
      if (pad) {
        pad.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  useEffect(() => {
    document.getElementById("display").innerText = display;
  }, [display]);

  return (
    <div className="App">
      <header className="App-header">
        Press Any Key to play the associated sound. You can also use the
        appropriate keyboard key. Happy Drumming!
      </header>
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-key-bar" id="drum-key-bar">
          <div className="drum-pad" id="key-Q">
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </div>
          <div className="drum-pad" id="key-W">
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </div>
          <div className="drum-pad" id="key-E">
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E{" "}
          </div>
          <div className="drum-pad" id="key-A">
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </div>
          <div className="drum-pad" id="key-S">
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </div>
          <div className="drum-pad" id="key-D">
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </div>
          <div className="drum-pad" id="key-Z">
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </div>
          <div className="drum-pad" id="key-X">
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </div>
          <div className="drum-pad" id="key-C">
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
