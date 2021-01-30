import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import profilePic from "../Image/ProfilePic.png";
import logoPic from "../Image/IconMini.png";
import "../sideBar.css";

const Sidebar = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push(`/home`);
  };
  return (
    <Nav
      className="col-md-12 d-none d-md-block sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <img
          className="logos"
          src={logoPic}
          alt=""
          onClick={() => goToHome()}
        />
      </Nav.Item>
      <Nav.Item>
        <img className="foto" src={profilePic} alt="" />
        <p className="user-name fotoName">User Name</p>
      </Nav.Item>
      <Nav.Item>
        <p className="subStat">Not Subscribed Yet</p>
      </Nav.Item>
      <hr />
      <Nav.Item>
        <Nav.Link to="/profile" as={Link}>
          <p className="menus">Profile</p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/subscribe" as={Link}>
          <p className="menus">Subscribe</p>
        </Nav.Link>
      </Nav.Item>
      <hr />
      <Nav.Item>
        <Nav.Link to="/" as={Link}>
          <p className="menus">Logout</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Sidebar;
