
import './MoreDropdown.css';
import SettingsIcon from '@mui/icons-material/Settings';
import ConstructionIcon from '@mui/icons-material/Construction';
import LightModeIcon from '@mui/icons-material/LightMode';
import PaidIcon from '@mui/icons-material/Paid';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

function MoreDropdown() {

    return(
        <div id="more-dropdown" className="more-dropdown">
            <ul>
                <li className="first-dropdown"><SettingsIcon className="settings-icon icon" fontSize="large"/>Settings</li>
                <a href="https://github.com/EziKielCroat/home_test"><li className="second-dropdown"><ConstructionIcon className="construction-icon icon" fontSize="large"/>Development</li></a>
                <li className="third-dropdown"><LightModeIcon className="lightmode-icon icon" fontSize="large"/>Theme <label for="theme" className="theme"><span class="theme__toggle-wrap"><input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" /><span class="theme__icon"><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span><span class="theme__icon-part"></span></span></span></label></li>
                <li className="fourth-dropdown"><PaidIcon className="paidicon-icon icon" fontSize="large"/>Currency</li>
                <li className="fifth-dropdown"><ContactSupportIcon className="contactsupport-icon icon" fontSize="large"/>Contact & support</li>
            </ul>
        </div>
    )
}

export default MoreDropdown