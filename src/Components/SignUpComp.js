import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import LoginComponent from "../Components/LoginComp";
import "../App.css";

function SignUp() {
  const [show, setShow] = useState(false);

  const showingModal = () => setShow(true);

  const closingModal = () => setShow(false);

  return (
    <div>
      <Button
        onClick={showingModal}
        variant="danger"
        style={{ width: "190px", height: "50px" }}
      >
        Sign Up
      </Button>
      <Modal show={show} onHide={closingModal}>
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
              <Button className="btn-danger btn-block">Sign Up</Button>
            </div>
          </form>
          <p>Already Have an account ? Click Here</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;
