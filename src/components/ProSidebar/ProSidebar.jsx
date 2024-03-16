import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { FaGamepad } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ showNav, setShowNav ] = useState 
  (false)

   // Function to toggle the sidebar visibility
   const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="sidenav">
      <Sidebar collapsed={!showNav}>
        <Menu>
          <MenuItem className="menuItemCenter">
         <GiHamburgerMenu onClick={toggleSidebar}/>
         </MenuItem>
          <MenuItem component={<Link to="/" />} className="menuItem">
            <FaGamepad />
            Games 
          </MenuItem>
          <MenuItem component={<Link to="/scores" />} className="menuItem">
            <MdOutlineSportsScore />
            Scores 
          </MenuItem>
          <MenuItem component={<Link to="/funfacts" />} className="menuItem">
            <FaExclamation />
            Fun Facts
          </MenuItem>
          <MenuItem component={<Link to="/contact" />} className="menuItem">
            <IoIosContacts />
            Contact
          </MenuItem>
        </Menu>
       </Sidebar>
    </div>
  );
};


export default Navbar;
