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
console.log(collapse, showSidebar)
  return (
    <div className="d-flex">
      <Sidebar
        collapsed={collapse && width >= 768}
        hidden={(width < 768) ? showSidebar : false}
        backgroundColor="rgb(176, 65, 178)"
        width="270px"
      >
        <br />
        <Menu>
          <MenuItem className="d-flex menu-item my-5" icon={<FaGamepad style={{color: "aliceblue", scale: "3"}}/>} component={<Link to="/" />}>
            <h2 className="ms-2">GAMES</h2>
          </MenuItem>
          <MenuItem className="d-flex menu-item my-5" icon={<MdOutlineSportsScore style={{color: "aliceblue", scale: "3"}}/>} component={<Link to="/scores" />}>
            <h2 className="ms-2">SCORES</h2>
          </MenuItem>
          <MenuItem className="d-flex menu-item my-5" icon={<FaExclamation style={{color: "aliceblue", scale: "3"}}/>} component={<Link to="/funfacts" />}>
          <h2 className="ms-2">FUN FACTS</h2>
          </MenuItem>
          <MenuItem className="d-flex menu-item my-5" icon={<IoIosContacts style={{color: "aliceblue", scale: "3"}}/>} component={<Link to="/contact" />}>
          <h2 className="ms-2">CONTACT</h2>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className={displayNone} onClick={toggleSidebar}>
      <FaBars className="burger-icon my-3 mx-5"/>
      </div>
    </div>
  );
};

export default Navbar;
