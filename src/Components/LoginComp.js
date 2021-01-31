/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { AppContext } from "../Context/globalContext";
import "../App.css";
import { useHistory } from "react-router-dom";
import { user } from "../Data/UserData";

function loginComponent() {
  let history = useHistory();

  const [show, setShow] = useState(false);

  const showingModalLogin = () => setShow(true);

  const closingModalLogin = () => setShow(false);

  const [state, dispatch] = useContext(AppContext);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const onChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    user.map((user) => {
      if (
        email === user.email &&
        email === "admin@gmail.com" &&
        password === user.password
      ) {
        alert(`Success, welcome ${email}`);
        dispatch({
          type: "LOGIN_ADMIN",
        });
        console.log(email);
        history.push("/transaction");
      } else if (email === user.email && password === user.password) {
        alert(`Success, welcome ${email}`);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { userLogin: user },
        });
        history.push("/home");
      }
    });
  };

  return (
    <div>
      <button
        onClick={showingModalLogin}
        className="btn btn-danger"
        style={{ width: "190px", height: "50px" }}
      >
        Sign In
      </button>

      <Modal show={show} onHide={closingModalLogin}>
        <Modal.Body>
          <p className="sign-header">Sign In</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "18px" }}>
              <input
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-danger"
                style={{ display: "block", width: "100%" }}
              >
                Sign In
              </button>
            </div>
          </form>
          <p>Don't Have an account ? </p> <a onClick={closingModalLogin}></a>
        </Modal.Body>
      </Modal>
      {/* <div>
        <pre>
          {JSON.stringify(loginFormData, null, 2)}
        </pre>
      </div> */}
    </div>
  );
}

export default loginComponent;
