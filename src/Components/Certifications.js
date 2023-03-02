import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "./../Constants";
import { v4 } from "uuid";

function Certifications() {
  return (
    <div className="education">
      {Constants.CertsObj.map((obj) => (
        <Row key={v4()} className="p-3 mt-5 mb-5">
          <Col>
            <Row>
              <Col>
                <h3>{obj.college}</h3>
              </Col>
              <Col>
                <a href={obj.link} target="_blank">
                  <h4> {obj.role} </h4>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>{obj.date}</Col>
              <Col>
                <h5>{obj.desc}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Certifications;
