import React from "react";
import "./footer.css"
import {
  UilInstagram,
  UilDribbble,
  UilGithubAlt,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Faraaz</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilInstagram />
          </a>

          <a
            href="https://dribbble.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilDribbble />
          </a>

          <a
            href="https://github.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilGithubAlt />
          </a>
        </div>

        <span className="footer__copy">&#169; Mohamedfaraaz. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
