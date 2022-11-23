import React, { useState } from "react";
import classes from "./WifiSignal.module.css";

function WifiSignal() {
  const [percentage, setPercentage] = useState(1);

  const handleChangeEvent = (e, ind) => {
    e.preventDefault();
    setPercentage(ind);
  };
  return (
    <>
      <div className={classes.wifiContainer}>
        <div className={classes.connectivity}>
          {" "}
          {percentage > 3 ? "High" : "Low"}
        </div>
        <div
          className={`${percentage === 5 ? classes.box1White : classes.box1}`}
          onClick={(e) => handleChangeEvent(e, 5)}
        ></div>
        <div
          className={`${percentage >= 4 ? classes.box2White : classes.box2}`}
          onClick={(e) => handleChangeEvent(e, 4)}
        ></div>
        <div
          className={`${percentage >= 3 ? classes.box3White : classes.box3}`}
          onClick={(e) => handleChangeEvent(e, 3)}
        ></div>
        <div
          className={`${percentage >= 2 ? classes.box4White : classes.box4}`}
          onClick={(e) => handleChangeEvent(e, 2)}
        ></div>
        <div
          className={`${percentage >= 1 ? classes.box5White : classes.box5}`}
          onClick={(e) => handleChangeEvent(e, 1)}
        ></div>
      </div>
    </>
  );
}

export default WifiSignal;
