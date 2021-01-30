import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";

function SignUp() {
  const [show, setShow] = useState(false);

  const showingModalSignUp = () => setShow(true);

  const closingModalSignUp = () => setShow(false);

  
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
          <form onSubmit={() => console.log("submit")}>
            <div className="form-group">
              <input
                type="text"
                class="form-control"
                name="Email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                class="form-control"
                name="Password"
                placeholder="Password"
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "18px" }}>
              <input
                type="text"
                class="form-control"
                name="fullName"
                id="fullName"
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
