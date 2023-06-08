
import './MobileSearch.css';
import CloseIcon from '@mui/icons-material/Close';

function MobileSearch({toggleMobileSearch}) {
  return (
    <div className="MobileSearch">
        <div className="mobile-search-input">
            <input placeholder="Search for accounts, transactions..."/>
        </div>

        <div className="search-results">
            <div className="accounts-results">
                <span className="section-span">Accounts</span>
                {/* div account stiliziran sa svim racunima sa queryija*/}
            </div>

            <div className="transactions-results">
            <span className="section-span" >Transactions</span>
                {/* div transaction stiliziran sa svim transakcijama sa queryija*/}
            </div>
        </div>

        <div className="search-footer">
            <CloseIcon className="close-icon" fontSize="large" onClick={toggleMobileSearch}/>
        </div>
    </div>
  );
}

export default MobileSearch;
