import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "./../Constants";
import { v4 } from "uuid";

function Experience() {
  return (
    <div className="experience">
      {Constants.ExperienceObject.map((obj) => (
        <Row key={v4()} className="p-3 mt-5 mb-5">
          <Col>
            <Row>
              <Col>
                <h3>{obj.company}</h3>
              </Col>
              <Col>
                <h4> {obj.role} </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <img
                      src={obj.imageSrc}
                      alt="companyImage"
                      style={{
                        width: "30%",
                        marginTop: "2%",
                        marginBottom: "2%",
                        borderRadius: "5%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>{obj.date}</Col>
                </Row>
              </Col>
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

export default Experience;
