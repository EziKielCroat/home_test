import './App.css';

import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
import MoreDropdown from './Components/MoreDropdown';

import { useState } from 'react';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileNavbar = () => {
    setMobileNavbarVisible(!mobileNavbarVisible);
  };
  
  return (
    <div className="App">
      <Navbar toggleDropdown={toggleDropdown} dropdownVisible={dropdownVisible} toggleMobileNavbar={toggleMobileNavbar}/>
      <div className="content">
        <SideNav homeHighlight={true} />
        <Main />
        {dropdownVisible && <MoreDropdown />}
        {mobileNavbarVisible && <MobileNavbar visible={mobileNavbarVisible} setVisible={setMobileNavbarVisible} />} {/* Pass the visibility state as a prop */}
        </div>
    </div>
  );
}

export default App;
