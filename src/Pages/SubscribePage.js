import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Wow from "../Image/Wow.png";
import "../SubscribePage.css";

const SubscribePage = () => {
  const [loginFormData, setLoginFormData] = useState({
    accNumber: "",
    proofOfTransfer: "",
  });

  const { accNumber, proofOfTransfer } = loginFormData;

  const onChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Success`);
  };

  return (
    <div className="App-header">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-2"></div>

        <div style={{ alignItems: "center" }} className="col-md-6 App-header">
          <p className="subscribe-header">Premium</p>
          <p className="subscribe-text">
            Pay now and access all the latest books from{" "}
            <img src={Wow} alt="" />{" "}
          </p>
          <p className="subscribe-number">
            <img src={Wow} alt="" />: 0981312323
          </p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
              
                name="accNumber"
                value={accNumber}
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control form-sub"
                placeholder="Input your account number"
              />
            </div>
            <div className="form-group">
              <input
                name="proofOfTransfer"
                value={proofOfTransfer}
                onChange={(e) => onChange(e)}
                type="file"
                id="actual-btn"
                className="form-control"
                placeholder="Attach proof of transfer"
                hidden
              />
              <label for="actual-btn">
                Attache proof of transfer{" "}
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 20 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 30C4.83002 30 0.625 25.795 0.625 20.625V7.5C0.625 6.80878 1.18507 6.25008 1.87492 6.25008C2.565 6.25008 3.12508 6.80878 3.12508 7.5V20.625C3.12508 24.4151 6.2088 27.4999 10 27.4999C13.7912 27.4999 16.8749 24.4151 16.8749 20.625V6.87492C16.8749 4.46251 14.9125 2.50008 12.5001 2.50008C10.0874 2.50008 8.125 4.46251 8.125 6.87492V19.3751C8.125 20.4087 8.96614 21.2501 10 21.2501C11.0339 21.2501 11.875 20.4087 11.875 19.3751V7.5C11.875 6.80878 12.4351 6.25008 13.1249 6.25008C13.815 6.25008 14.3751 6.80878 14.3751 7.5V19.3751C14.3751 21.7875 12.4124 23.7499 10 23.7499C7.58759 23.7499 5.62492 21.7875 5.62492 19.3751V6.87492C5.62492 3.0851 8.70865 0 12.5001 0C16.2913 0 19.375 3.0851 19.375 6.87492V20.625C19.375 25.795 15.17 30 10 30Z"
                    fill="#D60000"
                  />
                </svg>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-danger btn-block">Send</button>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default SubscribePage;
