import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        {/* ADD CODE TO CALL THE SEARCHBOX COMPONENT WITH THE CALLBACK PASSED IN AS INPUT ARGUMENT */}
      </div>
    </nav>
  );
}
export default Nav;
