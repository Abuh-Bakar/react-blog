import { useState } from "react";

import "./navigation.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../assets/data/data";
import Logo from "../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="search icon">
          <AiOutlineSearch />
        </div>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
