import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/the_abu"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/abu-baker-iqbal-9112001"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/AbuIqbal123"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
