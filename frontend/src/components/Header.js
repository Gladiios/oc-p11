import React from "react";
import logo from "../img/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/auth.actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.token != null);
  const username = useSelector((state) => state.auth.userProfile?.userName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/">
        <a>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
      </NavLink>
      <div>
        <a className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="sign-logo" />
          {isLoggedIn ? (
            // Utilisation d'un fragment pour envelopper les éléments adjacents
            <>
              <NavLink to="/profile">
                <p className="username">{username}</p>
              </NavLink>
              <NavLink to="/">
                <p onClick={handleLogout}>Sign Out</p>
              </NavLink>
            </>
          ) : (
            // Sinon, affiche "Sign In"
            <NavLink to="/sign-in">
              <p className="sign">Sign In</p>
            </NavLink>
          )}
        </a>
      </div>
    </nav>
  );
};
export default Header;
