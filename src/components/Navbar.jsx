import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="#">
              LOGO
            </a>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/checkout" className="nav-link">
                  Checkout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/doctor" className="nav-link">
                  Doctor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/patient" className="nav-link">
                  Patient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="btn btn-success">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
