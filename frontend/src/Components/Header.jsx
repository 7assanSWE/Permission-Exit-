// Importing Styles
import '../Styles/Header.css';

// Others
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        ExitRequests
      </Link>
      <Link to="/ExitApprovals" className={location.pathname === "/ExitApprovals" ? "active" : ""}>
        ExitApprovals
      </Link>
    </div>
  );
}


export default Header;