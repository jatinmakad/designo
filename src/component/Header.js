import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo-dark.png";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [toogle, setToogle] = useState(false);
  const hand = () => {
    setToogle(!toogle);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <NavLink exact to="/home" className="nav">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <ul className={!toogle ? "hide" : "list"}>
          <li>
            <NavLink
              exact
              to="/company"
              className="btn"
              activeClassName="nav-active"
            >
              our company
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/location"
              className="btn"
              activeClassName="nav-active"
            >
              location
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              className="btn"
              activeClassName="nav-active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={hand}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
}

export default Header;
