"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workSubmenuOpen, setWorkSubmenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  const handleWorkClick = () => {
    setWorkSubmenuOpen((isOpen) => !isOpen);
    setAboutSubmenuOpen(false);
    setActiveSection("work");
  };

  const handleAboutClick = () => {
    setAboutSubmenuOpen((isOpen) => !isOpen);
    setWorkSubmenuOpen(false);
    setActiveSection("about");
  };

  const handleBookClick = () => {
    setWorkSubmenuOpen(false);
    setAboutSubmenuOpen(false);
    setActiveSection("book");
  };

  const handleSubmenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            DRA<span className={styles.slash}>/</span>W
          </div>
        </div>

        <button
          className={`${styles.menuIcon} ${menuOpen ? styles.active : ""}`}
          onClick={handleHamburgerClick}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.menuPanel}>
          <div className={styles.tagline}>
            <p>design</p>
            <p>research</p>
            <p>architecture</p>
            <p>wallance</p>
          </div>

          <nav className={styles.navLinks} id="primary-navigation" aria-label="Main navigation">
            <div className={styles.navItemContainer}>
              <button
                className={`${styles.navItem} ${
                  activeSection === "work" || activeSection.startsWith("work-")
                    ? styles.active
                    : ""
                }`}
                onClick={handleWorkClick}
                aria-expanded={workSubmenuOpen}
                aria-controls="work-submenu"
              >
                <span className={styles.number}>01</span> work
              </button>

              {workSubmenuOpen && (
                <div className={styles.submenu} id="work-submenu">
                  <button
                    className={`${styles.submenuItem} ${
                      activeSection === "work-residential" ? styles.active : ""
                    }`}
                    onClick={() => handleSubmenuClick("work-residential")}
                  >
                    residential
                  </button>
                  <button
                    className={`${styles.submenuItem} ${
                      activeSection === "work-modular" ? styles.active : ""
                    }`}
                    onClick={() => handleSubmenuClick("work-modular")}
                  >
                    modular
                  </button>
                  <button
                    className={`${styles.submenuItem} ${
                      activeSection === "work-special" ? styles.active : ""
                    }`}
                    onClick={() => handleSubmenuClick("work-special")}
                  >
                    special projects
                  </button>
                </div>
              )}
            </div>

            <button
              className={`${styles.navItem} ${
                activeSection === "book" ? styles.active : ""
              }`}
              onClick={handleBookClick}
            >
              <span className={styles.number}>02</span> book
            </button>

            <div className={styles.navItemContainer}>
              <button
                className={`${styles.navItem} ${
                  activeSection === "about" ||
                  activeSection.startsWith("about-")
                    ? styles.active
                    : ""
                }`}
                onClick={handleAboutClick}
                aria-expanded={aboutSubmenuOpen}
                aria-controls="about-submenu"
              >
                <span className={styles.number}>03</span> about
              </button>

              {aboutSubmenuOpen && (
                <div className={styles.submenu} id="about-submenu">
                  <button
                    className={`${styles.submenuItem} ${
                      activeSection === "about-bio" ? styles.active : ""
                    }`}
                    onClick={() => handleSubmenuClick("about-bio")}
                  >
                    bio
                  </button>
                  <button
                    className={`${styles.submenuItem} ${
                      activeSection === "about-connect" ? styles.active : ""
                    }`}
                    onClick={() => handleSubmenuClick("about-connect")}
                  >
                    connect
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      <div className={styles.headerDivider} />
    </header>
  );
}
