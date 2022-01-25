import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {MdClose} from "react-icons/md";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ]
  
  const handleToggle = () => {
    setOpenNavbar(prev => !prev)
  };
  const closeMenu = () => {
    setOpenNavbar(false);
  };

  return(
    <nav className="navBar">
      <button onClick={handleToggle}>
        {openNavbar ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <ul className={`menuNav ${openNavbar ? "showMenu" : ""}`}>
        {links.map(link => {
          return(
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeclassname="active-link"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;
