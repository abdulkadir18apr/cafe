import React from "react";

import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-center">
        <h3>Cafe Corner</h3>
        <p>Building a Hive of Cafe Experience</p>
      </div>
      <div className="navbar-profile">
        <FontAwesomeIcon icon="fa-solid fa-moon icon" />
        <NavLink to={`/home`}>
          <img src="https://picsum.photos/200" alt="profile" srcset="" />
        </NavLink>
      </div>
    </div>
  );
}
