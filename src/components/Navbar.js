import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";

function Navbar() {
  return (
    <div className="nav">
      <Nav pills>
        <NavItem>
          <NavLink>
            <Link to="/" className="link">
              Homepage
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/tools" className="link">
              Tools
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/choices" className="link">
              My choices
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/follow-sites" className="link">
              Websites to follow
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://learn.seytech.co/courses"
            target="_blank"
            className="link"
          >
            Seytech
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;
