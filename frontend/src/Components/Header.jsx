import '../Styles/Students.css';

import {Link} from 'react-router-dom';

function Header() {

    return(
        <div className="buttons_container">
            <Link to="/">ExitRequests</Link>
            <Link to="/ExitApprovals">ExitApprovals</Link>
        </div>
    )
}

export default Header;