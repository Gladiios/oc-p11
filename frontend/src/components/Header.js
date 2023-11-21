import React from "react";
import logo from "../img/argentBankLogo.png";
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
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <div className="header-item">
        <FontAwesomeIcon icon={faUserCircle} />
        {isLoggedIn ? (
          // Utilisation d'un fragment pour envelopper les éléments adjacents
          <>
            <p>{username}</p>
            <NavLink to="/">
              <p onClick={handleLogout}>Sign Out</p>
            </NavLink>
          </>
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
