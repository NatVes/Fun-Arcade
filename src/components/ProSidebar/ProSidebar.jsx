import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { FaGamepad, FaExclamation } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [hidden, setHidden] = useState("hidden")

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  const changeHidden = () => {
    setHidden(h => h === "hidden" ? "" : "hidden")
  }

  return (
    <div className="sidenav">
      <Sidebar collapsed={!showNav} backgroundColor="rgb(176, 65, 178)" width="270px" collapsedWidth="90px" className={`navStyle ${hidden}`}>
        <Menu>
          <MenuItem className="menuItemCenter">
            {showNav ? <IoMdClose onClick={toggleSidebar}/>: <GiHamburgerMenu onClick={toggleSidebar} />}
          </MenuItem>
          <MenuItem component={<Link to="/" />} className="menuItem">
            <FaGamepad className="me-2 navIcon"/>
            {showNav ? 'GAMES' : ''}
          </MenuItem>
          <MenuItem component={<Link to="/scores" />} className="menuItem">
            <MdOutlineSportsScore className="me-2 navIcon"/>
            {showNav ? 'SCORES' : ''}
          </MenuItem>
          <MenuItem component={<Link to="/funfacts" />} className="menuItem">
            <FaExclamation className="me-1 navIcon"/>
            {showNav ? 'FUN FACTS' : ''}
          </MenuItem>
          <MenuItem component={<Link to="/contact" />} className="menuItem">
            <IoIosContacts className="me-2 navIcon"/>
            {showNav ? 'CONTACT' : ''}
          </MenuItem>
        </Menu>        
      </Sidebar>
      <div className={`sm-burger ${!hidden ? "active" : ""} ${(!hidden && showNav) && "open"}`} onClick={changeHidden}>
        {!hidden ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
