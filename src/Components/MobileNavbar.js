import './MobileNavbar.css';
import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  return (
    <nav className="Navbar">

        <div className="search-container">
            <Search className="search-icon search-icon-change" />
            <input placeholder="Search for accounts, transactions..." type="search" className="search-input" />
        </div>
        <div className="more-mobile">
            <MenuIcon className="menu-icon" fontSize="large" />
        </div>
    </nav>
  );
}

export default Navbar;
  