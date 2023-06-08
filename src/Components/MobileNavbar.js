import { useState, useEffect, useRef } from 'react';
import './MobileNavbar.css';

import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function MobileNavbar({ visible, setVisibleOriginal }) {
  const mobileNavbarRef = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setVisible] = useState(visible);

  let mobileNavbarClassName = `MobileNavbar ${isVisible ? 'visible' : ''}`;
  let overlayClassName = `Overlay ${isVisible ? 'visible' : ''}`;

  useEffect(() => {
    if (mobileNavbarRef.current && isVisible) {
      setVisible(false);
      mobileNavbarRef.current.classList.add('visible');
      setVisible(true);
    } else if (mobileNavbarRef.current && !isVisible) {
      mobileNavbarRef.current.classList.remove('visible');
      overlayRef.current.classList.remove('visible');
      setTimeout(() => {
        setVisible(false);
        setVisibleOriginal(false);
      }, 550);
    }
  }, [isVisible, setVisibleOriginal]);

  const hideNavbar = () => {
    if (mobileNavbarRef.current && overlayRef.current) {
      mobileNavbarRef.current.classList.remove('visible');
      overlayRef.current.classList.remove('visible');
      setTimeout(() => {
        setVisible(false);
        setVisibleOriginal(false);
      }, 550);
    }
  };

  const handleLiClick = (index) => {
    const lis = mobileNavbarRef.current.querySelectorAll('.MobileNavbarLi');
    lis.forEach((li, i) => {
      if (i === 0) {
        return;
      }
      if (i === index) {
        li.style.color = '#E6007A';
      } else {
        li.style.color = '';
      }
    });
  };

  return (
    <>
      {isVisible && <div className={overlayClassName} onClick={hideNavbar} ref={overlayRef}></div>}
      {isVisible && (
        <div className={mobileNavbarClassName} ref={mobileNavbarRef}>
          <ul className="MobileNavbarUl">
            <li className="MobileNavbarLi" style={{ color: '#E6007A' }} onClick={() => {handleLiClick(0); console.log('home');}}><HouseIcon className="house-icon" />Home</li>
            <li className="MobileNavbarLi" onClick={() => {handleLiClick(1); console.log('myaccount');}}><PersonIcon className="person-icon" />My Account</li>
            <li className="MobileNavbarLi" onClick={() => {handleLiClick(2); console.log('getstarted');}}><PlayArrowIcon className="play-arrow-icon" />Get Started</li>
            <li className="MobileNavbarLi" onClick={() => {handleLiClick(3); console.log('defi');}}><AccountBalanceWalletIcon className="account-wallet-icon" />DeFi</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
