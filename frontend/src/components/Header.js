import React from "react";
import logo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Argent Bank Logo" />
      <div className="header-item">
        <FontAwesomeIcon icon={faUserCircle} />
        <p>Sign In</p>
      </div>
    </header>
  );
};

export default Header;
