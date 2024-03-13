import { ProSidebar, Menu, MenuItem, SidebarFooter, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import './ProSidebar.css';
import {FaGem, FaHeart} from 'react-icons/fa';

export const ProSidebar = () => {

  return(
    <div>
      <ProSidebar>
<SidebarHeader>
  <h2>Fun Arcade</h2>
</SidebarHeader>
<SidebarContent>
  <Menu>
    <MenuItem icon={<FaGem />}>Games</MenuItem>
    <MenuItem icon={<FaHeart />}>Scores</MenuItem>
    <MenuItem icon={<FaHeart />}>Fun Facts</MenuItem>
    <MenuItem icon={<FaHeart />}>Contact</MenuItem>
</Menu>
</SidebarContent>
<SidebarFooter>
  @Fun Arcade
</SidebarFooter>
      </ProSidebar>
    </div>
  )
  };

export default ProSidebar;





