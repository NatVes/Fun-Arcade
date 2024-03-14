import React from "react";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { FaGamepad } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Sidebar className={Sidebar}>
        <h2>Fun Arcade</h2>

        <Menu>
          <MenuItem component={<Link to="/" />}>
            <FaGamepad />
            Games
          </MenuItem>
          <MenuItem component={<Link to="/scores" />}>
            <MdOutlineSportsScore />
            Scores
          </MenuItem>
          <MenuItem component={<Link to="/funfacts" />}>
            <FaExclamation />
            Fun Facts
          </MenuItem>
          <MenuItem component={<Link to="/contact" />}>
            <IoIosContacts />
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navbar;
