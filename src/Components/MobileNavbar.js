import React, { useState, useEffect, useRef } from 'react';
import './MobileNavbar.css';

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

  return (
    <>
      {isVisible && <div className={overlayClassName} onClick={hideNavbar} ref={overlayRef}></div>}
      {isVisible && (
        <div className={mobileNavbarClassName} ref={mobileNavbarRef}>
          {/* Mobile navbar content */}
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
