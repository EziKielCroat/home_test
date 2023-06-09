
import './MobileSearch.css';
import CloseIcon from '@mui/icons-material/Close';
import { Search } from '@mui/icons-material';

function MobileSearch({ toggleMobileSearch }) {
  return (
    <div className="MobileSearch">
      <div className="search-close-parent">
        <h3>Search</h3>
        <CloseIcon className="close-icon" fontSize="medium" onClick={toggleMobileSearch} />
      </div>
      <div className="search-container-mobile">
        <Search className="search-icon-mobile-2" />
        <input type="search" placeholder="Search for accounts, transactions..." className="search-input" />
      </div>
    </div>
  );
}

export default MobileSearch;
