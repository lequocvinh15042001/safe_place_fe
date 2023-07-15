import React from "react";
import "./style.css";

export const Signup = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="text-wrapper">What’s your email?</div>
        <div className="text-wrapper-2">Where are you?</div>
        <p className="p">What’s your date of birth?</p>
        <p className="text-wrapper-3">What’s should we call you?</p>
        <div className="text-wrapper-4">What’s your gender?</div>
        <div className="text-wrapper-5">Male</div>
        <div className="text-wrapper-6">Female</div>
        <div className="text-wrapper-7">Non-binary</div>
        <div className="text-wrapper-8">Other</div>
        <div className="text-wrapper-9">Prefer not to say</div>
        <div className="overlap">
          <div className="text-wrapper-10">Enter your email.</div>
          <div className="rectangle" />
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-11">Enter your province.</div>
          <div className="rectangle" />
        </div>
        <div className="overlap-2">
          <p className="text-wrapper-11">Enter your date of birth.</p>
          <div className="rectangle" />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-10">Enter a profile name</div>
          <div className="rectangle" />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-12">Create a password.</div>
          <div className="rectangle-2" />
          <img
            className="group"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/6eb28fc59bc7507db1a89bbd1ae883b4/img/group-450@2x.png"
          />
        </div>
        <div className="text-wrapper-13">Create a password</div>
        <p className="have-an-account-log">
          <span className="span">Have an account?</span>
          <span className="text-wrapper-14"> Log in</span>
        </p>
        <div className="overlap-4">
          <div className="text-wrapper-15">Sign Up</div>
          <div className="rectangle-3" />
        </div>
        <h1 className="h-1">Log in to SafePlace Vietnam</h1>
        <div className="text-wrapper-16">Use phone number instead.</div>
        <p className="text-wrapper-17">This appears on your profile.</p>
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
      </div>
    </div>
  );
};
