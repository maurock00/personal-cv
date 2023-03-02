import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Awards from "./Awards";
import About from "./About";
import Certifications from "./Certifications";

function CustomTabPane(props) {
  const [activeTabe, setActiveTab] = useState("1");

  function toggle(tab) {
    if (activeTabe !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <div className="customTabPane">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            SKILLS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            EXPERIENCE
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            EDUCATION
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            AWARDS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            CERTIFICATIONS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTabe === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            ABOUT
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTabe}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <Skills />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Experience />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col>
              <Education />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col>
              <Awards />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="7">
          <Row>
            <Col>
              <Certifications />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Col>
              <About />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default CustomTabPane;
