/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

function loginComponent() {
  const [show, setShow] = useState(false);

  const showingModal = () => setShow(true);

  const closingModal = () => setShow(false);

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

    alert(`login berhasil`);
  };

  return (
    <div>
      <Button
        onClick={showingModal}
        variant="danger"
        style={{ width: "190px", height: "50px" }}
      >
        Sign In
      </Button>

      <Modal show={show} onHide={closingModal}>
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
              <Button variant="danger" block>
                Sign In
              </Button>
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
