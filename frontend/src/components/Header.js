import React from "react";
import logo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <div className="header-item">
        <FontAwesomeIcon icon={faUserCircle} />
        <NavLink to="/sign-in">
          <p>Sign In</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
