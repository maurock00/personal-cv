import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "../Constants";
import { v4 } from "uuid";

function About() {
  return (
    <div className="about mt-5 mb-5 pl-5 pr-5">
      <h3> About Me</h3>
      <p>
        {" "}
        Systems engineer passionate about the architecture and development of
        high-quality software, with extensive experience in digital payments
        supported by cloud infrastructure. I have managed both frontend and
        backend development teams. He also has knowledge in process management
        and agile methodologies for product development.{" "}
      </p>
      <br></br>
      <h3>Work References</h3>
      <li className="mt-2">
        {" "}
        Edison Pilatasig, Politécnica Salesiana, Telecommunications Engineer of
        A&S department Huawei Technologies Co.,Ltd. Ecuador | +593981325460
      </li>
      <li className="mt-2">
        {" "}
        Franciso Izurieta, Systems Engineer. Politécnica Nacional, Kushki IT
        Architect | +593978871870
      </li>
      <li className="mt-2">
        {" "}
        Alex Suquillo, Electronic Engineer. ESPE, Kushki Applications Architect
        | +593978871870
      </li>
      <li className="mt-2">
        {" "}
        Patricio Moreano, Systems Engineer. USFQ, Kushki Development Manager |
        +593984506085
      </li>
    </div>
  );
}

export default About;
