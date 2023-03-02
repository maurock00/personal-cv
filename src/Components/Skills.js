import React from "react";
import { Progress, Row, Col } from "reactstrap";
import * as Constants from "./../Constants";
import { v4 } from "uuid";

function Skills() {
  function renderProgressOnSkills(skills) {
    return skills.map((element) => (
      <Row key={v4()}>
        <Col xs={3}>{element.language}</Col>
        <Col xs={9}>
          <Progress value={element.progress}>{element.progress}</Progress>
        </Col>
      </Row>
    ));
  }

  function renderFrameworks(fs) {
    return fs.map((element) => {
      return (
        <Row key={v4()}>
          <Col xs={3}>{element.language}</Col>
          <Col xs={9}>{element.frameworks}</Col>
        </Row>
      );
    });
  }

  function renderGeneric(arr) {
    return (
      <Row>
        <Col>{arr.join(", ")}</Col>
      </Row>
    );
  }

  return (
    <div className="skills mb-5">
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Programming Languages </h3>
            </Col>
          </Row>
          {renderProgressOnSkills(Constants.ProgrammingSkills)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> MarkUp Languages </h3>
            </Col>
          </Row>
          {renderProgressOnSkills(Constants.MarkUpSkills)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Frameworks </h3>
            </Col>
          </Row>
          {renderFrameworks(Constants.Frameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Test-Frameworks </h3>
            </Col>
          </Row>
          {renderFrameworks(Constants.TestFrameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Databases </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Databases)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Caches </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Caches)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Cloud </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Cloud)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Explored Tech </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Tech)}
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
