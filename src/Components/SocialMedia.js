import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithubAlt } from "react-icons/fa";

export default function SocialFlow() {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/mauricio-morales-segovia-ec/"
        className="sm-icon"
      >
        <h2>
          <BsLinkedin />
        </h2>
      </a>
      <a href="https://www.instagram.com/maurock00/" className="sm-icon">
        <h2>
          <RxInstagramLogo />
        </h2>
      </a>
      <a href="https://github.com/maurock00" className="sm-icon">
        <h2>
          <FaGithubAlt />
        </h2>
      </a>
    </div>
  );
}
