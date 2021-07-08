import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Logo2 from "../assets/shared/desktop/logo-light.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className="foot_main">
<div className="foot">
      <div className="footer_banner">
        <div className="footer_banner_txt">
          <h1>Let’s talk about your project</h1>
          <p>
            Read to take it to the next level? contact us today and find out how
            our experiance can help your bussiness grow.
          </p>
        </div>
        <div className="footer_banner_btn">
          <button>get in touch</button>
        </div>
      </div>
      <div className="footer">
        <div className="navbar_logo">
          <NavLink exact to="/" className="nav">
            <img src={Logo2} alt="" />
          </NavLink>
        </div>
        <ul className="list2">
          <li>
            <NavLink exact to="/company" className="btn2">
              our company
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/location" className="btn2">
              location
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="btn2">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer_last">
        <div className="footer_last1">
          <h2>Designo Central Office</h2>
          <h3>3886 Wellington Street</h3>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="footer_last2">
          <h2>Contact Us (Central Office)</h2>
          <h3>P : +1 253-863-8967</h3>
          <p>M : contact@designo.co</p>
        </div>
        <div className="footer_last3">
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Footer;
