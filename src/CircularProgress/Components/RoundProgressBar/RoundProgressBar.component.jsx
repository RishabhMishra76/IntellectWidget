import React from "react";
import classes from "./RoundProgressBar.module.css";

function RoundProgressBar(props) {
  const size = props.size;
  const radius = (props.size - props.strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.value) / props.max;

  return (
    <>
      <svg width={props.size} height={props.size} viewBox={viewBox}>
        <circle
          fill={"#466D7C"}
          // stroke={"#325D6E"}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
        />
        <circle
          fill={"#B6F0F4"}
          // stroke = {'#325D6E'}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius / 1.5}
          strokeWidth={`${props.strokeWidth / 2}px`}
        />
        <circle
          fill={"none"}
          stroke={"#FFFFFF"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius}
          strokeWidth={`${props.strokeWidth}px`}
          transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`}
        />
        <circle
          className={classes.svgCircle}
          cx={props.size / 2}
          cy={props.size / 2}
          r={radius * 2}
        />
        <text
          dy="0.7rem"
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={"#FFFFFF"}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "Rubik-Light"
          }}
        >
          {`${props.value}`}
        </text>
      </svg>
    </>
  );
}

export default RoundProgressBar;
