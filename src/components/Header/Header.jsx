import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import header_logo from "./../../assets/header_logo.png";
import { FaHome, FaCompass, FaBell, FaUser } from "react-icons/fa"; // Icons
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobileView();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobileView);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`hd-header ${scrolled ? "hd-header-scrolled" : ""} ${
          isMobile ? "hd-header-mobile" : "hd-header-desktop"
        }`}
      >
        <div className="hd-header-container">
          <div className="hd-logo-section">
            <img src={header_logo} alt="Zynq Logo" className="hd-logo-image" />
            <h1 className="hd-logo-title">Zynq</h1>
          </div>

          {!isMobile && (
            <nav className={`hd-navigation ${menuOpen ? "hd-navigation-open" : ""}`}>
              <ul className="hd-nav-list">
                <li className="hd-nav-item">
                  <NavLink
                    to="/"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hd-nav-item">
                  <NavLink
                    to="/explore"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="hd-nav-item">
                  <NavLink
                    to="/notifications"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    Notifications
                  </NavLink>
                </li>
                <li className="hd-nav-item">
                  <NavLink
                    to="/profile"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}

          <div className="hd-mobile-menu" onClick={toggleMenu}>
            <div className={`hd-hamburger ${menuOpen ? "hd-hamburger-active" : ""}`}>
              <span className="hd-hamburger-line hd-line-top"></span>
              <span className="hd-hamburger-line hd-line-middle"></span>
              <span className="hd-hamburger-line hd-line-bottom"></span>
            </div>
          </div>
        </div>
      </header>

      {isMobile && (
        <footer className="hd-mobile-footer">
          <nav className="hd-mobile-nav">
            <ul className="hd-mobile-nav-list">
              <li className="hd-mobile-nav-item">
                <NavLink to="/" className="hd-mobile-nav-link">
                  <FaHome className="hd-mobile-nav-icon" />
                  {/* <span>Home</span> */}
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/explore" className="hd-mobile-nav-link">
                  <FaCompass className="hd-mobile-nav-icon" />
                  {/* <span>Explore</span> */}
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/notifications" className="hd-mobile-nav-link">
                  <FaBell className="hd-mobile-nav-icon" />
                  {/* <span>Notifications</span> */}
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/profile" className="hd-mobile-nav-link">
                  <FaUser className="hd-mobile-nav-icon" />
                  {/* <span>Profile</span> */}
                </NavLink>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </>
  );
};

export default Header;
