import React from "react";

// Router
import { Link } from "react-scroll";

export const NavLink = ({ path, text, onClick, className }) => (
  <li className="link">
    <Link
      className={className}
      activeClass="active"
      to={path}
      hashSpy={true}
      spy={true}
      smooth={true}
      onClick={onClick}
      delay={100}
      offset={-70}
      duration={500}
    >
      {text}
    </Link>
  </li>
);
