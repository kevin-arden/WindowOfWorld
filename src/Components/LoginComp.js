/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { AppContext } from "../Context/globalContext";
import "../App.css";
import { useHistory } from "react-router-dom";

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

    if (email === "admin@gmail.com" && password === "12345678") {
      alert(`Success, welcome ${email}`);
      dispatch({
        type: "LOGIN_ADMIN",
      });
      history.push("/transaction");
    } else if (email === "user@gmail.com" && password === "12345678") {
      alert(`Success, welcome ${email}`);
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      history.push("/home");
    } else {
      alert(`Failed`);
      dispatch({
        type: "LOGOUT",
      });
    }
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
          <p className="sign-header">
            Sign In {state.isLogin ? "Sudah Login" : "Belum login"}
          </p>
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
          <p>Don't Have an account ? Click Here</p>
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
