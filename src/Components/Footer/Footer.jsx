import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <small className="footer">Thank you for visiting our website</small>

      <a className="footer" href="/">
        terms
      </a>
      <a className="footer" href="/">
        privacy
      </a>
      <a className="footer" href="/fb">
        Facebook
      </a>
    </div>
  );
};

export default Footer;
