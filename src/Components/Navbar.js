import './Navbar.css';
import { Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ toggleDropdown, dropdownVisible, toggleMobileNavbar }) {

  return (
    <nav className="Navbar">
      <div className="search-mobile">
        <button><Search className="search-icon-mobile" fontSize="large"/></button>
      </div>
      <div className="search-container">
        <Search className="search-icon" />
        <input type="search" placeholder="Search for accounts, transactions..." className="search-input" />
      </div>
      <div className="move-button">
        <button onClick={() => console.log("move page.")}>Move</button>
      </div>
      <div className="action-buttons">
        <button onClick={() => console.log("create-account.")} className="create-account-button">Create account</button>
        {dropdownVisible ? <button onClick={() => {toggleDropdown()}} className="highlight expand-more-button"><ExpandMoreIcon className="expand-more-icon expand-more-icon-change" /></button>: <button onClick={() => {toggleDropdown()}} className="expand-more-button"><ExpandMoreIcon className="expand-more-icon expand-more-icon-change" /></button>}
      </div>
      <div className="more-mobile" onClick={toggleMobileNavbar}>
            <MenuIcon className="menu-icon" fontSize="large" sx={{ color: "#7D879A" }}/>
      </div>
    </nav>
  );

}

export default Navbar;
  