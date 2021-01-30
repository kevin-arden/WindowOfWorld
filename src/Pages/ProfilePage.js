import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Profile.css";
import mail from "../Image/mail.png";
import gender from "../Image/gender.png";
import phone from "../Image/phone.png";
import map from "../Image/map.png";
import profilepic from "../Image/profilepiclarge.png";
import { Button } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <div className="App-header">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h1 className="profile">Profile</h1>
          <div className="box">
            <div className="left-side">
              <div className="item" style={{ paddingTop: "36px" }}>
                <div>
                  <img src={mail} alt="" />
                </div>
                <div className="textInner">
                  <p className="upperText">egigans@gmail.com</p>
                  <p className="lowerText">Email</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src={gender} alt="" />
                </div>

                <div className="textInner">
                  <p className="upperText">Male</p>
                  <p className="lowerText">Gender</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src={phone} alt="" />
                </div>

                <div className="textInner">
                  <p className="upperText">0812-8623-8911</p>
                  <p className="lowerText">Mobile Phone</p>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src={map} alt="" />
                </div>

                <div className="textInner">
                  <p className="upperText">
                    Perumahan Permata Bintaro Residence C-3
                  </p>
                  <p className="lowerText">Address</p>
                </div>
              </div>
            </div>

            <div className="right-side">
              <img src={profilepic} alt="" />
              <div className="editButton">
                <Button variant="danger" block>
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          <p className="profile">My List Book</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
