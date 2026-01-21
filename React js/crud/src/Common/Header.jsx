import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔴 clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    localStorage.setItem("isLoggedIn", "false");

    // 🔁 redirect to login
    navigate("/");
  };
  // const user = JSON.parse(localStorage.getItem("loggedUser"));

  const [userName, setUserName] = useState('');

  // Check login state on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/"); // redirect to login if not logged in
    }
     else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.name) setUserName(user.name);
    }
  }, [navigate]);


  return (
    <div>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center dark-background">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <NavLink to="/" className="logo d-flex align-items-center">
              <h1 className="sitename">Firebase CRUD</h1>
            </NavLink>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <NavLink to="/home" className="active">
                    Home
                  </NavLink>
                </li>

                <li className="dropdown">
                  <a href="#">
                    <span>Hotel</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li><NavLink to="/add">Add Data</NavLink></li>
                    <li><NavLink to="/view">Manage Data</NavLink></li>
                  </ul>
                </li>
                <div className="ms-auto d-none d-lg-flex align-items-center">
                  {/* Hello user + Logout */}
                  {localStorage.getItem("isLoggedIn") === "true" && (
                    <>
                      <NavLink to="/dashboard" className="me-3 text-decoration-none">
                        Hello, {userName}
                      </NavLink>
                      <button
                        className="btn btn-danger py-2 px-3"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>

                {/* <li className="ms-auto">
                  <NavLink  className="text-white fs-5 me-3 text-decoration-none">
                    Hello,{username}
                  </NavLink>
                </li>

                
                <li>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    Log-Out
                  </button>
                </li> */}
              </ul>

              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
