import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { FaGamepad, FaExclamation, FaBars } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [collapse, setCollapse] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [displayNone, setDisplayNone] = useState("");

  function getSize() {
      setWidth(window.innerWidth)
    }

  useEffect(() => {
    getSize();
    window.addEventListener("resize", getSize);
    if(width < 768) {
      setCollapse(true);
      setDisplayNone("");
      setShowSidebar(true)
    } else {
      setCollapse(false);
      setDisplayNone("displayNone");
    }

    return() => {
      window.removeEventListener("resize", getSize);
    }
  }, [width])

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="d-flex">
      <Sidebar
        collapsed={collapse}
        hidden={(width < 768) ? showSidebar : false}
      >
        <h2>FUN ARCADE</h2>
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
      <div className={displayNone} onClick={toggleSidebar}>
      <FaBars className="icon"/>
      </div>
    </div>
  );
};

export default Navbar;
