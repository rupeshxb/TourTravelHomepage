import React from "react";
import logo from "./img/logo-sample.png";
import "./style.css";

const NavbarComponent = () => {
  return (
    <div className="container">
      <div className="navbar-all">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Bookings</a>
            </li>
            <li>
              <a href="#">Activities</a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
            </li>
          </ul>
          <div className="login-signup">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li className="sign-up">
                <a href="#">Sign up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
