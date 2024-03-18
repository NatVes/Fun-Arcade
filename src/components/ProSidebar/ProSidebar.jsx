import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { FaGamepad } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="sidenav">
      <Sidebar collapsed={!showNav} backgroundColor="rgb(176, 65, 178)" className="navStyle">
        <Menu>
          <MenuItem className="menuItemCenter">
            {showNav ? <IoMdClose onClick={toggleSidebar}/>: <GiHamburgerMenu onClick={toggleSidebar} />}
            
          </MenuItem>
          <MenuItem component={<Link to="/" />} className="menuItem">
            <FaGamepad className="me-3"/>
            {showNav ? 'GAMES' : ''}
            
          </MenuItem>
          <MenuItem component={<Link to="/scores" />} className="menuItem">
            <MdOutlineSportsScore className="me-3"/>
            {showNav ? 'SCORES' : ''}
          </MenuItem>
          <MenuItem component={<Link to="/funfacts" />} className="menuItem">
            <FaExclamation className="me-2"/>
            {showNav ? 'FUN FACTS' : ''}
          </MenuItem>
          <MenuItem component={<Link to="/contact" />} className="menuItem">
            <IoIosContacts className="me-3"/>
            {showNav ? 'CONTACT' : ''}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navbar;
