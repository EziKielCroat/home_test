import { useState, useEffect, useRef } from 'react';
import './MobileNavbar.css';

function MobileNavbar({ visible }) {
  const mobileNavbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (mobileNavbarRef.current && !mobileNavbarRef.current.contains(event.target)) {
      // Clicked outside the MobileNavbar, hide it
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visible]);

  const [isVisible, setVisible] = useState(visible);
  const mobileNavbarClassName = `MobileNavbar ${isVisible ? 'visible' : ''}`;

  return (
    <div className={mobileNavbarClassName} ref={mobileNavbarRef}>
      <div className="">
        {/* Mobile navbar content */}
      </div>
    </div>
  );
}

export default MobileNavbar;
