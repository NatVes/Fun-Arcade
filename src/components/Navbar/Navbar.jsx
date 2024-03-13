import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
 import { Link } from 'react-router-dom';

return (
<Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/games" />}>Games</MenuItem>
    <MenuItem component={<Link to="/scores" />}>Scores</MenuItem>
    <MenuItem component={<Link to="/fun-facts" />}>Fun Facts</MenuItem>
    <MenuItem component={<Link to="/contact" />}>Contact</MenuItem>
  </Menu>
</Sidebar>

);

export default Navbar; 




