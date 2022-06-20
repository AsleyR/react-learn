import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h2>Task Tracker</h2>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
