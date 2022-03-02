import React from "react";
import telegram from "../../images/telegram.svg";
import github from "../../images/github(1).svg";
import linkdin from "../../images/linkedin(1).svg";
import instagram from "../../images/instagram(1).svg";
import twitter from "../../images/twitter.png";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &#169; 2021. Alexandra. All rights reserved.
        </p>
        <ul className="footer__links">
          <li className="footer__social-icons">
            <a href="https://t.me/sashystikk">
              <img
                className="footer__image"
                src={telegram}
                alt="telegram-icon"
              />
            </a>
          </li>
          <li className="footer__social-icons">
            <a href="https://github.com/alexandra-stepanova">
              <img
                className="footer__image margin-left"
                src={github}
                alt="github-icon"
              />
            </a>
          </li>
          <li className="footer__social-icons">
            <a href="https://www.linkedin.com/in/alexandra-stepanova-6a716193">
              <img
                className="footer__image margin-left"
                src={linkdin}
                alt="linkedin-icon"
              />
            </a>
          </li>
          <li className="footer__social-icons">
            <a href="https://www.instagram.com/sashystikk">
              <img
                className="footer__image margin-left"
                src={instagram}
                alt="instagram-icon"
              />
            </a>
          </li>
          <li className="footer__social-icons">
            <a href="https://twitter.com/AlexStep89">
              <img
                className="footer__image margin-left"
                src={twitter}
                alt="twitter-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
