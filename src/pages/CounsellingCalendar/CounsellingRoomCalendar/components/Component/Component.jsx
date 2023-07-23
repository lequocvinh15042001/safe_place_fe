/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./styleComponent.css";

export const Component = ({ className, elementClassName, text = "1", text1 = "Podcast name 01", groupClassName }) => {
  return (
    <div className={`component ${className}`}>
      <div className="speaker-s-name">Speaker&#39;s name</div>
      <div className="element">01h50</div>
      <div className="mar">Mar 15, 2023</div>
      <div className={`text-wrapper ${elementClassName}`}>{text}</div>
      <div className="podcast-name">{text1}</div>
      <div className={`group ${groupClassName}`} />
    </div>
  );
};

Component.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
