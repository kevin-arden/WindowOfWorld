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
      <Button onClick={showingModal}>Sign In</Button>
      <Modal show={show} onHide={closingModal}>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Body>
          <input
            type="text"
            class="form-control"
            name="Name"
            id="Name"
            placeholder="Name"
          />
          <input
            type="password"
            class="form-control"
            name="Password"
            id="Password"
            placeholder="Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closingModal}>Sign In</Button>
          <br/>
          <p>Don't Have an account ? Click Here</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default loginComponent