import '../Styles/Header.css';

import {Link} from 'react-router-dom';

function Header() {

    return(
        <div className="header">
            <Link to="/">ExitRequests</Link>
            <Link to="/ExitApprovals">ExitApprovals</Link>
        </div>
    )
}

export default Header;