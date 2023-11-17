import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@savarnayamhealthcenter.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on our social media channels for updates:</p>
          <div className="social-icons">
            <a href="facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="x.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="instagram.com" target="_blank" rel="instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; 2023 Savarnayam Health Center. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
