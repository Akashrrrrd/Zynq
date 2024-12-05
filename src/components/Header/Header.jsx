import React, { useState, useEffect } from "react";
import header_logo from "./../../assets/header_logo.png";
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

  // Minimalist SVG Icons (same as before)
  const HomeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const ExploreIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <path d="M11 8l0 6"></path>
      <path d="M8 11l6 0"></path>
    </svg>
  );

  const NotificationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );

  const ProfileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <>
      {/* Top Header for Desktop */}
      <header
        className={`hd-header ${scrolled ? "hd-header-scrolled" : ""} 
        ${isMobile ? "hd-header-mobile" : "hd-header-desktop"}`}
      >
        <div className="hd-header-container">
          <div className="hd-logo-section">
            <img src={header_logo} alt="Zynq Logo" className="hd-logo-image" />
            <h1 className="hd-logo-title">Zynq</h1>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav
              className={`hd-navigation ${
                menuOpen ? "hd-navigation-open" : ""
              }`}
            >
              <ul className="hd-nav-list">
                <li className="hd-nav-item">
                  <a href="#home" onClick={closeMenu} className="hd-nav-link">
                    <span className="hd-nav-icon">
                      <HomeIcon />
                    </span>
                    <span className="hd-nav-text">Home</span>
                  </a>
                </li>
                <li className="hd-nav-item">
                  <a
                    href="#explore"
                    onClick={closeMenu}
                    className="hd-nav-link"
                  >
                    <span className="hd-nav-icon">
                      <ExploreIcon />
                    </span>
                    <span className="hd-nav-text">Explore</span>
                  </a>
                </li>
                <li className="hd-nav-item">
                  <a
                    href="#notifications"
                    onClick={closeMenu}
                    className="hd-nav-link"
                  >
                    <span className="hd-nav-icon">
                      <NotificationIcon />
                    </span>
                    <span className="hd-nav-text">Notifications</span>
                  </a>
                </li>
                <li className="hd-nav-item">
                  <a
                    href="#profile"
                    onClick={closeMenu}
                    className="hd-nav-link"
                  >
                    <span className="hd-nav-icon">
                      <ProfileIcon />
                    </span>
                    <span className="hd-nav-text">Profile</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}

          <div className="hd-mobile-menu" onClick={toggleMenu}>
            <div
              className={`hd-hamburger ${
                menuOpen ? "hd-hamburger-active" : ""
              }`}
            >
              <span className="hd-hamburger-line hd-line-top"></span>
              <span className="hd-hamburger-line hd-line-middle"></span>
              <span className="hd-hamburger-line hd-line-bottom"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Footer Navigation */}
      {isMobile && (
        <footer className="hd-mobile-footer">
          <nav className="hd-mobile-nav">
            <ul className="hd-mobile-nav-list">
              <li className="hd-mobile-nav-item">
                <a href="#home" className="hd-mobile-nav-link">
                  <HomeIcon />
                </a>
              </li>
              <li className="hd-mobile-nav-item">
                <a href="#explore" className="hd-mobile-nav-link">
                  <ExploreIcon />
                </a>
              </li>
              <li className="hd-mobile-nav-item">
                <a href="#notifications" className="hd-mobile-nav-link">
                  <NotificationIcon />
                </a>
              </li>
              <li className="hd-mobile-nav-item">
                <a href="#profile" className="hd-mobile-nav-link">
                  <ProfileIcon />
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </>
  );
};

export default Header;
