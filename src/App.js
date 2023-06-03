import './App.css';

import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
import MoreDropdown from './Components/MoreDropdown';

import { useState } from 'react';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <div className="App">
      <Navbar toggleDropdown={toggleDropdown} dropdownVisible={dropdownVisible}/>
      <div className="content">
        <SideNav homeHighlight={true} />
        <Main />
        {dropdownVisible && <MoreDropdown />}
      </div>
    </div>
  );
}

export default App;
