import React from "react";
import logo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../actions/auth.actions";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.token != null);

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout());
    navigate("/home");
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <div className="header-item">
        <FontAwesomeIcon icon={faUserCircle} />
        {isLoggedIn ? (
          // Affiche "Sign Out" si l'utilisateur est connecté
          <NavLink to="/">
            <p onClick={handleLogout}>Sign Out</p>
          </NavLink>
        ) : (
          // Sinon, affiche "Sign In"
          <NavLink to="/sign-in">
            <p>Sign In</p>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
