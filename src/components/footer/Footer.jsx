import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Abu</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {" "}
          <a
            href="https://facebook.com/abubaker.iqbal.77"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/the_abu"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/AbubakerIqbal5"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Abubaker Iqbal. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
