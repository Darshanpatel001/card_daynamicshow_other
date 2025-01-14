import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <a class="navbar-brand" href="#">
        BUILDSCAP
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to={"/"} class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/about"} class="nav-link" href="#">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/product"} class="nav-link" href="#">
             product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
