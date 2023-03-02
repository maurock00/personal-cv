import React from "react";
import ProfileImage from "./ProfileImage";
import { Row, Col } from "reactstrap";
import ProfileDetails from "./ProfileDetails";
import { Name } from "../Constants";
import SocialFlow from "./SocialMedia";

function Profile() {
  return (
    <div className="profile">
      <Row>
        <Col>
          <ProfileImage />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="name"> {Name} </h1>
        </Col>
      </Row>
      <Row className="p-5">
        <Col>
          <ProfileDetails />
        </Col>
      </Row>
      <Row>
        <Col>
          <SocialFlow />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
