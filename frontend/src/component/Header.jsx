import React from 'react';
import "../styles/header.css";

function Header() {
  return (
    <section>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed-top">
        <a className="navbar-brand" href="#">
          <div style={{ fontSize: '35px', lineHeight: '2', fontWeight: '550', fontFamily: 'Montserrat, sans-serif', paddingLeft: '40px' }}>
            BELLATRIX
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav topnav-right">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="content.html">CONTENT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">LOGIN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
