import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "./../Constants";
import { v4 } from "uuid";

function Awards() {
  return (
    <div className="education">
      {Constants.AwardsObject.map((obj) => (
        <Row key={v4()} className="p-3 mt-5 mb-5">
          <Col>
            <Row>
              <Col>
                <h3>{obj.college}</h3>
              </Col>
              <Col>
                <h4> {obj.role} </h4>
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

export default Awards;
