import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="text-wrapper">Email or Username</div>
        <div className="overlap">
          <div className="text-wrapper-2">Email or Username</div>
          <div className="rectangle" />
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-3">Password</div>
          <div className="rectangle-2" />
          <img
            className="group"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/d3d46194321283fc3c166652182e6dcb/img/group-450@2x.png"
          />
        </div>
        <div className="text-wrapper-4">Remember me</div>
        <div className="text-wrapper-5">Password</div>
        <div className="text-wrapper-6">Forgot your password?</div>
        <div className="overlap-2">
          <div className="rectangle-3" />
          <div className="text-wrapper-7">Log In</div>
        </div>
        <p className="don-t-have-acount">
          <span className="span">Don’t have acount?</span>
          <span className="text-wrapper-8">&nbsp;&nbsp;Sign up for SafePlace Vietnam </span>
        </p>
        <div className="group-wrapper">
          <div className="group-2" />
        </div>
        <h1 className="h-1">Log in to SafePlace Vietnam</h1>
      </div>
    </div>
  );
};
