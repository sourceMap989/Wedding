import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaGoogle />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
