import { Dispatch, SetStateAction } from 'react';
import './SideMenu.css';

interface SideMenuProps {
    isMenuVisible: boolean
    setIsMenuVisible: Dispatch<SetStateAction<boolean>>
}

const SideMenu = ({isMenuVisible, setIsMenuVisible}: SideMenuProps) => {

  return (
      <div className={`side-menu ${isMenuVisible ? 'show' : ''}`}>
        <ul>
          <li><a href="#section1">Github</a></li>
          <li><a href="#section2">LinkedIn</a></li>
          <li>vedranisak1998@gmail.com</li>
          <li onClick={() => { setIsMenuVisible(!isMenuVisible) }}>X</li>
        </ul>
      </div>
  );
};

export default SideMenu;
