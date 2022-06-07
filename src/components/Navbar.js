import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem, NavLink, Nav} from 'reactstrap';


function Navbar() {
  return (
    <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#">
                <Link to='/'>Homepage</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
                <Link to='/tools'>Tools</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
                <Link to='/choices'>My choices</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
                <Link to='/sites'>Websites to follow</Link>
            </NavLink>
          </NavItem>
          <NavItem>
              <NavLink href='https://learn.seytech.co/courses' target='_blank'>
                  Seytech
              </NavLink>
          </NavItem>
        </Nav>
      
    </div>
  )
}

export default Navbar