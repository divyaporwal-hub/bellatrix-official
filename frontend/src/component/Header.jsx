import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  let localData = JSON.parse(localStorage.getItem("userInfoBltx"));
  console.log(localData);

  return (
    <section>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed-top">
        <NavLink className="navbar-brand" to="/">
          <div
            style={{
              fontSize: "35px",
              lineHeight: "2",
              fontWeight: "550",
              fontFamily: "Montserrat, sans-serif",
              paddingLeft: "20px",
              color: "white",
            }}
          >
            BELLATRIX
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav topnav-right">
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/blog">
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/resource"
              >
                RESOURCE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/career"
              >
                CAREER
              </NavLink>
            </li>
            <li className="nav-item">
              {localData ? (
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/logout"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
