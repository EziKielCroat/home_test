import './App.css';

import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
import MoreDropdown from './Components/MoreDropdown';
import MobileSearch from './Components/MobileSearch';

import { useState } from 'react';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  const toggleMobileNavbar = () => {
    setMobileNavbarVisible(!mobileNavbarVisible);
  }

  const toggleMobileSearch = () => {
    setMobileSearchVisible(!mobileSearchVisible);
  }
  
  return (
    <div className="App">
      <Navbar toggleDropdown={toggleDropdown} dropdownVisible={dropdownVisible} toggleMobileNavbar={toggleMobileNavbar} toggleMobileSearch={toggleMobileSearch}/>
      <div className="content">
        <SideNav homeHighlight={true} />
        <Main />
        {dropdownVisible && <MoreDropdown />}
        {mobileNavbarVisible && (<MobileNavbar visible={mobileNavbarVisible} setVisibleOriginal={setMobileNavbarVisible} />)}
        {mobileSearchVisible && (<MobileSearch toggleMobileSearch={toggleMobileSearch}/>)}
        </div>
    </div>
  );
}

export default App;
