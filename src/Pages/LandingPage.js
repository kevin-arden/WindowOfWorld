import React from "react";
import LoginComponent from "../Components/LoginComp";
import SignUp from "../Components/SignUpComp";
import vector from "../Image/Vector1.png";
import logoPic from "../Image/Icon.png";

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-4 p-4">
            <img src={logoPic} alt=""/>
            <p style={{fontSize: '16px'}}>
              Sign-up now and subscribe to enjoy all the cool and latest books -
              The best book rental service provider in Indonesia
            </p>

            <LoginComponent />
            <SignUp />
          </div>
          <div className="col-md-1">
            <img src={vector} alt="not found" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
