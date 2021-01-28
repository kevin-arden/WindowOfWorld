import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import '../App.css'

function SignUp(){
    const [show, setShow] = useState(false)

    const showingModal = () => setShow(true)
    
    const closingModal = () => setShow(false)

    return (
      <div>
        <Button onClick={showingModal}>Sign Up</Button>

        <Modal show={show} onHide={closingModal}>
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Body>
            <input
              type="text"
              class="form-control"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="text"
              class="form-control"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closingModal}>Sign Up</Button>
            <br/>
            <p>Already Have an account ? Click Here</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default SignUp;