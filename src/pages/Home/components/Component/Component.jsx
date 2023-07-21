/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import "./style.css";

import React from "react";

export const Component = ({ className, groupClassName }) => {
  return (
    <div className={`component ${className}`}>
      <div className={`group ${groupClassName}`} />
      <div className="speaker-s-name">Speaker&#39;s name</div>
      <div className="element">01h50</div>
      <div className="podcast-name">Podcast name 01</div>
      <img
        className="vector"
        alt="Vector"
        src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector-15.svg"
      />
    </div>
  );
};
