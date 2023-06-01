import './SideNav.css';

import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { useState, useEffect} from 'react';

function SideNav(props) {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const {homeHighlight} = props;

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="SideNav">
      <ul>
        {homeHighlight ? <li style={{color: "#E6007A"}} className={`home ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}><HouseIcon className="house-icon" />Home</li> : <li className={`home ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}><HouseIcon className="house-icon" />Home</li>}
        
        <li className={`account ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}><PersonIcon className="person-icon" />My Account</li>
        <li className={`getstarted ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}><PlayArrowIcon className="play-arrow-icon" />Get Started</li>
        <li className={`defi ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}><AccountBalanceWalletIcon className="account-wallet-icon" />DeFi</li>
      </ul>
    </div>
  );
}

export default SideNav;
