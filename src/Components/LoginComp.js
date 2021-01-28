import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

function loginComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const showingModal = () => setShow(true);

  const closingModal = () => setShow(false);

  return (
    <div>
      <Button onClick={showingModal} className="btn-danger">
        Sign In
      </Button>
      <Modal show={show} onHide={closingModal}>
        <Modal.Body>
          <p className="sign-header">Sign In</p>
          <form onSubmit={() => console.log("submit")}>
            <div className="form-group">
              <input
                type="text"
                class="form-control"
                name="Name"
                placeholder="Name"
              />
            </div>
            <div className="form-group" style={{paddingBottom: "18px"}}>
              <input
                type="password"
                class="form-control"
                name="Password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <Button className="btn-danger btn-block" onClick={closingModal}>
                Sign In
              </Button>
            </div>
          </form>
          <p>Don't Have an account ? Click Here</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default loginComponent;
