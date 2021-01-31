import React from "react";
import LoginComponent from "../../Components/LoginComp";
import SignUp from "../../Components/SignUpComp";
import vector from "../../Image/Vector1.png";
import logoPic from "../../Image/Icon.png";
import "./LandingPage.css";

const LandingPage = () => {

  

  return (
    <div>
      <div className="row">
        <div className="col-md-4 p-4 box1">
          <img src={logoPic} alt="" />
          <p className="text">
            Sign-up now and subscribe to enjoy all the cool and latest books -
            The best book rental service provider in Indonesia
          </p>
          <p className="button">
            <p style={{ marginRight: "31px" }}>
              <SignUp />
            </p>
            <p>
              <LoginComponent />
            </p>
          </p>
        </div>
        <div className="col-md-1">
          <img className="pic" src={vector} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
