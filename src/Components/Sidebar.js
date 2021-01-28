import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import profilePic from "../Image/ProfilePic.png";
import logoPic from "../Image/Icon.png";


const Sidebar = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push(`/home`);
    }
  return (
    <Nav
      className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <img
          style={{ height: "150px", cursor: "pointer" }}
          src={logoPic}
          alt=""
          onClick={() => goToHome()}
        />
      </Nav.Item>
      <Nav.Item>
        <img src={profilePic} alt="" />
        <p className="user-name">Siapa tuh</p>
      </Nav.Item>
      <Nav.Item>
          <p>Belum Subscribe</p>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/subscribe" as={Link}>
          Subscribe
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/profile" as={Link}>
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/" as={Link}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Sidebar;
