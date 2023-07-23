/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./styleComponentWrapper.css";

export const ComponentWrapperCalendar = ({
  className,
  clarityLibrary = "/img/clarity-library-solid.svg",
  materialSymbolsAdd = "/img/material-symbols-add.svg",
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <div className="overlap-group-2">
        <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-home.svg" />
        <img className="img" alt="Material symbols" src="/img/material-symbols-search.svg" />
        <img className="clarity-library" alt="Clarity library" src={clarityLibrary} />
        <img className="material-symbols-add" alt="Material symbols add" src={materialSymbolsAdd} />
        <div className="rectangle" />
        <div className="my-courses">My courses</div>
        <div className="search">Search</div>
        <div className="home">Home</div>
      </div>
    </div>
  );
};

ComponentWrapperCalendar.propTypes = {
  clarityLibrary: PropTypes.string,
  materialSymbolsAdd: PropTypes.string,
};
