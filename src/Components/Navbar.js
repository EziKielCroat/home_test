import './Navbar.css';
import { Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navbar({ toggleDropdown, dropdownVisible }) {

  return (
    <nav className="Navbar">
      <div className="search-container">
        <Search className="search-icon search-icon-change" />
        <input placeholder="Search for accounts, transactions..." type="search" className="search-input" />
      </div>
      <div className="move-button">
        <button onClick={() => console.log("move page.")}>Move</button>
      </div>
      <div className="action-buttons">
        <button onClick={() => console.log("create-account.")} className="create-account-button">Create account</button>
        {dropdownVisible ? <button onClick={() => {toggleDropdown()}} className="highlight expand-more-button"><ExpandMoreIcon className="expand-more-icon expand-more-icon-change" /></button>: <button onClick={() => {toggleDropdown()}} className="expand-more-button"><ExpandMoreIcon className="expand-more-icon expand-more-icon-change" /></button>}
      </div>
    </nav>
  );

}

export default Navbar;
  