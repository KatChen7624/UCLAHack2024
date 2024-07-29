import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar()
{
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 500) {
            closeMenu();
        }
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
        closeMenu();
        }
    }, []);


    return (
        <>
        <nav className="navbar">
            <div className="teamlogo">
                <img src='/images/TeamLogo.jpg' alt="TeamLogo"/>
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
            <li>
                <Link
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                to='/'
                className="navbar--content"
                >
                Home
                </Link>
            </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to='/OurTeams'
              className="navbar--content"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/ControlCenter"
              className="navbar--content"
            >
              ControlCenter
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="https://etransfercenter.seas.ucla.edu/hack-accelerator-2024/"
              className="navbar--content"
            >
              AboutHack
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/ProjectDev"
              className="navbar--content"
            >
              ProjectDev
            </Link>
          </li>
        
        </ul>
      </div>


        </nav>
        </>
    )
}