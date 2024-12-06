import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import header_logo from "./../../assets/header_logo.png";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaUser,
  FaShareAlt,
  FaRobot,
} from "react-icons/fa";
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

    checkMobileView();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobileView);

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
          {isMobile && (
            <div className="hd-mobile-ai-section">
              <NavLink to="/ai" className="hd-mobile-ai-link">
                <FaRobot className="hd-mobile-ai-icon" />
              </NavLink>
            </div>
          )}

          {!isMobile && (
            <nav
              className={`hd-navigation ${
                menuOpen ? "hd-navigation-open" : ""
              }`}
            >
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
                    to="/shared"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    Shared
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
                <li className="hd-nav-item">
                  <NavLink
                    to="/ai"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "hd-nav-link active" : "hd-nav-link"
                    }
                  >
                    AI
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}

          {!isMobile && (
            <div className="hd-ai-section">
              <NavLink
                to="/ai"
                className="hd-ai-link"
                onClick={closeMenu}
              ></NavLink>
            </div>
          )}
        </div>
      </header>

      {isMobile && (
        <footer className="hd-mobile-footer">
          <nav className="hd-mobile-nav">
            <ul className="hd-mobile-nav-list">
              <li className="hd-mobile-nav-item">
                <NavLink to="/" className="hd-mobile-nav-link">
                  <FaHome className="hd-mobile-nav-icon" />
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/explore" className="hd-mobile-nav-link">
                  <FaCompass className="hd-mobile-nav-icon" />
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/shared" className="hd-mobile-nav-link">
                  <FaShareAlt className="hd-mobile-nav-icon" />
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/notifications" className="hd-mobile-nav-link">
                  <FaBell className="hd-mobile-nav-icon" />
                </NavLink>
              </li>
              <li className="hd-mobile-nav-item">
                <NavLink to="/profile" className="hd-mobile-nav-link">
                  <FaUser className="hd-mobile-nav-icon" />
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
