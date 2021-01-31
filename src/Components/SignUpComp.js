import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { AppContext } from "../Context/globalContext";
import "../App.css";
import { useHistory } from "react-router-dom";

function SignUp() {
  let history = useHistory();

  const [show, setShow] = useState(false);

  const showingModalSignUp = () => setShow(true);

  const closingModalSignUp = () => setShow(false);

  const [state, dispatch] = useContext(AppContext);

  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = signUpFormData;

  const onChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`Success, welcome ${name}`);
    dispatch({
      type: "LOGIN_SUCCESS",
    });
    history.push("/home");
  };

  return (
    <div>
      <button
        onClick={showingModalSignUp}
        className="btn btn-danger"
        style={{ width: "190px", height: "50px" }}
      >
        Sign Up
      </button>

      <Modal show={show} onHide={closingModalSignUp}>
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
            <div className="form-group">
              <input
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "18px" }}>
              <input
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                type="text"
                class="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-danger"
                style={{ display: "block", width: "100%" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p>Already Have an account ? Click Here</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;
