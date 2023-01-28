import React, { useState } from "react";
import RoundProgressBar from "./Components/RoundProgressBar/RoundProgressBar.component";
import WifiSignal from "./Components/WifiSignal/WifiSignal.component";
import classes from "./circularProgress.module.css";

function CircularProgress() {
  const [percentage, setPercentage] = useState(0);

  const handleChangeEvent = (e) => {
    setPercentage(e.target.value);
  };
  if (document.getElementById("myinput")) {
    document.getElementById("myinput").oninput = function () {
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, #6CD9E3 0%, #6CD9E3 " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
    };
  }

  return (
    <>
      <div>
        <div className={classes.container}>
          <div className={classes.borderCircular}>
            <RoundProgressBar
              value={percentage}
              stroke={"#b9332f"}
              max={10}
              size={200}
              strokeWidth={5}
            />
          </div>
          <div>
            <input
              id="myinput"
              type="range"
              min="0"
              max="10"
              step="1"
              value={percentage}
              onChange={(e) => handleChangeEvent(e)}
              className={classes.slider}
            />
          </div>
          <WifiSignal></WifiSignal>
        </div>
      </div>
    </>
  );
}

export default CircularProgress;
