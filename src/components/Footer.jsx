//React
import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__info">
        roblesb.maria@gmail.com | 2024 |{" "}
        <NavLink
          to="/about#contact"
          className="footer__info footer__info--link"
        >
          Contact me
        </NavLink>
      </p>
    </div>
  );
}

export default Footer;
